import {Layout, Menu} from 'antd';
import {BellOutlined , SearchOutlined} from "@ant-design/icons";
import {Link, Route, Routes} from "react-router-dom";
import UserPage from "../components/userPage/UserPage";
import HomePage from "../components/HomePage/HomePage";
import SearchLayout from "../components/SearchLayout/SearchLayout";
import UserHistory from "../components/UserHistory/UserHistory";
import Chat from "../components/Chat/Chat";
import SigIn from "../components/SigIn/SigIn";
import SigUp from "../components/SigUp/SigUp";
import TestPoly from "../components/TestPoly/TestPoly";
import EditPorofile from "../components/EditProfile/EditProfile";
import Notefication from '../components/Notefication/Notefication';
import {thunkLogoutAction} from "../Redux/actions/thunkActions/userActions/thunkLogoutAction";
import {useDispatch, useSelector} from "react-redux";
import { thunkGetAllBarterAction } from '../Redux/actions/thunkActions/reqBarters/thunkGetAllBarterAction';




const { Header } = Layout;


function App() {



  const meProfile = useSelector(state => state.profile);

  const dispatch = useDispatch()


  function requestHandler(e) {
    e.preventDefault()
    dispatch(thunkGetAllBarterAction(Number(meProfile[0].id)))

  }

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

                        <Menu.Item key='5' style={{margin: '0 10px'}}>
                            <Link to={'/searchPage'} > <SearchOutlined /> </Link>
                        </Menu.Item>

                        <Menu.Item style={{ margin: '0 10px' }}>
              <Link to={'/notefication'}>
                <Statistic style={{ backgroundColor: 'red' }} value={2} prefix={<BellOutlined type="primary" onClick={requestHandler} />} />
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
                <Route path='/editProfile' element={<EditPorofile />} />
                <Route path='/logout' element={<HomePage/>}/>
                <Route path='/notefication' element={<Notefication />} />
            </Routes>
        </>


  );

}

export default App;
