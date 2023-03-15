import { Menu } from "antd";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { userLogout } from "../redux/actions.js/userAction";
const MenuComp = ({ name }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(userLogout());
  };
  return (
    <div className="relative">
      <div
        className={`flex items-center cursor-pointer   px-2 py-1 transition-all rounded-lg`}
        onClick={() => {
          setOpenMenu(!openMenu);
        }}
      >
        <p className="text-xl text-white font-bold">{name}</p>
        <IoIosArrowDown
          className={`ml-2 transition-all text-white ${
            openMenu && "rotate-180"
          }`}
        />
      </div>
      {openMenu && (
        <div
          className={`absolute transition w-[150px] duration-1000 bg-slate-50 rounded-lg px-2 py-2 ${
            openMenu ? "top-[50px] right-3" : "top-[-40px] "
          }`}
        >
          <div className="px-2 py-1 hover:bg-slate-300 rounded-lg">
            <Link to={"/profile"}>
              <p className="text-lg">Profile</p>
            </Link>
          </div>
          <hr />
          <div className="px-2 py-1 hover:bg-slate-300 rounded-lg cursor-pointer">
            <p className="text-lg" onClick={logoutHandler}>
              Logout
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
export default MenuComp;
