import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import astro from "../../assets/astro.png";
import ClockComp from "./ClockComp";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
const Hero = ({ customVariants, setCustomVariants }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

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
    <>
      <div className="w-[100%] h-[100vh] fixed bg-[url('./assets/bgSpace.avif')] bg-cover bg-no-repeat">
        <motion.div
          initial={{ x: -200 }}
          variants={astroVariants}
          animate={["astro", "moved"]}
          className="absolute top-10 left-10"
        >
          <img
            className="md:max-w-[220px] fixed left-0 top-10 max-w-[150px] z-[-1]"
            src={astro}
            alt=""
          />
        </motion.div>
      </div>

      <div className="bg-[rgba(26,21,5,0.6)] relative  w-[100%] h-[100vh] flex-col flex items-center justify-center">
        <span
          onMouseEnter={handleMouseEntered}
          onMouseLeave={handleMouseLeaved}
          className="text-slate-100 text z-10"
        >
          HOUSE OF HACKERS
        </span>
        <ClockComp setCustomVariants={setCustomVariants} />
        <Link target={'_blank'} to={"https://hack2skill.com/hack/houseofhackers"}>
          <button className="register_btn mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="currentColor"
                d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
              ></path>
            </svg>
            <span>Register</span>
          </button>
        </Link>
        {/* <motion.div
          variants={variants}
          animate={customVariants}
          className="w-6 h-6 bg-white rounded-full fixed top-0 left-0 z-[100] pointer-events-none"
        ></motion.div> */}
      </div>
    </>
  );
};
export default Hero;
