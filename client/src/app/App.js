import { Routes, Route } from "react-router-dom";
import SearchLayout from "../Components/SearchLayout/SearchLayout";
import UserHistori from "../componets/UserHistore/UserHistore";
import UserPage from "../componets/userPage/UserPage";

function App() {
  return (
   <>
    <Routes>
        <Route path="/user" element={< UserPage />} />
        <Route path='/userHistori' element={< UserHistori />} />
        <Route path='/searchPage' element={< SearchLayout />} />
      </Routes>
   </>
  );
}

export default App;
