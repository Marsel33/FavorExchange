import styles from '../userPage/styles.module.css'
import { Card, Button, Input, Form } from 'antd';
import { Link, useParams } from 'react-router-dom';
import UserCat from '../UserCat/UserCat';
import EditPorofile from '../EditProfile/EditProfile';

const { Meta } = Card;

const UserCard = ({ img, id, userId, description, name }) => {
  const size = 'large'


  const noAvatar = 'https://osipbove.ru/design/image/otzyvy/no_avatar.jpg'
  return (
    <>
{console.log(img)}
      <div className={styles.s} >
        < UserCat />
       
        <Card
          hoverable
          style={{ width: 400, fontSize: 24, height: 500 }}
          cover={ <img className={styles.ava} alt="example" src={img} />}
        >
          <Meta title={name} description={description} />

          <Link to={'/UserHistory'}>
            <Button danger size={size} className={styles.button} >закрытые зделки</Button>
          </Link>

          <EditPorofile key={id} description={description} name={name} id={id}/>

        </Card>
      </div>
    </>
  )
}

export default UserCard
