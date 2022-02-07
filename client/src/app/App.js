import { Layout, Menu } from 'antd';
import { BellOutlined } from "@ant-design/icons";
import { Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import SearchLayout from "../Components/SearchLayout/SearchLayout";
import HomePage from "../Components/HomePage/HomePage";
import UserHistory from "../Components/UserHistory/UserHistory";
import UserPage from "../Components/userPage/UserPage";
import Chat from "../Components/Chat/Chat";
import SigIn from "../Components/SigIn/SigIn";
import SigUp from "../Components/SigUp/SigUp";

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
              <Link to={'/signin'}> SigIn </Link>
            </div>

            <div style={{ margin: '0 10px' }}>
               <Link to={'/signup'}> SigUp </Link>
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
        <Route path='/signin' element={< SigIn />} />
        <Route path='/signup' element={< SigUp />} />
      </Routes>
    </>

  );
}

export default App;
