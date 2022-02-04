import { Routes, Route } from "react-router-dom";
import HomePage from "../components/HomePage/HomePage";
import UserPage from "../components/userPage/UserPage"
import UserHistori from "../components/UserHistore/UserHistore"
import Chat from "../components/Chat/Chat"

function App() {
  return (
   <>
    <Routes>
        <Route path='/' element={ <HomePage/>} />
        <Route path="/user" element={< UserPage />} />
        <Route path='/userHistori' element={< UserHistori />} />
        <Route path='/chat' element={< Chat/>} />
      </Routes>
   </>
  );
}

export default App;
