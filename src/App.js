import { BrowserRouter, Route, Routes } from "react-router-dom";


import MainLayout from "./Components/MainLayout/MainLayout";
import Maxsulotlar from "./Components/Pages/Maxsulotlar/Maxsulotlar";
import Buyurtmalar from "./Components/Pages/Buyurtmalar/Buyurtmalar";
import Mijozlar from "./Components/Pages/Mijozlar/Mijozlar";
import Login from "./Components/Login";
import { useState } from "react";

// import { Settings } from "./Components/Settings";





function App() {
  const get = localStorage.getItem('token')

  const [token, setToken] = useState(get?.token || '');
  return (
    token ?
      <BrowserRouter>
        <Routes>

          <Route path="*" element={<MainLayout />}>
            <Route path="maxsulotlar" element={<Maxsulotlar />} />
            <Route path="mijozlar" element={<Mijozlar />} />
            <Route path="buyurtmalar" element={<Buyurtmalar />} />
            {/* <Route path="settings" element={<Settings />} /> */}

          </Route>
        </Routes>
      </BrowserRouter>

      : <Login setToken={setToken} />
  );
}

export default App;
