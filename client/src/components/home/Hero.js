import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import astro from "../../assets/astro.png";
import ClockComp from "./ClockComp";
const Hero = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [customVariants, setCustomVariants] = useState("default");
  useEffect(() => {
    const onMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", onMouseMove);

    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: {
        type: "tween",
      },
    },
    text: {
      width: 100,
      height: 100,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "green",
      mixBlendMode: "difference",
    },
  };

  const astroVariants = {
    astro: {
      y: [40, 0, 40, 0, 40, 0, 40, 0, 40],
      transition: {
        duration: 10,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
    moved: {
      x: -50,
      transition: {
        duration: 5,
        ease: "easeInOut",
      },
    },
  };
  const handleMouseEntered = () => setCustomVariants("text");
  const handleMouseLeaved = () => setCustomVariants("default");
  return (
    <div className="w-[100%] h-[100vh] bg-[url('./assets/bgSpace.avif')] bg-cover bg-no-repeat relative">
      <div className="bg-[rgba(0,0,0,0.5)]  w-full h-full flex-col flex items-center justify-center">
        <span
          onMouseEnter={handleMouseEntered}
          onMouseLeave={handleMouseLeaved}
          className="text-slate-100 text z-10"
        >
          HOUSE OF HACKERS
        </span>
        <ClockComp setCustomVariants={setCustomVariants} />
        <motion.div
          variants={variants}
          animate={customVariants}
          className="w-6 h-6 bg-white rounded-full fixed top-0 left-0 z-[100] pointer-events-none"
        ></motion.div>
      </div>
      <motion.div
        initial={{ x: -200 }}
        variants={astroVariants}
        animate={["astro", "moved"]}
        className="absolute top-10 left-10"
      >
        <img className="md:max-w-[220px] max-w-[150px] z-[-1]" src={astro} alt="" />
      </motion.div>
    </div>
  );
};
export default Hero;
