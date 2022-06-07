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
  showEditing: false,
}

const experienceSlice = createSlice({
  name: "experience",
  initialState: initialExperienceState,
  reducers: {
    addExperience(state, action) {
      state.experience = action.payload
      localStorage.setItem("experience", JSON.stringify(action.payload))
    },
    getItem(state) {
      const exp = localStorage.getItem("experience")
      state.experience = JSON.parse(exp)
    },
    showEditing(state, action) {
      state.showEditing = action.payload
    },
  },
})

const userSlices = createSlice({
  name: "user",
  initialState: { id: "" },
  reducers: {
    setId(state, action) {
      state.id = action.payload
      localStorage.setItem("id", action.payload)
    },
  },
})

const store = configureStore({
  reducer: {
    alert: alertSlice.reducer,
    experience: experienceSlice.reducer,
    user: userSlices.reducer,
  },
})
export const { showAlert, hideAlert } = alertSlice.actions
export const { setId } = userSlices.actions
export const { showEditing, getItem, addExperience, removeExperience } =
  experienceSlice.actions
export default store
