import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import MenuComp from "./MenuComp";
import hackers from "../assets/Hackers.svg";
const Navbar = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { hackUser } = userLogin;
  return (
    <div className="py-4 md:px-20 sm:px-8 px-4 w-full fixed top-0 z-20 timeline">
      <div className="flex justify-between items-center">
        <Link to={"/"}>
          <img className="max-w-[120px]" src={hackers} alt="" />
        </Link>

        <ul className="flex items-center">
          <li>
            <a href="" className="text-white mx-6 text-xl hover:text-[#ee2a7b] ">About</a>
          </li>
          <li>
            <a href="" className="text-white mx-6 text-xl hover:text-[#ee2a7b] ">Schedule</a>
          </li>
          <li>
            <a href="" className="text-white mx-6 text-xl hover:text-[#ee2a7b] ">FAQ's</a>
          </li>
          <li>
            <a href="" className="text-white mx-6 text-xl hover:text-[#ee2a7b] ">Contact us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
