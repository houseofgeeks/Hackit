import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import MenuComp from "./MenuComp";
import hackers from "../assets/Hackers.svg";
import { useState } from "react";
const Navbar = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { hackUser } = userLogin;
  const [navbar, setNavbar] = useState("transparent");
  const handleScroll = () => {
    if (window.scrollY >= 64) {
      setNavbar("transparent");
    } else {
      setNavbar("transparent");
    }
  };

  window.addEventListener("scroll", handleScroll);
  return (
    <div
      className={`bg-transparent backdrop-blur-sm h-[80px] transition-all py-4 md:px-20 sm:px-8 px-4 w-full fixed top-0 z-20 timeline`}
    >
      <div className="flex justify-between items-center">
        <Link to={"/"}>
          <img className="max-w-[120px]" src={hackers} alt="" />
        </Link>

        <ul className="flex items-center font-[Urbanist]">
          <li>
            <a
              href=""
              className="text-white mx-6 text-xl hover:text-[#ee2a7b] transition-all"
            >
              About
            </a>
          </li>
          <li>
            <a
              href=""
              className="text-white mx-6 text-xl hover:text-[#ee2a7b] transition-all"
            >
              Schedule
            </a>
          </li>
          <li>
            <a
              href=""
              className="text-white mx-6 text-xl hover:text-[#ee2a7b] transition-all"
            >
              FAQ's
            </a>
          </li>
          <li>
            <a
              href=""
              className="text-white mx-6 text-xl hover:text-[#ee2a7b] transition-all"
            >
              Contact us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
