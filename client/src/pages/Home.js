import { useState } from "react";
import "../App.css";
import About from "../components/about/About";
import Footer from "../components/footer.js/Footer";
import ClockComp from "../components/home/ClockComp";
import Hero from "../components/home/Hero";
import Timeline from "../components/home/Timeline";
import Prize from "../components/prizes/Prize";
import Sponsor from "../components/sponsor/Sponsor";
const Home = () => {
  const [customVariants, setCustomVariants] = useState("default");

  return (
    <>
      <Hero
        customVariants={customVariants}
        setCustomVariants={setCustomVariants}
      />
      <About />
      <Timeline
        customVariants={customVariants}
        setCustomVariants={setCustomVariants}
      />
      <Sponsor />
      <Prize />
      <Footer />
    </>
  );
};

export default Home;
