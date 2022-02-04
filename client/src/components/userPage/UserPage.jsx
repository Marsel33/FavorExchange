import UserCard from '../UserCard/UserCard';
import CarouselPortfolio from '../CarouselPortfolio/CarouselPortfolio';


const UserPage = () => {

  // const meProfile = useSelection(state => state.profile);

  const meProfile = [
    {
      name: 'test',
      img: 'https://assets.gq.ru/photos/5d9f42af3a54c0000840d313/16:9/w_2560%2Cc_limit/01.jpg',
      user_id: 1,
      description: 'teste test tes test',
      id: 1
    }
  ]



  return (
    <>
      {meProfile.map(el =>
        <UserCard key={el.id} name={el.name} description={el.description} img={el.img} userId={el.user_id} id={el.id} />
      )}

      <h2 >Портфолио</h2>

      <CarouselPortfolio />

    </>
  )

}


export default UserPage;
