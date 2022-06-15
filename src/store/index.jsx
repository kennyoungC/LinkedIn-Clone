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

const peopleProfileSlices = createSlice({
  name: "peopleProfile",
  initialState: { peopleProfile: {}, people: [] },
  reducers: {
    setPeopleProfile(state, action) {
      state.peopleProfile = action.payload
    },
    setPeople(state, action) {
      state.people = action.payload
    },
  },
})

const profileSlices = createSlice({
  name: "profile",
  initialState: {
    profile: {},
  },
  reducers: {
    setProfileR(state, action) {
      state.profile = action.payload
    },
  },
})

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload // without
    },
  },
})

const store = configureStore({
  reducer: {
    alert: alertSlice.reducer,
    experience: experienceSlice.reducer,
    posts: postsSlice.reducer,
    profile: profileSlices.reducer,
    peopleProfile: peopleProfileSlices.reducer,
  },
})
export const { setProfileR } = profileSlices.actions
export const { setPeopleProfile, setPeople } = peopleProfileSlices.actions
export const { showAlert, hideAlert } = alertSlice.actions
export const { showEditing, getItem, addExperience, removeExperience } =
  experienceSlice.actions
export const { setPosts } = postsSlice.actions
export default store
