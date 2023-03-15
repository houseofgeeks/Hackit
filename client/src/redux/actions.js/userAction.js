import axios from "axios";

export const userLoginRequest = (email, password) => async (dispatch) => {
  dispatch({ type: "USER_LOGIN_REQUEST" });
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `${process.env.REACT_APP_BACKEND_URI}/api/user/login`,
      { email, password },
      config
    );
    console.log(data);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: data });
    localStorage.setItem("hackUser", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: "USER_LOGIN_FAILURE",
      payload: error?.response?.data.message,
    });
  }
};

export const userLogout = () => (dispatch) => {
  dispatch({ type: "USER_LOGOUT" });
  localStorage.removeItem("hackUser");
};

export const userOtpRequest = (name, email, password) => async (dispatch) => {
  dispatch({ type: "USER_OTP_REQUEST" });
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `${process.env.REACT_APP_BACKEND_URI}/api/user`,
      { name, email, password },
      config
    );
    localStorage.setItem("otp", JSON.stringify(data));

    dispatch({ type: "USER_OTP_SUCCESS", payload: data });

    console.log(data);
  } catch (error) {
    dispatch({
      type: "USER_OTP_FAILURE",
      payload: error?.response?.data.message,
    });
  }
};
export const userOtpVerify = (otp) => (dispatch) => {
  const generatedOtp = JSON.parse(localStorage.getItem("otp"));
  console.log(generatedOtp);
  try {
    if (generatedOtp.otp === Number(otp)) {
      dispatch({
        type: "USER_OTP_SUCCESS",
        payload: { message: "Signed in Successfully" },
      });
    } else {
      dispatch({
        type: "USER_OTP_FAILURE",
        payload: "OTP does not match",
      });
    }
  } catch (error) {
    dispatch({
      type: "USER_OTP_FAILURE",
      payload: error?.response?.data.message,
    });
  }
};
export const userRegisterRequest =
  (name, email, password) => async (dispatch) => {
    dispatch({ type: "USER_REGISTER_REQUEST" });
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URI}/api/user/register`,
        { name, email, password },
        config
      );
      console.log(data);
      dispatch({ type: "USER_REGISTER_SUCCESS", payload: data });
      dispatch({ type: "USER_LOGIN_SUCCESS", payload: data });
      localStorage.setItem("hackUser", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: "USER_REGISTER_FAILURE",
        payload: error?.response?.data.message,
      });
    }
  };
