export const userOtpReducer = (state = { otpData: {} }, action) => {
  switch (action.type) {
    case "USER_OTP_REQUEST":
      return {state};
    case "USER_OTP_SUCCESS":
      return { otpData: action.payload };
    case "USER_OTP_FAILURE":
      return { error: action.payload };
    default:
      return state;
  }
};
