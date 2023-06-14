import { configureStore, combineReducers } from "@reduxjs/toolkit";

import searchReducer from "./Search";
import authReducer from "./Auth";

const rootReducer = combineReducers({
  auth: authReducer,
  search: searchReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
