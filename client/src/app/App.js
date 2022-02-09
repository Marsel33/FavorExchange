import {Layout, Menu} from 'antd';
import {
    AliwangwangOutlined,
    ExportOutlined,
    HomeOutlined,
    SearchOutlined,
    SelectOutlined,
    UserOutlined
} from "@ant-design/icons";
import {Link, Route, Routes, useNavigate} from "react-router-dom";
import {thunkLogoutAction} from "../Redux/actions/thunkActions/userActions/thunkLogoutAction";
import {useDispatch} from "react-redux";
import HomePage from "../components/HomePage/HomePage";
import UserPage from "../components/userPage/UserPage";
import SearchLayout from "../components/SearchLayout/SearchLayout";
import UserHistory from "../components/UserHistory/UserHistory";
import Chat from "../components/Chat/Chat";
import SigIn from "../components/SigIn/SigIn";
import SigUp from "../components/SigUp/SigUp";
import TestPoly from "../components/TestPoly/TestPoly";
import EditPorofile from "../components/EditProfile/EditProfile";
import React, {useEffect, useRef} from "react";
import {Footer} from "antd/es/layout/layout";
import { io } from 'socket.io-client'

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
    const dispatch = useDispatch()
    function plohoiLogout(e){
        e.preventDefault()
        dispatch(thunkLogoutAction())
        navigate('/')
    }
    return (
        <>
            <Header>
                    <div className="logo"/>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>

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
                <Route path='/editProfile' element={<EditPorofile />} />
                <Route path='/logout' element={<HomePage/>}/>
            </Routes>

            <Footer
                style={{ textAlign: 'center' }}>Favor_Exchange ©2022 Created by a group of united thinkers
            </Footer>
        </>
    );
}

export default App;
