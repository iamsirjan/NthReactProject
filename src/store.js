import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./rootReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = configureStore({
  reducer: RootReducer,
  devTools: composeWithDevTools,
  middleware: [thunk],
});

export default store;
