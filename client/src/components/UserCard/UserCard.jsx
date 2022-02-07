import styles from '../userPage/styles.module.css'
import { Card, Button, Input } from 'antd';
import { Link } from 'react-router-dom';
import UserCat from '../UserCat/UserCat';

const { Meta } = Card;

const UserCard = ({ img, id, userId, description, name }) => {
  const size = 'large'


let file = ''

  const imgHendler = (e) => {
     file = e.target.value
  }

  const reader = new FileReader();

  reader.onload = ev => {
    console.log(ev)
  }

  return (
    <>
      <div className={styles.s} >
          < UserCat />

        <Card
          hoverable
          style={{ width: 400, fontSize: 24, height: 500 }}
          cover={<img className={styles.ava} alt="example" src={file} />}
        >
          <Meta title={name} description={description} />

          <Link to={'/UserHistory'}>
            <Button danger size={size} className={styles.button} >закрытые зделки</Button>
          </Link>

          <Input
          name='img'
          type='file'
          onChange={imgHendler}
           />

        </Card>


      </div>
    </>
  )
}

export default UserCard
