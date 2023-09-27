import User from "./User";

const About = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="info-card bg-white p-4 rounded-lg shadow-md">
        <User Roll={"Frontend Developer"} />
      </div>
    </div>
  );
};

export default About;
