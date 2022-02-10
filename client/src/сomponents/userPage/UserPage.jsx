import CarouselPortfolio from '../CarouselPortfolio/CarouselPortfolio';

import styles from './styles.module.css'

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { oneProfile } from '../../Redux/actions/profileAction';
import { useParams } from 'react-router-dom';
import UserCard from '../UserCard/UserCard';
import { Row } from 'antd';

const UserPage = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const meProfile = useSelector(state => state.profile);
  const user = useSelector(state => state.user);

  console.log(user, '==================> user')

  console.log('profile userPage-------->',meProfile)


  useEffect(() => {
    dispatch(oneProfile(id))
  }, [])


  return (
    <>
      <Row >

        {meProfile && meProfile?.map(el =>
          <UserCard key={el.id} name={el.name} description={el.description} img={el.img} userId={el.user_id}
            id={el.id} />
        )}
      </Row>

      <Row>
        {meProfile.map(el =>
          <CarouselPortfolio key={el.id} id={el.id} />
        )
        }
      </Row>
    </>


  )

}


export default UserPage;
