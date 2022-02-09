import { Layout, Menu, Statistic } from 'antd';
import { BellOutlined } from "@ant-design/icons";
import { Link, Route, Routes } from "react-router-dom";
import HomePage from "../сomponents/HomePage/HomePage";
import UserPage from "../сomponents/userPage/UserPage";
import SearchLayout from "../сomponents/SearchLayout/SearchLayout";
import UserHistory from "../сomponents/UserHistory/UserHistory";
import Chat from '../сomponents/Chat/Chat';
import SigIn from "../сomponents/SigIn/SigIn";
import SigUp from '../сomponents/SigUp/SigUp';
import TestPoly from "../сomponents/TestPoly/TestPoly";
import EditPorofile from '../сomponents/EditProfile/EditProfile';
import { thunkLogoutAction } from "../Redux/actions/thunkActions/userActions/thunkLogoutAction";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetAllBarterAction } from '../Redux/actions/thunkActions/reqBarters/thunkGetAllBarterAction';
import Notefication from '../сomponents/Notefication/Notefication';
import { useEffect } from 'react';


const { Header } = Layout;


function App() {


  const meProfile = useSelector(state => state.profile);
  const reqBarters = useSelector(state => state.reqBarters)
  const user = useSelector(state => state.user)
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
  }

  // useEffect(() => {

  //   dispatch(thunkGetAllBarterAction(Number(user)))
  // }, [])


  
  
  return (
    <>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>

          <Menu.Item key='2' style={{ margin: '0 10px 0 0' }}>
            <Link to={'/'}> Home </Link>
          </Menu.Item>

          <Menu.Item key='3'>
            <Link to={'/signin'}> SigIn </Link>
          </Menu.Item>

          <Menu.Item key='4' style={{ margin: '0 10px' }}>
            <Link to={'/signup'}> SigUp </Link>
          </Menu.Item>

          <Menu.Item key='5' style={{ margin: '0 10px' }}>
            <Link onClick={plohoiLogout} to={'/logout'} > Logout </Link>
          </Menu.Item>


          <Link to={'/notefication'}>
            <Statistic style={{ backgroundColor: 'red' }} value={reqBarters.length}
              prefix={<BellOutlined type="primary" onClick={requestHandler} />} />
          </Link>
        </Menu>
      </Header>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/user/:id' element={< UserPage />} />
        <Route path='/searchPage' element={< SearchLayout />} />
        <Route path='/UserHistory' element={< UserHistory />} />
        <Route path='/chat' element={< Chat />} />
        <Route path='/signin' element={< SigIn />} />
        <Route path='/signup' element={< SigUp />} />
        <Route path='/test/:id' element={< TestPoly />} />
        <Route path='/editProfile' element={<EditPorofile />} />
        <Route path='/logout' element={<HomePage />} />
        <Route path='/notefication' element={< Notefication />} />
      </Routes>

    </>


  );

}

export default App;
