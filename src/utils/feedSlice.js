import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    addToFeed: (state, action) => {
      return action.payload;
    },
    removeFeed: () => null,
  },
});

export const { addToFeed, removeFeed } = feedSlice.actions;

export default feedSlice.reducer;
