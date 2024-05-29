import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserRouter from "./UserRouter";
const MainRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/user/*" element={<UserRouter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MainRouter;
