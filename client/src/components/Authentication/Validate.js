import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userOtpVerify } from "../../redux/actions.js/userAction";
import Message from "../Message";
import Stars from "../Stars";

const Validate = () => {
  const [enteredOtp, setEnteredOtp] = useState("");
  const userOtp = useSelector((state) => state.userOtp);
  const { loading, otpData, error } = userOtp;

  const dispatch = useDispatch();
  const verifyOtp = () => {
    dispatch(userOtpVerify(enteredOtp))
  };
  return (
    <div className="login w-full h-[100vh] relative">
      {error && <Message type={"error"} message={error} />}
      {otpData?.message && <Message type={"success"} message={otpData.message} />}
      <Stars />
      <div className="flex justify-center items-center w-full h-full">
        <div className="w-[400px] h-[300px] bg-gradient-to-tr flex items-center flex-col justify-evenly from-slate-300 to-gray-200 rounded-lg">
          <h2 className="mb-3 font-bold text-2xl">
            Enter the OTP sent on your email
          </h2>
          <input
            type="text"
            placeholder="Enter 4 digit OTP"
            onChange={(e) => setEnteredOtp(e.target.value)}
            className="border outline-none px-3 py-2 rounded-lg focus:border-red-500 my-2 w-[300px]"
          />
          <button
            onClick={verifyOtp}
            className="bg-red-500 my-2 py-2 px-8 rounded-lg text-white font-semibold cursor-pointer text-lg hover:bg-red-600"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default Validate;
