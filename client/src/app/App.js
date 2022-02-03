import { Routes, Route } from "react-router-dom";
import UserHistory from "../componets/UserHistory/UserHistory";
import UserPage from "../componets/userPage/UserPage";

function App() {
  return (
   <>
    <Routes>
        <Route path="/user" element={< UserPage />} />
        <Route path='/UserHistory' element={< UserHistory />} />
      </Routes>
   </>
  );
}

export default App;
