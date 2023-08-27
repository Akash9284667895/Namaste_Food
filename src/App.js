import React from "react";
import ReactDOM from "react-dom";
import Header from './component/Header'
import Body from "./component/Body";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

ReactDOM.render(<AppLayout />, document.getElementById("root"));
