import React, { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import useHttp from "../../../hooks/use-http"
import About from "./About"
import Aside from "./Aside"
import Education from "./Education"
import Experience from "./Experience"

import ProfileHeader from "./ProfileHeader"
import Suggested from "./Suggested"

const Profile = () => {
  const [profile, setProfile] = useState([])
  const url = "https://striveschool-api.herokuapp.com/api/profile/me"
  const auth =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mjk1MDkxNmJmZTkyYzAwMTVlY2E5ZjAiLCJpYXQiOjE2NTM5MzQzNTgsImV4cCI6MTY1NTE0Mzk1OH0.VaDp06IDD3hAoXF2L3NJHR2aBc8cxxJNoPeBAyIB-lc"
  const { isEditing, sendRequest: fetchProfiles } = useHttp()
  useEffect(() => {
    const transformedProfile = (profileData) => {
      let loadedProfile = {
        id: profileData._id,
        name: profileData.name,
        image: profileData.image,
        bio: profileData.bio,
        title: profileData.title,
        surname: profileData.surname,
        area: profileData.area,
      }

      setProfile(loadedProfile)
    }

    fetchProfiles({ url, headers: { Authorization: auth } }, transformedProfile)
  }, [fetchProfiles])

  // const fetchProfiles = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://striveschool-api.herokuapp.com/api/profile/me",
  //       {
  //         headers: {
  //           Authorization:
  //             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mjk1MDkxNmJmZTkyYzAwMTVlY2E5ZjAiLCJpYXQiOjE2NTM5MzQzNTgsImV4cCI6MTY1NTE0Mzk1OH0.VaDp06IDD3hAoXF2L3NJHR2aBc8cxxJNoPeBAyIB-lc",
  //         },
  //       }
  //     )
  //     const data = await response.json()
  //     let loadedProfile = {
  //       id: data._id,
  //       name: data.name,
  //       image: data.image,
  //       bio: data.bio,
  //       title: data.title,
  //       surname: data.surname,
  //       area: data.area,
  //     }

  //     setProfile(loadedProfile)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  return (
    <Container>
      <Row>
        <Col md={9}>
          <ProfileHeader profile={profile} />
          <Suggested />
          <About />
          <Experience experienceId={profile.id} />
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
