import styles from '../userPage/styles.module.css'
import { Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

const { Meta } = Card;


const UserCard = ({ img, id, userId, description, name }) => {
  const size = 'large'

  return (
    <>
      <div className={styles.s} >
        <Col sm={1}>
          <Row sm={12}>


            <div>
              <p className={styles.skill}>стригу</p>
              <p className={styles.skill}>чиню</p>
              <p className={styles.skill}>учу</p>
              <p className={styles.skill}>учу</p>
              <p className={styles.skill}>учу</p>
              <p className={styles.skill}>учу</p>

            </div>

          </Row>
        </Col>


        <Card
          hoverable
          style={{ width: 400, fontSize: 24, height: 500}}
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
