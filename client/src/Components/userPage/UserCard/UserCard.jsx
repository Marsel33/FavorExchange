import styles from '../styles.module.css'
import { Card } from 'antd';
import { Link } from 'react-router-dom';
const { Meta } = Card;


const UserCard = () => {
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
            <button>history</button>
          </Link>

        </Card>


      </div>
    </>
  )
}

export default UserCard
