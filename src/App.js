import { Container } from "react-bootstrap"
import { useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"
import MyFooter from "./Components/Layout/MyFooter"
import MyNavbar from "./Components/Layout/MyNavbar"
import AlertMessage from "./Components/UI/Alert/AlertMessage"
import Profile from "./Components/UI/Profile page/Profile"
// import Toast from "./Components/UI/Toaster/Toast"

function App() {
  const isShowing = useSelector((state) => state.alert.isShowing)
  return (
    <>
      <MyNavbar />

      <Container>
        {isShowing && <AlertMessage />}
        <main className="my-4">
          <Profile />
        </main>
        {/* <Toast /> */}
      </Container>
      <MyFooter />
    </>
  )
}

export default App
