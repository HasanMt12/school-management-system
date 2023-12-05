import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";

// Retrieve user information from local storage if available
const userInfoFromStorage = localStorage.getItem("schoolAdmin")
  ? JSON.parse(localStorage.getItem("schoolAdmin"))
  : null;

// Set the initial state with user information from local storage
const initialState = {
  admin: { userInfo: userInfoFromStorage },
};

// Create the Redux store using configureStore from Redux Toolkit
const store = configureStore({
  reducer: {
    admin: userReducer,
  },
  preloadedState: initialState,   // Provide the preloaded state to initialize the store with user information
});

export default store;