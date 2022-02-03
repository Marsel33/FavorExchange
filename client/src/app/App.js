import { Routes, Route } from "react-router-dom";
import UserHistori from "../componets/UserHistore/UserHistore";
import UserPage from "../componets/userPage/UserPage";

function App() {
  return (
   <>
    <Routes>
        <Route path="/user" element={< UserPage />} />
        <Route path='/userHistori' element={< UserHistori />} />
      </Routes>
   </>
  );
}

export default App;
