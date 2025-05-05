import { createSlice } from "@reduxjs/toolkit";

const connectSlice = createSlice({
  name: "connections",
  initialState: null,
  reducers: {
    addConnections: (state, action) => action.payload,
    removeConnections: () => null,
  },
});

export const { addConnections, removeConnections } = connectSlice.actions;

export default connectSlice.reducer;
