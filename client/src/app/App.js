import {Layout, Menu, Statistic} from 'antd';
import "./App.less"
import {
    AliwangwangOutlined,
    BellOutlined,
    ExportOutlined, HomeOutlined,
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
import Notefication from '../сomponents/Notefication/Notefication';
import {Footer} from "antd/es/layout/layout";
import './App.css'

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
    const meProfile = useSelector(state => state.profile);
    const dispatch = useDispatch()


    function requestHandler(e) {
        e.preventDefault()
        dispatch(thunkGetAllBarterAction(Number(meProfile[0].id)))

    }

    function plohoiLogout(e){
        e.preventDefault()
        dispatch(thunkLogoutAction())
        navigate('/')
    }

    return (
        <>
            <Header className='header-color'>
                <Menu  theme="dark" mode="horizontal">

                        <Menu.Item key='2' style={{margin: '0 10px 0 0'}}>
                            <Link to={'/'}> <HomeOutlined /> </Link>
                        </Menu.Item>

                        <Menu.Item key='4' style={{margin: '0 10px'}}>
                            <Link to={'/signup'}> <ExportOutlined /> </Link>
                        </Menu.Item>

                        <Menu.Item key='3'>
                            <Link to={'/signin'}> <UserOutlined /> </Link>
                        </Menu.Item>

                        <Menu.Item key='5' style={{margin: '0 10px'}}>
                            <Link onClick={plohoiLogout} to={'/logout'} > <SelectOutlined /> </Link>
                        </Menu.Item>

                        <Menu.Item key='6' style={{margin: '0 10px'}}>
                            <Link  to={'/searchPage'} > <SearchOutlined /> </Link>
                        </Menu.Item>

                        <Menu.Item  key='7' style={{margin: '0 10px'}}>
                            <Link to={'/chat'}> <AliwangwangOutlined /> </Link>
                        </Menu.Item>

                        <Menu.Item style={{ margin: '0 10px' }}>
                            <Link to={'/notefication'}>
                               <Statistic style={{ backgroundColor: 'red' }} value={2} prefix={<BellOutlined type="primary" onClick={requestHandler} />} />
                            </Link>
                        </Menu.Item>

                    <Footer className='footer'
                            style={{ textAlign: 'center'}}>Favor_Exchange ©2022 Created by a group of united thinkers
                    </Footer>

                    </Menu>
            </Header>

            {/*<Navbar collapseOnSelect expand='md' bg='success' variant='success'>*/}

            {/*    <Container className='headerColor'>*/}
            {/*        <Link to='/'>*/}
            {/*            <img*/}
            {/*                src={logo}*/}
            {/*                height='60'*/}
            {/*                width='80'*/}
            {/*                className='d-inline-block align-top rounded-circle'*/}
            {/*                alt='Logo'*/}
            {/*            />*/}
            {/*        </Link>*/}
            {/*        <Navbar.Toggle aria-controls='responsive-navbar-nav'/>*/}
            {/*        <Navbar.Collapse id='responsive-navbar-nav'>*/}
            {/*            <div className= 'm-3'>*/}
            {/*                <Link to='/'>Home</Link>*/}
            {/*            </div>*/}
            {/*            <div className= 'm-3'>*/}
            {/*                <Link to='/cat'>Cat</Link>*/}
            {/*            </div>*/}
            {/*            <div className= 'm-3'>*/}
            {/*                <Link to='/dog'>Dog</Link>*/}
            {/*            </div>*/}
            {/*            <div className= 'm-3'>*/}
            {/*                <Link to='/favorite'>Favorite</Link>*/}
            {/*            </div>*/}
            {/*        </Navbar.Collapse>*/}
            {/*    </Container>*/}
            {/*</Navbar>*/}























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


        </>
    );
}

export default App;
