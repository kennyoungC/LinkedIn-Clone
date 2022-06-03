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

const initialExperienceState = {
  experience: [],
}

const experienceSlice = createSlice({
  name: "experience",
  initialState: initialExperienceState,
  reducers: {
    addExperience(state, action) {
      state.experience = action.payload
    },
    removeExperience(state, action) {},
  },
})

const store = configureStore({
  reducer: {
    alert: alertSlice.reducer,
    experience: experienceSlice.reducer,
  },
})
export const { showAlert, hideAlert } = alertSlice.actions

export const { addExperience, removeExperience } = experienceSlice.actions
export default store
