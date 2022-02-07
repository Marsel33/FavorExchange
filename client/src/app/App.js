

import {Layout, Menu} from 'antd';
import {BellOutlined} from "@ant-design/icons";
import {Link, Route, Routes} from "react-router-dom";
import HomePage from '../components/HomePage/HomePage';
import SearchLayout from '../components/SearchLayout/SearchLayout';
import TestPoly from '../components/TestPoly/TestPoly';
import EditPorofile from '../components/EditProfile/EditProfile';
import SigUp from '../components/SigUp/SigUp';
import SigIn from '../components/SigIn/SigIn';
import Chat from '../components/Chat/Chat';
import UserHistory from '../components/UserHistory/UserHistory';
import UserPage from '../components/userPage/UserPage';
// import HomePage from "../Components/HomePage/HomePage";
// import UserPage from "../Components/userPage/UserPage";
// import SearchLayout from "../Components/SearchLayout/SearchLayout";
// import UserHistory from "../Components/UserHistory/UserHistory";
// import Chat from "../Components/Chat/Chat";
// import SigIn from "../Components/SigIn/SigIn";
// import SigUp from "../Components/SigUp/SigUp";
// import TestPoly from "../Components/TestPoly/TestPoly";
// import EditPorofile from '../components/EditProfile/EditProfile';

const {Header} = Layout;


function App() {


    return (
        <>
            <>
                <Header>
                    <div className="logo"/>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>

                        <div style={{margin: '0 10px 0 0'}}>
                            <Link to={'/'}> Home </Link>
                        </div>

                        <div>
                            <Link to={'/sigin'}> SigIn </Link>
                        </div>

                        <div style={{margin: '0 10px'}}>
                            <Link to={'/sigup'}> SigUp </Link>
                        </div>

                        <div style={{margin: '0 10px'}}>
                            <Link to={'/chat'}> <BellOutlined/> </Link>
                        </div>

                    </Menu>
                </Header>
            </>

            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/user/:id' element={< UserPage/>}/>
                <Route path='/searchPage' element={< SearchLayout/>}/>
                <Route path='/UserHistory' element={< UserHistory/>}/>
                <Route path='/chat' element={< Chat/>}/>
                <Route path='/sigin' element={< SigIn/>}/>
                <Route path='/sigup' element={< SigUp/>}/>
                <Route path='/test/:id' element={< TestPoly/>}/>
                <Route path='/editProfile' element={<EditPorofile />} />  

            </Routes>

        </>

    );


}

export default App;
