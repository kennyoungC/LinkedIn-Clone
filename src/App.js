import { Container } from "react-bootstrap"
import { useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"
import MyFooter from "./Components/Layout/MyFooter"
import MyNavbar from "./Components/Layout/MyNavbar"
import AlertMessage from "./Components/UI/Alert/AlertMessage"
import Profile from "./Components/UI/Profile page/Profile"
import SpecificProfile from "./Pages/SpecificProfile"

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

  return (
    <>
      <MyNavbar />
      <Routes>
        <Route path="/profile" element={UserProfile} />
        <Route
          path="/specific-profile/:profileId"
          element={<SpecificProfile />}
        />
      </Routes>
      <MyFooter />
    </>
  )
}

export default App
