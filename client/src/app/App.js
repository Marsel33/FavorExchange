import { Col, Layout, Menu, Statistic } from 'antd';
import { BellOutlined } from "@ant-design/icons";
import { Link, Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage/HomePage";
import UserPage from "../components/userPage/UserPage";
import SearchLayout from "../components/SearchLayout/SearchLayout";
import UserHistory from "../components/UserHistory/UserHistory";
import Chat from '../components/Chat/Chat';
import SigIn from "../components/SigIn/SigIn";
import SigUp from '../components/SigUp/SigUp';
import TestPoly from "../components/TestPoly/TestPoly";
import EditPorofile from '../components/EditProfile/EditProfile';
import { thunkGetAllBarterAction } from '../Redux/actions/thunkActions/reqBarters/thunkGetAllBarterAction';
import { useDispatch, useSelector } from 'react-redux';
import Notefication from '../components/Notefication/Notefication';

const { Header } = Layout;


function App() {

  const meProfile = useSelector(state => state.profile);

  const dispatch = useDispatch()


  function requestHandler(e) {
    e.preventDefault()
    dispatch(thunkGetAllBarterAction(Number(meProfile[0].id)))

  }

  return (
    <>
      <>
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>

            <div style={{ margin: '0 10px 0 0' }}>
              <Link to={'/'}> Home </Link>
            </div>

            <div>
              <Link to={'/signin'}> SigIn </Link>
            </div>

            <div style={{ margin: '0 10px' }}>
              <Link to={'/signup'}> SigUp </Link>
            </div>

            <div style={{ margin: '0 10px' }}>
              <Link to={'/notefication'}>
                <Statistic style={{ backgroundColor: 'red' }} value={2} prefix={<BellOutlined type="primary" onClick={requestHandler} />} />
              </Link>

            </div>

          </Menu>
        </Header>
      </>

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
        <Route path='/notefication' element={<Notefication />} />
      </Routes>

    </>

  );

}

export default App;
