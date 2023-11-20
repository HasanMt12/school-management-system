import * as actionType from '../ActionTypes/ActionTypes'
const initialState = {
name:null,
email:null,
token:null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.LOGIN:
  return action.payload;

    case actionType.LOGOUT:
      return action.payload;
    default:
      return state;
  }
};

export default authReducer;
