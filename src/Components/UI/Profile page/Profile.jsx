import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import About from "./About"
import Aside from "./Aside"
import Education from "./Education"
import Experience from "./Experience"

import ProfileHeader from "./ProfileHeader"
import Suggested from "./Suggested"

const Profile = () => {
  return (
    <Container>
      <Row>
        <Col md={9}>
          <ProfileHeader />
          <Suggested />
          <About />
          <Experience />
          <Education />
        </Col>
        <Col md={3}>
          <Aside />
        </Col>
      </Row>
    </Container>
  )
}

export default Profile
