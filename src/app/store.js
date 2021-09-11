import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import userProfileReducer from "../features/userProfile";

export default configureStore({
  reducer: {
    user: userReducer,
    // userProfile: userProfileReducer
  },
});