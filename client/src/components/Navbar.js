import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { useSelector } from "react-redux";
import MenuComp from "./MenuComp";
import hackers from "../assets/Hackers.svg";
import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { hackUser } = userLogin;
  const [navbar, setNavbar] = useState("transparent");
  const [menuOpen, setMenuOpen] = useState(false);
  const handleScroll = () => {
    if (window.scrollY >= 64) {
      setNavbar("black");
    } else {
      setNavbar("transparent");
    }
  };

  window.addEventListener("scroll", handleScroll);
  return (
    <div
      className={`bg-${navbar} bg-opacity-50 backdrop-blur-sm transition-all py-4 md:px-20 sm:px-8 px-4 w-full fixed top-0 z-20 timeline`}
    >
      <div className="flex justify-between items-center">
        <Link to={"/"}>
          <img className="max-w-[120px]" src={hackers} alt="" />
        </Link>

        <BiMenuAltRight
          className="md:hidden block font-bold text-5xl cursor-pointer text-white"
          onClick={() => setMenuOpen(true)}
        />

        <motion.ul
          className={`md:flex md:flex-row md:relative md:translate-x-0 translate-x-[400px]  ${
            menuOpen &&
            "bg-[rgba(0,0,0,0.8)] w-[100vw] h-[100vh] flex items-center justify-center translate-x-0"
          } transition-all flex-col absolute top-[0] right-0 items-center font-[Urbanist]`}
        >
          <AiOutlineClose
            className="md:hidden block font-bold text-5xl cursor-pointer absolute top-10 right-8 text-white"
            onClick={() => setMenuOpen(false)}
          />
          <li className={`${menuOpen && "my-3"}`}>
            <a
              href=""
              className={`text-white ${
                menuOpen ? "text-3xl" : "text-xl "
              } mx-6 hover:text-[#ee2a7b] transition-all`}
            >
              About
            </a>
          </li>
          <li className={`${menuOpen && "my-3"}`}>
            <a
              href=""
              className={`text-white ${
                menuOpen ? "text-3xl" : "text-xl "
              } mx-6 hover:text-[#ee2a7b] transition-all`}
            >
              Schedule
            </a>
          </li>
          <li className={`${menuOpen && "my-3"}`}>
            <a
              href=""
              className={`text-white ${
                menuOpen ? "text-3xl" : "text-xl "
              } mx-6 hover:text-[#ee2a7b] transition-all`}
            >
              FAQ's
            </a>
          </li>
          <li className={`${menuOpen && "my-3"}`}>
            <a
              href=""
              className={`text-white ${
                menuOpen ? "text-3xl" : "text-xl "
              } mx-6 hover:text-[#ee2a7b] transition-all`}
            >
              Contact us
            </a>
          </li>
        </motion.ul>
      </div>
    </div>
  );
};
export default Navbar;
