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
        `${process.env.REACT_APP_BACKEND_URI}/api/user`,
        { name, email, password },
        config
      );
      console.log(data);
      dispatch({ type: "USER_REGISTER_SUCCESS", payload: data });
    } catch (error) {
      dispatch({
        type: "USER_REGISTER_FAILURE",
        payload: error?.response?.data.message,
      });
    }
  };

export const userVerifyRequest = (email) => async (dispatch) => {
  try {
    dispatch({ type: "USER_REGISTER_REQUEST" });
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URI}/verify/${email}`
    );
    console.log(data);
    dispatch({ type: "USER_REGISTER_DONE", payload: data });
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: data });
    localStorage.setItem("hackUser", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: "USER_REGISTER_FAILURE",
      payload: error?.response?.data.message,
    });
  }
};
