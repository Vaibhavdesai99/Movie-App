import { createSlice } from "@reduxjs/toolkit";

const initialState = { query: "" };
const SearchSlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {
    setSearchQuery(state, action) {
      state.query = action.payload;
    },
  },
});

export const { setSearchQuery } = SearchSlice.actions;

const searchReducer = SearchSlice.reducer;
export default searchReducer;
