import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import MenuComp from "./MenuComp";
const Navbar = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { hackUser } = userLogin;
  return (
    <div className="py-4 px-20 w-full ">
      <div className="flex justify-between items-center">
        <Link to={"/"}>
          <div className="text-white text-3xl font-bold title">
            HOUSE OF HACKERS
          </div>
        </Link>

        <div>
          {hackUser ? (
            <MenuComp name={hackUser?.name} />
          ) : (
            <Link to={"/login"}>
              <button className="bg-red-500 py-2 px-8 rounded-lg text-white font-semibold cursor-pointer text-lg hover:bg-red-600">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
