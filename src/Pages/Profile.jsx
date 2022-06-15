import React, { useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import useHttp from "../hooks/use-http"
import About from "../Components/ProfileSection/About"
import Aside from "../Components/ProfileSection/Aside/Aside"
import Education from "../Components/ProfileSection/Education"
import Experience from "../Components/ProfileSection/ProfileExperience/Experience"

import ProfileHeader from "../Components/ProfileSection/ProfileHeader/ProfileHeader"
import Suggested from "../Components/ProfileSection/Suggested"
import { BEARER_TOKEN } from "../store/BearerToken"
import { useDispatch } from "react-redux"
import { setProfileR } from "../store"

const Profile = () => {
  const dispatch = useDispatch()
  const url = "https://striveschool-api.herokuapp.com/api/profile/me"

  const { isEditing, sendRequest: fetchProfiles } = useHttp()
  useEffect(() => {
    const transformedProfile = (profileData) => {
      // let loadedProfile = {
      //   id: profileData._id,
      //   name: profileData.name,
      //   image: profileData.image,
      //   bio: profileData.bio,
      //   title: profileData.title,
      //   surname: profileData.surname,
      //   area: profileData.area,
      // }
      dispatch(setProfileR(profileData))
      // setProfile(loadedProfile)
    }

    fetchProfiles(
      { url, headers: { Authorization: BEARER_TOKEN } },
      transformedProfile
    )
  }, [fetchProfiles])

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
