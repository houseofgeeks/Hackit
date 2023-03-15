export const userOtpReducer = (state = {}, action) => {
    switch (action.type) {
      case "USER_OTP_REQUEST":
        return { loading: true };
      case "USER_OTP_SUCCESS":
        return { loading: false, success:action.payload };
      case "USER_OTP_FAILURE":
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  