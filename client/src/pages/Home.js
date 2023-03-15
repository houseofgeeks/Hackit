import Design from "../components/Design";
import Navbar from "../components/Navbar";
import "../App.css";
import Stars from "../components/Stars";

import Timeline from "../components/home/Timeline";
import Hero from "../components/home/Hero";
import Prize from "../components/prizes/Prize";
const Home = () => {
  return (
    <>
      <Hero />
      <div className="timeline  py-6">
        <h2 className="text-white font-bold text-4xl text-center w-full mb-6">
          TimeLine
        </h2>
        <Timeline />
        {/* <Design /> */}
        <Stars />
        <div className="py-6 px-20">
          <Prize />
        </div>
      </div>
    </>
  );
};

export default Home;
