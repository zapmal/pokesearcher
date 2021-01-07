const AuthReducer = (state, action) => {
  switch(action.type) {
    case 'AUTH_USER': 
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
        loading: false,
      };
    case 'AUTH_LOGIN':
      return {
        ...state,
        isLoggedIn: true
      };
    case 'AUTH_LOGOUT':
      return {
        ...state,
        isLoggedIn: false
      };
    case 'AUTH_ERROR':
      return {
        ...state,
        error: action.payload
      };
    default: 
      return state;
  }
};

export default AuthReducer;