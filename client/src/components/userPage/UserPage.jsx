import CarouselPortfolio from '../CarouselPortfolio/CarouselPortfolio';

import styles from './styles.module.css'

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { oneProfile } from '../../Redux/actions/profileAction';
import { useParams } from 'react-router-dom';
import UserCard from '../UserCard/UserCard';

const UserPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const meProfile = useSelector(state => state.profile);



    useEffect(() => {
        dispatch(oneProfile(id))
    }, [])

  useEffect(() => {
    dispatch(oneProfile(id))
  }, [])


    return (
        < div className={styles.userPage}>
            {meProfile.map(el =>
                <UserCard key={el.id} name={el.name} description={el.description} img={el.img} userId={el.user_id}
                          id={el.id}/>
            )}

            <CarouselPortfolio/>


            <CarouselPortfolio/>

        </div>
    )

}


export default UserPage;
