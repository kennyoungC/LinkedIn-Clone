import React from "react"
import { Modal } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { useParams, useNavigate } from "react-router-dom"
import useHttp from "../../../hooks/use-http"
import LoadingSpinner from "../../UI/Spinner/LoadingSpinner"
import EditSpecificExperienceForm from "./EditSpecificExperienceForm"
import { useffect } from "react"
import { BEARER_TOKEN } from "../../../store/BearerToken"
import { hideAlert, showAlert } from "../../../store"
const EditSpecificExperience = (props) => {
  const navigate = useNavigate()
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
          Authorization: BEARER_TOKEN,
        },
      },
      () => {
        props.onClose()
        navigate("/profile")
        dispatch(
          showAlert({
            message: "Your Experience Was Successfully Updated",
            type: "success",
          })
        )
        setTimeout(() => {
          dispatch(hideAlert())
        }, 3000)
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
