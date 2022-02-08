import styles from '../userPage/styles.module.css'
import { Card, Button, Input, Form } from 'antd';
import { Link, useParams } from 'react-router-dom';
import UserCat from '../UserCat/UserCat';
import EditPorofile from '../EditProfile/EditProfile';
import { StarOutlined } from '@ant-design/icons';
import style from './UserCard.css'
import Modal from 'antd/lib/modal/Modal';
import { useEffect, useState } from 'react';
import { thunkGetAllBarterAction } from '../../Redux/actions/thunkActions/reqBarters/thunkGetAllBarterAction';
import { useDispatch, useSelector } from 'react-redux';
import { thunkSetNewBarterAction } from '../../Redux/actions/thunkActions/reqBarters/thunkSetNewBarterAction';
import { thunkGetAllActiveBartersAction } from '../../Redux/actions/thunkActions/activeBarters/thunkGetAllActiveBartersAction';
import { thunkGetAllEndedBarterAction } from '../../Redux/actions/thunkActions/endedBarters/thunkGetAllEndedBarterAction';
import { thunkGetAllDecliendBartersAction } from '../../Redux/actions/thunkActions/declinedBarters/thunkGetAllDecliendBartersAction';

const { Meta } = Card;

const UserCard = ({ img, id, userId, description, name }) => {
  const size = 'large'


  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [service, setService] = useState('')
  const [offer, setOffer] = useState('')
  const meProfile = useSelector(state => state.profile);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };



  useEffect(() => {
    console.log('hueta')
    if (meProfile[0]) {
      dispatch(thunkGetAllActiveBartersAction(meProfile[0].id))
      dispatch(thunkGetAllDecliendBartersAction(meProfile[0].id))
      dispatch(thunkGetAllEndedBarterAction(meProfile[0].id))
    }
  }, [meProfile[0]])

 


  function barterHandler(e) {
    e.preventDefault()
    const data = { title, service, offer, id: 1, opponentId: Number(id) } // TODO CHANGE ID TO ACTIVE PROFILE
    dispatch(thunkSetNewBarterAction(data))
  }

  function titleHandler(e) {
    e.preventDefault()
    setTitle(e.target.value)
  }

  function serviceHandler(e) {
    e.preventDefault()
    setService(e.target.value)
  }

  function offerHandler(e) {
    e.preventDefault()
    setOffer(e.target.value)
  }

  return (
    <>
      {console.log(img)}

      <div className={"mywrapper"} >
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

          <EditPorofile key={id} description={description} name={name} id={id} />
          <StarOutlined />
          <StarOutlined />
          <StarOutlined />
          <StarOutlined />
          <StarOutlined />

          <Button type="primary" onClick={showModal}>
            сотрудничать
          </Button>
          <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>


            <form
              onSubmit={barterHandler}
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '20%'
              }}>
              <label htmlFor="title">title</label>
              <input type="text" name="title" onChange={titleHandler} />
              <label htmlFor="service">service</label>
              <input type="text" name="service" onChange={serviceHandler} />
              <label htmlFor="offer">offer</label>
              <input type="text" name="offer" onChange={offerHandler} />
              <input type="submit" />
            </form>
          </Modal>
        </Card>
      </div>
    </>
  )
}

export default UserCard
