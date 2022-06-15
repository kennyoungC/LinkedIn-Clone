import { Modal } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import useHttp from "../../../hooks/use-http"
import { addExperience, hideAlert, showAlert } from "../../../store"
import { BEARER_TOKEN } from "../../../store/BearerToken"
import LoadingSpinner from "../../UI/Spinner/LoadingSpinner"
import Experience from "./Experience"
import ExperienceForm from "./ExperienceForm"

const EditExperienceModal = (props) => {
  const url = `https://striveschool-api.herokuapp.com/api/profile/${props.id}/experiences`

  const { isEditing, sendRequest } = useHttp()
  const exp = useSelector((state) => state.experience.experience)
  const dispatch = useDispatch()
  const submitForm = async (newExp) => {
    const postExp = (data) => {
      // dispatch(showAlert({ message: "New Experience Added", type: "success" }))
      props.onClose()
      dispatch(addExperience([...exp, data]))
      dispatch(showAlert({ message: "New Experience Added", type: "success" }))
      setTimeout(() => {
        dispatch(hideAlert())
      }, 3000)
    }

    sendRequest(
      {
        url,
        method: "POST",
        body: { ...newExp },
        headers: {
          Authorization: BEARER_TOKEN,
          "Content-Type": "application/json",
        },
      },
      postExp
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
