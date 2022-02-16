import {Card, Input} from 'antd';
import style from './UserCard.module.css'
import {Link} from 'react-router-dom';
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
import NewPortfoliio from "../NewPortfolio/NewPortfolio";

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
        const data = {title, service, offer, id: id, opponentId: Number(user.id)} // TODO CHANGE ID TO ACTIVE PROFILE
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
        <div style={{maxHeight: '100%'}}>


                <Card id='userCard'
                    hoverable
                    style={{
                        height: '100%',
                        display: 'flex',
                        flexDirection:'column',
                    justifyContent: 'space-evenly'}}
                    cover={<img style={{maxHeight:"80%"}} alt="Добавьте фото "
                                src={img ? img : 'https://osipbove.ru/design/image/otzyvy/no_avatar.jpg'}/>}
                    className={style['cardWrapper']

                }
                >
                    {/*title={name} description={description}*/}
                    <div>
                     {/*cover={<div style={{maxHeight:'30%'}}>*/}
                        <div style={{}}>
                            {meProfile[0].name}
                        </div>
                        {/*<div>{meProfile[0].description}</div>*/}
                        <Link to={'/UserHistory'}>
                            <button >История добрых дел</button>
                        </Link>
                        <EditPorofile key={id} description={description} name={name} id={id}/>
                        <NewPortfoliio/>
                    {/*</div>}>*/}

                    </div>


<div>
                    <StarOutlined/>
                    <StarOutlined/>
                    <StarOutlined/>
                    <StarOutlined/>
                    <StarOutlined/>
</div>
                    {Number(user?.id) !== Number(id) ? <button className={style.btn}  type="primary" onClick={showModal}>
                            бартер
                        </button>
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

        </div>
    )
}

export default UserCard
