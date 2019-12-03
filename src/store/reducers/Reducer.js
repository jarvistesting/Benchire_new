const initialState = {
  isLogin: false,
  userDetail: {},
  loginError: ""
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGGEDIN":
      return {
        ...state,
        isLogin: true,
        userDetail: { ...action.payload }
      };
    case "LOGGEDIN_ERROR":
      return {
        ...state,
        isLogin: false,
        loginError: action.payload.error,
        userDetail: {}
      };
    case "AUTO_SIGNIN":
      return {
        ...state,
        isLogin: true,
        userDetail: { ...action.payload }
      };
    case "LOGOUT":
      return {
        ...state,
        isLogin: false,
        userDetail: {}
      };
    default:
      return { ...state };
  }
};

export default Reducer;
