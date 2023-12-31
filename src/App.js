import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Header from "./component/Header";
import Body from "./component/Body";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import About from "./component/About";
import Error from "./component/Error";
import Contact from "./component/Contact";
import Cart from "./component/Cart";
import RestroMenu from "./component/RestroMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const AppLayout = () => {

const [userInfo,setUserInfo]= useState();

//authentication

useEffect(()=>{
// make an API call send Username and Password

const data = {
  name: "AKASH"
};
setUserInfo(data.name)
},[]);


  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:userInfo,setUserInfo}}>
    <div>
      <Header />
      <Outlet /> {/* This is where child route components will be rendered */}
      
    </div>
    </UserContext.Provider>
    </Provider>
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
