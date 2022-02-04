import UserCard from '../UserCard/UserCard';
import styles from './styles.module.css'
import CarouselPortfolio from '../CarouselPortfolio/CarouselPortfolio';


const UserPage = () => {



  return (
    <>
      <UserCard />

      <h2 className={styles.a}>Портфолио</h2>

      <CarouselPortfolio />

    </>
  )

}


export default UserPage;
