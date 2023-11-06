const initialState = {
  isAuthenticated: false,
  user: null,
  loginError: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        isAuthenticated: true,
        user: action.payload,
        loginError: null,
      };
    case 'LOGIN_FAILURE':
      return {
        isAuthenticated: false,
        user: null,
        loginError: 'Invalid credentials. Please try again.',
      };
    default:
      return state;
  }
};

export default authReducer;
