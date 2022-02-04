import { Layout, Menu } from 'antd';
import { BellOutlined } from "@ant-design/icons";
import { Routes, Route } from "react-router-dom";
import SearchLayout from "../components/SearchLayout/SearchLayout";
// import HomePage from "../components/HomePage/Chat/HomePage/HomePage";
import UserHistory from "../components/UserHistory/UserHistory";
// import UserPage from "../components/userPage/UserPage";
// import Chat from '../components/HomePage/Chat/Chat';
import HomePage from '../components/HomePage/HomePage';
import UserPage from '../components/userPage/UserPage';
import Chat from '../components/Chat/Chat';

const { Header } = Layout;


function App() {
  return (
    <>
      <>
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <div>
              SigIn
            </div>
            <div style={{ margin: '0 10px' }}>
              SigUp
            </div>
            <div>
              <BellOutlined />
            </div>
          </Menu>
        </Header>
      </>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/user" element={< UserPage />} />
        <Route path='/searchPage' element={< SearchLayout />} />
        <Route path='/UserHistory' element={< UserHistory />} />
        <Route path='/chat' element={< Chat/>} />

      </Routes>

    </>

  );
}

export default App;
