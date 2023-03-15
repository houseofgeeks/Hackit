import Stars from "../Stars";
import loginLogo from "../../assets/login_rocket.json";
import Lottie from "lottie-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userOtpRequest } from "../../redux/actions.js/userAction";
import Message from "../Message";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const dispatch = useDispatch();
  const userOtp = useSelector((state) => state.userOtp);
  const { loading, success, error } = userOtp;
  const navigate = useNavigate();
  const handleSignup = () => {
    dispatch(userOtpRequest(name, email, password));
      navigate("/validate");
  };
  return (
    <div className="w-full h-[100vh] login relative">

      <Stars />
      <div className="flex justify-center items-center w-full h-full">
        <div className="w-[700px] h-[400px] bg-gradient-to-tr flex items-center justify-around from-slate-300 to-gray-200 rounded-lg">
          <Lottie className="max-w-[200px]" animationData={loginLogo} />
          <div className="flex flex-col">
            <h2 className="mb-3 font-bold text-2xl">Sign up</h2>
            <input
              type="text"
              placeholder="Enter your Name"
              onChange={(e) => setName(e.target.value)}
              className="border outline-none px-3 py-2 rounded-lg focus:border-red-500 my-2 w-[300px]"
            />
            <input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              className="border outline-none px-3 py-2 rounded-lg focus:border-red-500 my-2 w-[300px]"
            />
            <input
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              className="border outline-none px-3 py-2 rounded-lg focus:border-red-500 my-2 w-[300px]"
            />
            <button
              onClick={handleSignup}
              className="bg-red-500 my-4 py-2 px-8 rounded-lg text-white font-semibold cursor-pointer text-lg hover:bg-red-600"
            >
              Send Otp
            </button>
            <p>
              Already have an account ?{" "}
              <Link to={"/login"} className="text-red-500">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
