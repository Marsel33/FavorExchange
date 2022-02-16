import {Carousel, Col} from 'antd';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {allProfile} from '../../Redux/actions/portfolioAction';
import style from './Carusek.css'

const CarouselPortfolio = ({id, userId}) => {

    const dispatch = useDispatch()
    const userPortfolio = useSelector(state => state.portfolio)

    useEffect(() => {

        dispatch(allProfile(id))
    }, [])

    return (
        <>
            <Col>
               <div className={style.wrapperCarusel}>
                   <Carousel style={{maxHeight:'600px', height: '100%', marginTop: '10%'}} autoplay>

                       {userPortfolio.map(el =>

                           <img src={el.img} style={{height: '400px', width: '400px'}}/>
                       )}
                   </Carousel>
               </div>
            </Col>


        </>


    )
}

export default CarouselPortfolio
