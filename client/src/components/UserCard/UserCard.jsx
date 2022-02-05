import styles from '../userPage/styles.module.css'
import { Card, Button } from 'antd';
import { Link } from 'react-router-dom';
import UserCat from '../UserCat/UserCat';

const { Meta } = Card;

const UserCard = ({ img, id, userId, description, name }) => {
  const size = 'large'

  return (
    <>
      <div className={styles.s} >
          < UserCat />
       
        <Card
          hoverable
          style={{ width: 400, fontSize: 24, height: 500 }}
          cover={<img alt="example" src={img} />}
        >
          <Meta title={name} description={description} />

          <Link to={'/UserHistory'}>
            <Button danger size={size} className={styles.button} >закрытые зделки</Button>
          </Link>

        </Card>


      </div>
    </>
  )
}

export default UserCard
