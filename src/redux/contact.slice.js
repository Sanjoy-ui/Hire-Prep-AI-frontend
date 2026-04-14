import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    formData: {
      name: "",
      email: "",
      message: "",
    },
    loading: false,
    success: false,
    error: null,
  },
  reducers: {
    setFormData: (state, action) => {
      state.formData = {
        ...state.formData,
        ...action.payload,
      };
    },

    resetForm: (state) => {
      state.formData = { name: "", email: "", message: "" };
      state.success = false;
      state.error = null;
    },

    sendStart: (state) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    },

    sendSuccess: (state) => {
      state.loading = false;
      state.success = true;
    },

    sendFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  setFormData,
  resetForm,
  sendStart,
  sendSuccess,
  sendFailure,
} = contactSlice.actions;

export default contactSlice.reducer;