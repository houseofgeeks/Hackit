import Design from "../components/Design";
import Navbar from "../components/Navbar";
import "../App.css";
import Stars from "../components/Stars";

import Timeline from "../components/home/Timeline";
import Hero from "../components/home/Hero";
import Prize from "../components/prizes/Prize";
import Footer from "../components/footer/Footer";
const Home = () => {
  return (
    <>
      <Hero />
      <div className="timeline  py-6">
        <h2 className="text-white font-bold text-5xl text-center w-full font-['Varela'] mb-6 title">
          TimeLine
        </h2>
        <Timeline />
        {/* <Design /> */}
        <Stars />
        <div className="py-6 px-20">
          <h2 className="text-white font-bold text-5xl text-center w-full font-['Varela'] mb-6 title">Prizes</h2>
          <Prize />
        </div>
        <div className="py-6 px-20">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
