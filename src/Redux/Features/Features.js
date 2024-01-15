import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: localStorage.getItem("mode") || "light",
  userData: localStorage.getItem("userData"),
};

document.documentElement.setAttribute("data-theme", initialState.mode);

const Features = createSlice({
  name: "Features",
  initialState,
  reducers: {
    ChangeMode: (state) => {
      state.mode = state.mode === "dark" ? "light" : "dark";
      localStorage.setItem("mode", state.mode);
      document.documentElement.setAttribute("data-theme", state.mode);
    },
    setUserData: (state, { payload }) => {
      state.userData = payload;
    },
  },
});

export const { ChangeMode, setUserData } = Features.actions;

export default Features.reducer;
