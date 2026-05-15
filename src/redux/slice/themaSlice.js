import { createSlice } from "@reduxjs/toolkit";

const themaSlice = createSlice({
  name: "thema",
  initialState: {
    thema: localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : "light",
  },
  reducers: {
    updateThema: (state, action) => {
      if (action.payload === state.thema) {
        //console.log(action.payload);
        return;
      }
      // console.log(localStorage.getItem("theme"));

      state.thema = action.payload;
      document.documentElement.classList.toggle(
        "dark",
        action.payload === "dark",
      );
      localStorage.setItem("theme", action.payload);
    },
  },
});

export const { updateThema } = themaSlice.actions;

export default themaSlice.reducer;
