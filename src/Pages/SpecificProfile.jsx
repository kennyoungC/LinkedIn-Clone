import React, { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import About from "../Components/ProfileSection/About"
import Aside from "../Components/ProfileSection/Aside/Aside"
import Education from "../Components/ProfileSection/Education"
import Experience from "../Components/ProfileSection/ProfileExperience/Experience"

import ProfileHeader from "../Components/ProfileSection/ProfileHeader/ProfileHeader"

const SpecificProfile = () => {
  const [profile, setProfile] = useState({})
  const { profileId } = useParams()

  useEffect(() => {
    fetchSpecificProfile()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profileId])

  const fetchSpecificProfile = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${profileId}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mjk1MDkxNmJmZTkyYzAwMTVlY2E5ZjAiLCJpYXQiOjE2NTM5MzQzNTgsImV4cCI6MTY1NTE0Mzk1OH0.VaDp06IDD3hAoXF2L3NJHR2aBc8cxxJNoPeBAyIB-lc",
          },
        }
      )
      const data = await response.json()
      setProfile(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Row className="my-4">
        <Col md={9}>
          <ProfileHeader profile={profile} />
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

export default SpecificProfile
