import React, { useEffect, useState } from "react"
import { Form, Modal } from "react-bootstrap"
import useHttp from "../../../hooks/use-http"
import { BEARER_TOKEN } from "../../../store/BearerToken"

const ProfileForm = (props) => {
  const url = "https://striveschool-api.herokuapp.com/api/profile/me"

  const { isEditing, sendRequest: fetchProfiles } = useHttp()
  const [profile, setProfile] = useState({
    id: "",
    name: "",
    image: "",
    bio: "",
    title: "",
    surname: "",
    country: "",
  })
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

      setProfile({
        ...loadedProfile,
      })
    }

    fetchProfiles(
      { url, headers: { Authorization: BEARER_TOKEN } },
      transformedProfile
    )
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

  //     setProfile({
  //       ...loadedProfile,
  //     })
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const submitHandler = (e) => {
    e.preventDefault()
    // props.onClose()
    // console.log(profile)
    props.onSubmit(profile)
  }

  const inputHandler = (e, value) => {
    setProfile({ ...profile, [value]: e.target.value })
  }
  return (
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>First name*</Form.Label>
        <Form.Control
          onChange={(e) => inputHandler(e, "name")}
          value={profile.name ?? ""}
          type="text"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicLastName">
        <Form.Label>Last name*</Form.Label>
        <Form.Control
          type="text"
          onChange={(e) => inputHandler(e, "surname")}
          value={profile.surname ?? ""}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicAdditionalName">
        <Form.Label>Additional name</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicAdditionalName">
        <Form.Label>Headline*</Form.Label>
        <Form.Control
          onChange={(e) => inputHandler(e, "bio")}
          type="text"
          value={profile.bio ?? ""}
        />
      </Form.Group>

      <p className="text-muted fs-5">Current position</p>
      <a className="text-decoration-none" href="#">
        <span>
          <i className="bi bi-plus-lg"></i>
        </span>{" "}
        Add new position
      </a>
      <Form.Group className="my-3" controlId="formBasicAdditionalName">
        <Form.Label>Industry*</Form.Label>
        <Form.Control type="text" required />
      </Form.Group>
      <p className="text-muted fs-5">Education</p>
      <Form.Group className="my-3" controlId="formBasicAdditionalName">
        <Form.Label>Education*</Form.Label>
        <Form.Control type="text" required />
      </Form.Group>
      <a className="text-decoration-none " href="#">
        <span>
          <i className="bi bi-plus-lg"></i>
        </span>{" "}
        Add new education
      </a>
      <p className="text-muted fs-5 mt-3 mb-0">Location</p>
      <Form.Group className="my-3" controlId="formBasicAdditionalName">
        <Form.Label>Country/Region</Form.Label>
        <Form.Control
          type="text"
          onChange={(e) => inputHandler(e, "area")}
          value={profile.area ?? ""}
        />
      </Form.Group>
      <Form.Group className="my-3" controlId="formBasicCity">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="my-3" controlId="formBasicFile">
        <Form.Label>upload Image</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Modal.Footer>
        <button className="btn btn-primary">Save</button>
      </Modal.Footer>
    </Form>
  )
}

export default ProfileForm
