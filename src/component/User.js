import { useState } from "react";
import { useState } from "react";

const User = ({ Roll }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="info-card">
      <h2>Name:Akash</h2>
      <h3>Gmail:akashlande97@gmail.com</h3>
      <h4>Location:Aurangabad</h4>
      <h5>{Roll}</h5>
      <p>{count}</p>
    </div>
  );
};

export default User;
