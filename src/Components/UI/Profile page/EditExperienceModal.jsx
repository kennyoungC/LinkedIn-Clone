import { Modal } from "react-bootstrap"
import { useDispatch } from "react-redux"
import useHttp from "../../../hooks/use-http"
import { hideAlert, showAlert } from "../../../store"
import LoadingSpinner from "../Spinner/LoadingSpinner"
import Experience from "./Experience"
import ExperienceForm from "./ExperienceForm"

const EditExperienceModal = (props) => {
  const url = `https://striveschool-api.herokuapp.com/api/profile/${props.id}/experiences`

  const auth =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mjk1MDkxNmJmZTkyYzAwMTVlY2E5ZjAiLCJpYXQiOjE2NTM5MzQzNTgsImV4cCI6MTY1NTE0Mzk1OH0.VaDp06IDD3hAoXF2L3NJHR2aBc8cxxJNoPeBAyIB-lc"
  const { isEditing, sendRequest } = useHttp()
  const dispatch = useDispatch()
  const submitForm = async (newProfile) => {
    const p = () => {
      dispatch(showAlert({ message: "New Experience Added", type: "success" }))
      props.onClose()

      setTimeout(() => {
        dispatch(hideAlert())
      }, 3000)
    }

    sendRequest(
      {
        url,
        method: "POST",
        body: { ...newProfile },
        headers: {
          Authorization: auth,
          "Content-Type": "application/json",
        },
      },
      p
    )
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
          <Modal.Title>Add experience</Modal.Title>
        </Modal.Header>
        {!isEditing ? (
          <Modal.Body>
            <p className="text-muted">* Indicates required</p>

            <ExperienceForm onSubmit={submitForm} onClose={props.onClose} />
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

export default EditExperienceModal
