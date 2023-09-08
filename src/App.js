import React from "react";
import ReactDOM from "react-dom";
import Header from "./component/Header";
import Body from "./component/Body";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import About from "./component/About";
import Error from "./component/Error";
import Contact from "./component/Contact";
import Cart from "./component/Cart";
import RestroMenu from "./component/RestroMenu";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet /> {/* This is where child route components will be rendered */}
    </div>
  );
};

const AppConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Body />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="/restaurant/:resId" element={<RestroMenu />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(<AppConfig />, document.getElementById("root"));
