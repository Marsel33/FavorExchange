import styles from '../userPage/styles.module.css'
import { Card, Button, Input, Form } from 'antd';
import { Link, useParams } from 'react-router-dom';
import UserCat from '../UserCat/UserCat';
import EditPorofile from '../EditProfile/EditProfile';
import {StarOutlined } from '@ant-design/icons';
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
      {console.log(img)}
      <div className={styles.s} >
          < UserCat />
        <Card
          hoverable
          style={{ width: 400, fontSize: 24, height: 500 }}
          cover={<img className={styles.ava} alt="example" src={img} />}
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
          <EditPorofile key={id} description={description} name={name} id={id} />
          <StarOutlined />
          <StarOutlined />
          <StarOutlined />
          <StarOutlined />
          <StarOutlined />

        </Card>
      </div>
    </>
  )
}

export default UserCard
