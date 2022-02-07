import { Layout, Menu} from 'antd';
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
import IsAuth from "../Components/IsAuth/IsAuth";
const { Header } = Layout;


function App() {
  return (
    <>
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>

            <Menu.Item key='1' style={{ margin: '0 10px 0 0' }} >
              <Link to={'/'}> Home </Link>
            </Menu.Item>

            <Menu.Item key='2'>
              <Link to={'/signin'}> SigIn </Link>
            </Menu.Item>

            <Menu.Item key='3' style={{ margin: '0 10px' }}>
               <Link to={'/signup'}> SigUp </Link>
            </Menu.Item>

            <Menu.Item key='4' style={{ margin: '0 10px' }}>
              <Link to={'/chat'}> <BellOutlined /> </Link>
            </Menu.Item>

          </Menu>
        </Header>

      <Routes>
        <Route path='/'element={<HomePage />} />
        <Route path='/user/:id' element={
          <IsAuth>
          < UserPage />
          </IsAuth>
        } />
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
