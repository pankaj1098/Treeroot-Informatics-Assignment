import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../reducer/dataSlice";
// import apiReducer from "./apiSlice";

const store = configureStore({
  reducer: {
    data: dataSlice,
  },
});

export default store;
