import { useState } from "react";

const User = ({ Roll }) => {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-blue-100 p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-2">Name: Akash</h2>
      <h3 className="text-lg text-gray-600">Gmail: akashlande97@gmail.com</h3>
      <h4 className="text-base text-gray-700">Location: Aurangabad</h4>
      <h5 className="text-base text-blue-500">{Roll}</h5>

      {/* OpenStreetMap Container */}
      <div className="mt-4 rounded-lg overflow-hidden">
        <iframe
          title="OpenStreetMap Location"
          width="100%"
          height="300"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src={`https://www.openstreetmap.org/export/embed.html?bbox=75.348%2C19.852%2C75.373%2C19.871&layer=mapnik`}
        ></iframe>
      </div>
    </div>
  );
};

export default User;
