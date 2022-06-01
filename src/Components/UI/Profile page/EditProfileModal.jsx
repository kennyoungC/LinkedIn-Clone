import { useState } from "react"
import { Modal } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { hideAlert, showAlert } from "../../../store"
import LoadingSpinner from "../Spinner/LoadingSpinner"
import ProfileForm from "./ProfileForm"

const EditProfileModal = (props) => {
  const [isEditing, setIsEditing] = useState(false)

  const dispatch = useDispatch()
  const submitForm = async (newProfile) => {
    setIsEditing(true)
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          method: "PUT",
          body: JSON.stringify({ ...newProfile }),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mjk1MDkxNmJmZTkyYzAwMTVlY2E5ZjAiLCJpYXQiOjE2NTM5MzQzNTgsImV4cCI6MTY1NTE0Mzk1OH0.VaDp06IDD3hAoXF2L3NJHR2aBc8cxxJNoPeBAyIB-lc",
          },
        }
      )
      const data = await response.json()

      dispatch(
        showAlert({ message: "Your Profile has been Updated", type: "success" })
      )
      setIsEditing(false)
      props.onClose()

      setTimeout(() => {
        dispatch(hideAlert())
      }, 3000)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Modal
        size="lg"
        show={props.show}
        onHide={props.onClose}
        animation={true}
        scrollable={true}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit intro</Modal.Title>
        </Modal.Header>
        {!isEditing ? (
          <Modal.Body>
            <p className="text-muted">* Indicates required</p>

            <ProfileForm onSubmit={submitForm} onClose={props.onClose} />
          </Modal.Body>
        ) : (
          <div className="centered">
            <LoadingSpinner />
          </div>
        )}
        {/* <Modal.Footer>
          <Button variant="primary" onClick={props.onClose}>
            Save
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  )
}

export default EditProfileModal
