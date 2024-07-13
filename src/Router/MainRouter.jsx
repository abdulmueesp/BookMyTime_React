import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserRouter from "./UserRouter";
import MainHome from "../Pages/common/MainHome";
import MainBusinesHome from "../Pages/common/MainBusinesHome";
import AdminRouter from "./AdminRouter";
import OwnerRouter from "./OwnerRouter";
import OwnerSignup from "../Pages/Owner/OwnerSignup";
const MainRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainHome/>} />
          <Route path="/Busineshome" element={<MainBusinesHome/>} />
          <Route path="/ownersignup" element={<OwnerSignup/>} />
          <Route path="/user/*" element={<UserRouter />} />
          <Route path="/admin/*" element={<AdminRouter/>} />
          <Route path="/owner/*" element={<OwnerRouter/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MainRouter;
