import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {oneProfile} from '../../Redux/actions/profileAction';
import {useParams} from 'react-router-dom';
import UserCard from '../UserCard/UserCard';
import CarouselPortfolio from "../CarouselPortfolio/CarouselPortfolio";
import {Col} from "antd";
import UserCat from "../UserCat/UserCat";
import ActivCardTasck from "../ActivCardTusk/ActivCardTusk";
import styles from './styles.module.css'

const UserPage = () => {

    const {id} = useParams();
    const dispatch = useDispatch();
    const meProfile = useSelector(state => state.profile);
    const user = useSelector(state => state.user);


    useEffect(() => {
        dispatch(oneProfile(id))
    }, [])


    return (
        // //
        //  {/*/!*//     <Row>*!/*/}
        //  {/*//*/}
        //  {/*//         {meProfile && meProfile?.map(el =>*/}
        //  //             <UserCard key={el.id} name={el.name} description={el.description} img={el.img}
        //  //                       userId={user.id}
        //  //                       id={id}/>
        //  //         )}
        //  //     </Row>
        //  //
        //  //     <Row>
        //  //         {meProfile.map(el =>
        //  //             <CarouselPortfolio key={`${el.id}carousel`} userId={user.id}
        //  //                                id={id}/>
        //  //         )
        //  //         }
        //  //     </Row>
        //  // </>
        <>
            <div className={styles.userContainer}>
            <div className={styles.wrapperUserPage}>
                <div className={styles.userCardWrapper}>
                        {meProfile && meProfile?.map(el =>
                            <UserCard key={el.id} name={el.name} description={el.description} img={el.img}
                                      userId={user.id}
                                      id={id}/>
                        )}
                </div>
                <div className={styles.wrapperCat}>
                    <div className={styles.wrapperCatInside}>
                        < UserCat/>
                    </div>
                </div>
                <div className={styles.wrapperCarusel}>
                    <Col>
                        {meProfile.map(el =>
                            <CarouselPortfolio key={`${el.id}carousel`} userId={user.id} id={id}/>)}
                    </Col>
                </div>
            </div>
            <Col span={24}>
                < ActivCardTasck/>
            </Col>
            </div>
        </>
    )
}


export default UserPage;
