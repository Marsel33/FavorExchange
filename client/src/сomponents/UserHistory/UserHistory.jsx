import { Card, Input } from "antd";
import Modal from "antd/lib/modal/Modal";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetAllEndedBarterAction } from "../../Redux/actions/thunkActions/endedBarters/thunkGetAllEndedBarterAction";
import { thunkCreateFeedbackAC } from "../../Redux/actions/thunkActions/thunkCreateFeedbackAC";
import CardTasck from "../CardTasck/CardTasck";
import styles from '../userPage/styles.module.css'

const UserHistory = () => {

  const dispatch = useDispatch()
  const endedBarters = useSelector(state => state.endedBarters)
  const user = useSelector(state => state.user)
  const [isModalVisible, setIsModalVisible] = useState(false);


  useEffect(() => {
    dispatch(thunkGetAllEndedBarterAction(user)) ///user не забудь поменять)

  }, [endedBarters.length])


  const [comment, setComment] = useState('')
  const [star, setStar] = useState('')

  function commentHandler(e) {
    e.preventDefault()
    setComment(e.target.value)
  }

  function starsHandler(e) {
    e.preventDefault()
    setStar(e.target.value)
  }


  function reitingHandler(e) {
    e.preventDefault()
    const data = { comment, star } //
    // console.log('pisem sanky', {comment, star})
    dispatch(thunkCreateFeedbackAC(data))
  }

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>


      <div style={{ width: '30%' }}>
        ENDED BARTERS
        <div>
          {endedBarters && endedBarters.map(e => {
            console.log(e)
            if (e.status == 'ended') {
              return (<div>

                <Card title={e.offer} extra={<button id={e.barterId} onClick={showModal}>feedback</button>} style={{ width: 300 }}>
                  <p>комент с формы </p>

                </Card>

                <Modal className="ant-modal-content" title="feedback" visible={isModalVisible} onOk={reitingHandler} onCancel={handleCancel}>
                  <Input className="ant-input" type='text' name="comment" placeholder="comment" onChange={commentHandler} />
                  <Input className="ant-input" type='text' name="star" placeholder="оцените по 5 бальной шкале ваше сотрудничество" onChange={starsHandler} />
                </Modal>
              </div>)
            }
            < CardTasck key={e.id} title={e.title} />
          })}
        </div>
      </div >
    </>
  )
}

export default UserHistory;
