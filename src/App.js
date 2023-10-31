import React from "react";
import Navbar from "./components/navbar/navbar";

import FooterPage from "./components/footer/footer";
import { Homepage } from "./pages/Homepage/homepage";
import About from "./pages/About/About";
import { Route, Routes } from "react-router-dom";

function userRouter() {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path="/about" Component={About}></Route>
        <Route path="/" Component={Homepage}></Route>
      </Routes>
      <FooterPage></FooterPage>
    </div>
  );
}

export default userRouter;
