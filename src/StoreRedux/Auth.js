import { createSlice } from "@reduxjs/toolkit";

const userToken = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : " ";
console.log(userToken);

const email = localStorage.getItem("email")
  ? localStorage.getItem("email")
  : " ";
console.log(email);

const initialState = {
  isLogIn: false,
  idToken: userToken,
  logOut: false,
  isEmailVerified: false,
};

const AuthSlice = createSlice({
  name: "Auth",
  initialState: initialState,
  reducers: {
    setLogIn(state, action) {
      state.isLogIn = action.payload;
    },
    setIdToken(state, action) {
      state.idToken = action.payload;
    },
    setEmailVerified(state, action) {
      state.isEmailVerified = action.payload;
    },
    setLogOut(state) {
      return (
        (state.isLogIn = false),
        (state.idToken = ""),
        (state.isEmailVerified = false),
        localStorage.removeItem("token"),
        localStorage.removeItem("email")
      );
    },
  },
});

const authReducer = AuthSlice.reducer;
export default authReducer;
export const authActions = AuthSlice.actions;
