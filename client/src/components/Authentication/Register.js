import Stars from "../Stars";
import loginLogo from "../../assets/login_rocket.json";
import Lottie from "lottie-react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userRegisterRequest } from "../../redux/actions.js/userAction";
import Message from "../Message";
import Loader from "../Loader";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, success, error } = userRegister;
  const userLogin = useSelector((state)=>state.userLogin)
  const {hackUser} = userLogin
  const navigate = useNavigate();
  const handleSignup = () => {
    dispatch(userRegisterRequest(name, email, password));
    setEmail('')
    setName('')
    setPassword('')
  };

  useEffect(() => {
    console.log(loading);
    console.log(hackUser);
    if (hackUser) {
      navigate("/");
    }
  }, [dispatch, hackUser]);

  return (
    <div className="w-full h-[100vh] login relative">
      <Stars />
      {success && <Message type={"success"} message={success.message} />}
      {error && <Message type={"error"} message={error} />}
      <div className="flex justify-center items-center w-full h-full">
        <div className="w-[700px] h-[400px] bg-gradient-to-tr flex items-center justify-around from-slate-300 to-gray-200 rounded-lg">
          <Lottie className="max-w-[200px]" animationData={loginLogo} />
          <div className="flex flex-col">
            <h2 className="mb-3 font-bold text-2xl">Sign up</h2>
            <input
              type="text"
              placeholder="Enter your Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="border outline-none px-3 py-2 rounded-lg focus:border-red-500 my-2 w-[300px]"
            />
            <input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="border outline-none px-3 py-2 rounded-lg focus:border-red-500 my-2 w-[300px]"
            />
            <input
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="border outline-none px-3 py-2 rounded-lg focus:border-red-500 my-2 w-[300px]"
            />
            {loading ? (
              <button
                onClick={handleSignup}
                className="bg-red-500 my-4 py-2 px-8 rounded-lg text-white font-semibold cursor-pointer text-lg hover:bg-red-600"
              >
                <Loader />
              </button>
            ) : (
              <button
                onClick={handleSignup}
                className="bg-red-500 my-4 py-2 px-8 rounded-lg text-white font-semibold cursor-pointer text-lg hover:bg-red-600"
              >
                Sign up
              </button>
            )}

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
