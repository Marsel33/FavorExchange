import {Button, Card, Col, Input} from 'antd';
import {Link} from 'react-router-dom';
import UserCat from '../UserCat/UserCat';

import EditPorofile from '../EditProfile/EditProfile';
import {StarOutlined} from '@ant-design/icons';
import Modal from 'antd/lib/modal/Modal';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {thunkSetNewBarterAction} from '../../Redux/actions/thunkActions/reqBarters/thunkSetNewBarterAction';
import {
    thunkGetAllActiveBartersAction
} from '../../Redux/actions/thunkActions/activeBarters/thunkGetAllActiveBartersAction';
import {thunkGetAllEndedBarterAction} from '../../Redux/actions/thunkActions/endedBarters/thunkGetAllEndedBarterAction';
import {
    thunkGetAllDecliendBartersAction
} from '../../Redux/actions/thunkActions/declinedBarters/thunkGetAllDecliendBartersAction';
import {thunkGetAllBarterAction} from '../../Redux/actions/thunkActions/reqBarters/thunkGetAllBarterAction';

const {Meta} = Card;

const UserCard = ({img, id, userId, description, name}) => {
    const size = 'large'


    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [service, setService] = useState('')
    const [offer, setOffer] = useState('')
    const meProfile = useSelector(state => state.profile);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const user = useSelector(state => state.user)


    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        dispatch(thunkGetAllBarterAction(user.id))
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    useEffect(() => {
        if (meProfile[0]) {
            dispatch(thunkGetAllActiveBartersAction(meProfile[0].id))
            dispatch(thunkGetAllDecliendBartersAction(meProfile[0].id))
            dispatch(thunkGetAllEndedBarterAction(meProfile[0].id))
        }
    }, [meProfile[0]])


    function barterHandler(e) {
        e.preventDefault()
        const data = {title, service, offer, id: id, opponentId: Number(user)} // TODO CHANGE ID TO ACTIVE PROFILE
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
            <Col sm={12}>
                < UserCat/>
            </Col>

            <Col sm={12}>
                <Card
                    hoverable
                    style={{width: 400, fontSize: 24, height: 500}}
                    cover={<img className={'avatar'} alt="Добавьте фото "
                                src={img ? img : 'https://windows10free.ru/uploads/posts/2017-02/1487679899_icon-user-640x640.png'}/>}
                    className='userCard'
                >
                    <Meta title={name} description={description}/>

                    <Link to={'/UserHistory'}>
                        <Button danger size={size}>История добрых дел</Button>
                    </Link>

                    <EditPorofile key={id} description={description} name={name} id={id}/>
                    <StarOutlined/>
                    <StarOutlined/>
                    <StarOutlined/>
                    <StarOutlined/>
                    <StarOutlined/>
                    {!user ? <Button type="primary" onClick={showModal}>
                            Преложить бартер
                        </Button>
                        : ''}

                    <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>

                        <form
                            onSubmit={barterHandler}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: '70%'
                            }}>
                            <label htmlFor="title">Тема</label>
                            <Input type="text" name="title" onChange={titleHandler}/>
                            <label htmlFor="service">Услуга</label>
                            <Input type="text" name="service" onChange={serviceHandler}/>
                            <label htmlFor="offer">Предложение</label>
                            <Input type="text" name="offer" onChange={offerHandler}/>
                            <Input type='submit'/>
                        </form>

                    </Modal>
                </Card>
            </Col>
        </>
    )
}

export default UserCard
