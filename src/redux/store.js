import { configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";

import quotesReducer from "../slices/quotes";

//
export const reduxStore = configureStore({
  reducer: {
    quotes: quotesReducer,
  },
});
