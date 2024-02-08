import { createSlice } from "@reduxjs/toolkit";

const generalSlice = createSlice({
  name: "general",
  initialState: {
    user: null,
  },
  reducers: {
    setUserData(state, action) {
      state.user = action.payload;
    },
  },
});

export const { setUserData } = generalSlice.actions;

export default generalSlice;
