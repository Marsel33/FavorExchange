import {Layout, Menu, Statistic} from 'antd';
import {
    AliwangwangOutlined,
    BellOutlined,
    ExportOutlined,
    HomeOutlined,
    SearchOutlined,
    SelectOutlined,
    UserOutlined
} from "@ant-design/icons";
import {Link, Route, Routes, useNavigate} from "react-router-dom";
import HomePage from "../сomponents/HomePage/HomePage";
import UserPage from "../сomponents/userPage/UserPage";
import SearchLayout from "../сomponents/SearchLayout/SearchLayout";
import UserHistory from "../сomponents/UserHistory/UserHistory";
import Chat from '../сomponents/Chat/Chat';
import SigIn from "../сomponents/SigIn/SigIn";
import SigUp from '../сomponents/SigUp/SigUp';
import TestPoly from "../сomponents/TestPoly/TestPoly";
import EditPorofile from '../сomponents/EditProfile/EditProfile';
import {thunkLogoutAction} from "../Redux/actions/thunkActions/userActions/thunkLogoutAction";
import {useDispatch, useSelector} from "react-redux";
import {thunkGetAllBarterAction} from '../Redux/actions/thunkActions/reqBarters/thunkGetAllBarterAction';
import {Footer} from "antd/es/layout/layout";
import Notefication from "../сomponents/Notefication/Notefication";

const {Header} = Layout;

//------------>>>>>>  Это для socket    <<<<<-------------------
// const socket = io.connect('http://localhost:3001')
//------------>>>>>>  Это для socket    <<<<<-------------------


function App() {
    //------------>>>>>>  Это для socket    <<<<<-------------------
    // socket.emit('player-connected', 'Alesha')
    // const socketRef = useRef(null)

    // useEffect(() => {
    //     // создаем экземпляр сокета, передаем ему адрес сервера
    //     // и записываем объект с названием комнаты в строку запроса "рукопожатия"
    //     // socket.handshake.query.roomId
    //     socketRef.current = io('http://localhost:8000', {
    //         query: { id:1 },
    //         transports: ['websockets']
    //     })
    //
    //     // отправляем событие добавления пользователя,
    //     // в качестве данных передаем объект с именем и id пользователя
    //     socketRef.current.emit('player-connected', { username:12, userId:1 })
    //     })
    //------------>>>>>>  Это для socket    <<<<<-------------------
    const navigate = useNavigate()
    const reqBarters = useSelector(state => state.reqBarters)
    const user = useSelector(state => state.user)
    console.log('user--------------.>', user)
    // let temp = reqBarters.pop()
    // console.log('temp ==============>',temp)
    const dispatch = useDispatch()


    function requestHandler(e) {
        e.preventDefault()
        dispatch(thunkGetAllBarterAction(Number(user)))  //todo user init state

    }


    function plohoiLogout(e) {
        e.preventDefault()
        dispatch(thunkLogoutAction())
        navigate('/')
    }

    //------------>>>>>>  Это для socket    <<<<<-------------------
    // socket.emit('player-connected', 'Alesha')
    // const socketRef = useRef(null)

    // useEffect(() => {
    //     // создаем экземпляр сокета, передаем ему адрес сервера
    //     // и записываем объект с названием комнаты в строку запроса "рукопожатия"
    //     // socket.handshake.query.roomId
    //     socketRef.current = io('http://localhost:8000', {
    //         query: { id:1 },
    //         transports: ['websockets']
    //     })
    //
    //     // отправляем событие добавления пользователя,
    //     // в качестве данных передаем объект с именем и id пользователя
    //     socketRef.current.emit('player-connected', { username:12, userId:1 })
    //     })
    //------------>>>>>>  Это для socket    <<<<<-------------------


    // useEffect(() => {

    //   dispatch(thunkGetAllBarterAction(Number(user)))
    // }, [])


    return (
        <>
            <Header>
                <div className="logo"/>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>

                    <Menu.Item key='2' style={{margin: '0 10px 0 0'}}>
                        <Link to={'/'}> <HomeOutlined/> </Link>
                    </Menu.Item>

                    <Menu.Item key='4' style={{margin: '0 10px'}}>
                        <Link to={'/signup'}> <ExportOutlined/> </Link>
                    </Menu.Item>

                    <Menu.Item key='3'>
                        <Link to={'/signin'}> <UserOutlined/> </Link>
                    </Menu.Item>

                    <Menu.Item key='5' style={{margin: '0 10px'}}>
                        <Link onClick={plohoiLogout} to={'/logout'}> <SelectOutlined/> </Link>
                    </Menu.Item>

                    <Menu.Item key='6' style={{margin: '0 10px'}}>
                        <Link to={'/searchPage'}> <SearchOutlined/> </Link>
                    </Menu.Item>

                    <Menu.Item key='7' style={{margin: '0 10px'}}>
                        <Link to={'/chat'}> <AliwangwangOutlined/> </Link>
                    </Menu.Item>

                    <Menu.Item style={{margin: '0 10px'}}>
                        <Link to={'/notefication'}>
                            <Statistic style={{backgroundColor: 'red'}} value={reqBarters.length}
                                       prefix={<BellOutlined type="primary" onClick={requestHandler}/>}/>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Header>

            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/user/:id' element={< UserPage/>}/>
                <Route path='/searchPage' element={< SearchLayout/>}/>
                <Route path='/UserHistory' element={< UserHistory/>}/>
                <Route path='/chat' element={< Chat/>}/>
                <Route path='/signin' element={< SigIn/>}/>
                <Route path='/signup' element={< SigUp/>}/>
                <Route path='/test/:id' element={< TestPoly/>}/>
                <Route path='/editProfile' element={<EditPorofile/>}/>
                <Route path='/logout' element={<HomePage/>}/>
                <Route path='/notefication' element={<Notefication/>}/>
            </Routes>

            <Footer
                style={{textAlign: 'center'}}>Favor_Exchange ©2022 Created by a group of united thinkers
            </Footer>
        </>
    );
}

export default App;
