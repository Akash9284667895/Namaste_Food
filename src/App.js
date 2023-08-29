import React from "react";
import ReactDOM from "react-dom";
import Header from "./component/Header";
import Body from "./component/Body";
import About from "./component/About";
import Error from "./component/Error";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./component/Contact";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const AppConfiq = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}/>
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error />} />
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <AppConfiq />
  </BrowserRouter>,
  document.getElementById("root")
);
