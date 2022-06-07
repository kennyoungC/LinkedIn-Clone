import { Container } from "react-bootstrap"
import { useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"
import MyFooter from "./Components/Layout/MyFooter"
import MyNavbar from "./Components/Layout/MyNavbar"
import AlertMessage from "./Components/UI/Alert/AlertMessage"
import Profile from "./Pages/Profile"
import EditExperiencePage from "./Pages/EditExperiencePage"
import SpecificProfile from "./Pages/SpecificProfile"
import NewsFeed from "./Pages/NewsFeed"
import GoToTop from "./store/GoToTop"

function App() {
  const isShowing = useSelector((state) => state.alert.isShowing)

  const UserProfile = (
    <Container>
      {isShowing && <AlertMessage />}
      <main className="my-4">
        <Profile />
      </main>
    </Container>
  )
  const newsFeed = (
    <>
      {isShowing && <AlertMessage />}

      <NewsFeed />
    </>
  )

  return (
    <>
      <MyNavbar />
      <Routes>
        <Route path="/feed" element={newsFeed} />
        <Route path="/profile" element={UserProfile} />
        <Route
          path="/specific-profile/:profileId"
          element={<SpecificProfile />}
        />
        <Route
          path="/edit-experience/:experienceId"
          element={<EditExperiencePage />}
        />
      </Routes>
      <GoToTop />
      <MyFooter />
    </>
  )
}

export default App
