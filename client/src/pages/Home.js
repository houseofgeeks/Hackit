import { useState } from "react";
import "../App.css";
import ClockComp from "../components/home/ClockComp";
import Hero from "../components/home/Hero";
import Timeline from "../components/home/Timeline";
const Home = () => {

  const [customVariants, setCustomVariants] = useState("default");

  return (
    <>
      <Hero customVariants={customVariants} setCustomVariants={setCustomVariants}/>
      <Timeline customVariants={customVariants} setCustomVariants={setCustomVariants}/>
    </>
  );
};

export default Home;
