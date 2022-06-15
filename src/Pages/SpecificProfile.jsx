import React, { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import About from "../Components/ProfileSection/About"
import Aside from "../Components/ProfileSection/Aside/Aside"
import Education from "../Components/ProfileSection/Education"
import Experience from "../Components/ProfileSection/ProfileExperience/Experience"

import ProfileHeader from "../Components/ProfileSection/ProfileHeader/ProfileHeader"
import { setPeopleProfile } from "../store"
import { BEARER_TOKEN } from "../store/BearerToken"

const SpecificProfile = () => {
  const { profileId } = useParams()
  const dispatch = useDispatch()

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
            Authorization: BEARER_TOKEN,
          },
        }
      )
      const data = await response.json()
      dispatch(setPeopleProfile(data))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Row className="my-4">
        <Col md={9}>
          <ProfileHeader />
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
