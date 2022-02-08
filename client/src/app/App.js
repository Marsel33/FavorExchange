import {Layout, Menu} from 'antd';
import {BellOutlined} from "@ant-design/icons";
import {Link, Route, Routes} from "react-router-dom";
import UserPage from "../Components/userPage/UserPage";
import HomePage from "../Components/HomePage/HomePage";
import SearchLayout from "../Components/SearchLayout/SearchLayout";
import UserHistory from "../Components/UserHistory/UserHistory";
import Chat from "../Components/Chat/Chat";
import SigIn from "../Components/SigIn/SigIn";
import SigUp from "../Components/SigUp/SigUp";
import TestPoly from "../Components/TestPoly/TestPoly";
import EditPorofile from "../Components/EditProfile/EditProfile";
import {thunkLogoutAction} from "../Redux/actions/thunkActions/userActions/thunkLogoutAction";
import {useDispatch} from "react-redux";

const {Header} = Layout;


function App() {
    const dispatch = useDispatch()
    function plohoiLogout(e){
        e.preventDefault()
        dispatch(thunkLogoutAction())
    }
    return (
        <>
            <Header>
                    <div className="logo"/>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>

                        <Menu.Item key='2' style={{margin: '0 10px 0 0'}}>
                            <Link to={'/'}> Home </Link>
                        </Menu.Item>

                        <Menu.Item key='3'>
                            <Link to={'/signin'}> SigIn </Link>
                        </Menu.Item>

                        <Menu.Item key='4' style={{margin: '0 10px'}}>
                            <Link to={'/signup'}> SigUp </Link>
                        </Menu.Item>

                        <Menu.Item key='5' style={{margin: '0 10px'}}>
                            <Link onClick={plohoiLogout} to={'/logout'} > Logout </Link>
                        </Menu.Item>

                        <Menu.Item  key='6' style={{margin: '0 10px'}}>
                            <Link to={'/chat'}> <BellOutlined/> </Link>
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
        </>

    );

}

export default App;
