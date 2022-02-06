import { Layout, Menu } from 'antd';
import { BellOutlined } from "@ant-design/icons";
import { Routes, Route } from "react-router-dom";
import SearchLayout from "../components/SearchLayout/SearchLayout";
import HomePage from "../components/HomePage/HomePage";
import UserHistory from "../components/UserHistory/UserHistory";
import UserPage from "../components/userPage/UserPage";
import Chat from '../components/Chat/Chat';
import SigIn from '../components/SigIn/SigIn'
import SigUp from '../components/SigUp/SigUp'
import { Link } from 'react-router-dom';

const { Header } = Layout;


function App() {
  return (
    <>
      <>
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>

            <div style={{ margin: '0 10px 0 0' }} >
              <Link to={'/'}> Home </Link>
            </div>

            <div>
              <Link to={'/sigin'}> SigIn </Link>
            </div>

            <div style={{ margin: '0 10px' }}>
               <Link to={'/sigup'}> SigUp </Link>
            </div>

            <div style={{ margin: '0 10px' }}>
              <Link to={'/chat'}> <BellOutlined /> </Link>
            </div>

          </Menu>
        </Header>
      </>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/user/:id' element={< UserPage />} />
        <Route path='/searchPage' element={< SearchLayout />} />
        <Route path='/UserHistory' element={< UserHistory />} />
        <Route path='/chat' element={< Chat/>} />
        <Route path='/sigin' element={< SigIn />} />
        <Route path='/sigup' element={< SigUp />} />
      </Routes>

    </>

  );
}

export default App;
