import { BiMenuAltRight } from "react-icons/bi";
import { useSelector } from "react-redux";
import MenuComp from "./MenuComp";
import hackers from "../assets/Hackers.svg";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { HashLink as Link } from "react-router-hash-link";
import { useLocation, useParams } from "react-router-dom";

const Navbar = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { hackUser } = userLogin;
  const [navbar, setNavbar] = useState("transparent");
  const [menuOpen, setMenuOpen] = useState(false);
  const { hash } = useLocation();
  const handleScroll = () => {
    if (window.scrollY >= 64) {
      setNavbar("black");
    } else {
      setNavbar("transparent");
      hash = "/";
    }
  };

  useEffect(() => {
    console.log(hash);
  }, [hash]);

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

        <ul
          className={`md:flex md:flex-row md:relative md:translate-x-0 ${
            menuOpen &&
            "bg-[rgba(0,0,0,0.8)] w-[100vw] h-[100vh] right-0 left-0 flex items-center justify-center translate-x-0"
          } transition-all flex-col absolute top-[0] md:right-0 right-[-200px] items-center font-[Urbanist]`}
        >
          <AiOutlineClose
            className="md:hidden block font-bold text-5xl cursor-pointer absolute top-10 right-8 text-white"
            onClick={() => setMenuOpen(false)}
          />
          <li className={`${menuOpen && "my-3"}`}>
            <Link
              onClick={() => setMenuOpen(false)}
              smooth
              to="#about"
              className={`${
                hash === "#about" ? "text-[#ee2a7b]" : "text-white"
              } ${
                menuOpen ? "text-3xl" : "text-xl "
              } mx-6 hover:text-[#ee2a7b] transition-all`}
            >
              About
            </Link>
          </li>
          <li className={`${menuOpen && "my-3"}`}>
            <Link
              onClick={() => setMenuOpen(false)}
              smooth
              to="#schedule"
              className={`${
                hash === "#schedule" ? "text-[#ee2a7b]" : "text-white"
              }  ${
                menuOpen ? "text-3xl" : "text-xl "
              } mx-6 hover:text-[#ee2a7b] transition-all`}
            >
              Schedule
            </Link>
          </li>
          <li className={`${menuOpen && "my-3"}`}>
            <Link
              smooth
              onClick={() => setMenuOpen(false)}
              to="#faq"
              className={`${
                hash === "#faq" ? "text-[#ee2a7b]" : "text-white"
              }  ${
                menuOpen ? "text-3xl" : "text-xl "
              } mx-6 hover:text-[#ee2a7b] transition-all`}
            >
              FAQ's
            </Link>
          </li>
          <li className={`${menuOpen && "my-3"}`}>
            <Link
              onClick={() => setMenuOpen(false)}
              smooth
              to="#sponsor"
              className={`${
                hash === "#sponsor" ? "text-[#ee2a7b]" : "text-white"
              }  ${
                menuOpen ? "text-3xl" : "text-xl "
              } mx-6 hover:text-[#ee2a7b] transition-all`}
            >
              Sponsors
            </Link>
          </li>
          <li className={`${menuOpen && "my-3"}`}>
            <Link
              onClick={() => setMenuOpen(false)}
              smooth
              target={'_blank'}
              to="https://drive.google.com/file/d/10QeDlV-XRIkiAAstKLLi1NQdTLksT-Gy/view"
              className={`${
                hash === "#contact" ? "text-[#ee2a7b]" : "text-white"
              }  ${
                menuOpen ? "text-3xl" : "text-xl "
              } mx-6 hover:text-[#ee2a7b] transition-all`}
            >
              Rules
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
