import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserRouter from "./UserRouter";
import MainHome from "../Pages/common/MainHome";
import MainBusinesHome from "../Pages/common/MainBusinesHome";
const MainRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainHome/>} />
          <Route path="/Busineshome" element={<MainBusinesHome/>} />
          <Route path="/user/*" element={<UserRouter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MainRouter;
