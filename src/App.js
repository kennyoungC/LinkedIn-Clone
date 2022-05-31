import { Container } from "react-bootstrap"
import MyFooter from "./Components/Layout/MyFooter"
import MyNavbar from "./Components/Layout/MyNavbar"
import Profile from "./Components/UI/Profile page/Profile"

function App() {
  return (
    <>
      <MyNavbar />
      <Container>
        <main className="my-4">
          <Profile />
        </main>
      </Container>
      <MyFooter />
    </>
  )
}

export default App
