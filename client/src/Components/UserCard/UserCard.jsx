import styles from '../userPage/styles.module.css'
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

const { Meta } = Card;


const UserCard = () => {
  const size = 'large'

  return (
    <>
      <div className={styles.s} >

        <div>
          <h3>стригу</h3>
          <h3>чиню</h3>
          <h3>учу</h3>

        </div>

        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Meta title="Егор" description="" />

          <Link to={'/UserHistory'}>
          <Button style={{marginRight: '20px'}} size={size} >Default</Button>
          </Link>

        </Card>


      </div>
    </>
  )
}

export default UserCard
