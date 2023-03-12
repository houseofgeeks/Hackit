import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="py-4 px-20 w-full flex justify-between items-center">
      <Link to={'/'}>
        <div className="text-white text-3xl font-bold title">HOUSE OF HACKERS</div>
      </Link>

      <div>
        {/* <Link to={'/login'}>
          <button className="bg-red-500 py-2 px-8 rounded-lg text-white font-semibold cursor-pointer text-lg hover:bg-red-600">
            Login
          </button>
        </Link> */}
        <Link to={"/profile"}>
          <FaUserCircle className="text-white text-4xl" />
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
