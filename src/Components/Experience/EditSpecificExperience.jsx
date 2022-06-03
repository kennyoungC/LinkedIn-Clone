import React from "react"
import { Modal } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import useHttp from "../../hooks/use-http"
import LoadingSpinner from "../UI/Spinner/LoadingSpinner"
import EditSpecificExperienceForm from "./EditSpecificExperienceForm"

const EditSpecificExperience = (props) => {
  const dispatch = useDispatch()
  const { isEditing, sendRequest } = useHttp()
  const { experienceId } = useParams()

  const submitForm = (newEditedExp) => {
    sendRequest(
      {
        url: `https://striveschool-api.herokuapp.com/api/profile/${experienceId}/experiences/${props.id}`,
        method: "PUT",
        body: { ...newEditedExp },

        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mjk1MDkxNmJmZTkyYzAwMTVlY2E5ZjAiLCJpYXQiOjE2NTM5MzQzNTgsImV4cCI6MTY1NTE0Mzk1OH0.VaDp06IDD3hAoXF2L3NJHR2aBc8cxxJNoPeBAyIB-lc",
        },
      },
      () => {
        props.onClose()
      }
    )
  }
  return (
    <Modal
      size="lg"
      show={props.show}
      onHide={props.onClose}
      animation={true}
      scrollable={true}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Edit experience</Modal.Title>
      </Modal.Header>
      {!isEditing ? (
        <Modal.Body>
          <p className="text-muted">* Indicates required</p>

          <EditSpecificExperienceForm
            onSubmit={submitForm}
            onClose={props.onClose}
            experienceId={props.id}
            userId={experienceId}
          />
        </Modal.Body>
      ) : (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
    </Modal>
  )
}

export default EditSpecificExperience
