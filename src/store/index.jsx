import { createSlice, configureStore } from "@reduxjs/toolkit"

const initialAlertState = {
  isShowing: false,
  message: "",
  type: "",
}

const alertSlice = createSlice({
  name: "alert",
  initialState: initialAlertState,
  reducers: {
    showAlert(state, action) {
      const { message, type } = action.payload
      state.message = message
      state.type = type
      state.isShowing = true
    },
    hideAlert(state) {
      state.isShowing = false
    },
  },
})

const store = configureStore({
  reducer: {
    alert: alertSlice.reducer,
  },
})
export const { showAlert, hideAlert } = alertSlice.actions
export default store
