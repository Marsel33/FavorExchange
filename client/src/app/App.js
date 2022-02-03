
import { Routes, Route } from "react-router-dom";
import UserHistori from "../componets/UserHistore/UserHistore";
import UserPage from "../componets/userPage/UserPage";
import HomePage from "../components/HomePage/HomePage";

function App() {
  return (
   <>
    <Routes>
        <Route path='/' element={ <HomePage/>} />
        <Route path="/user" element={< UserPage />} />
        <Route path='/userHistori' element={< UserHistori />} />
      </Routes>
   </>

  );
}

export default App;
