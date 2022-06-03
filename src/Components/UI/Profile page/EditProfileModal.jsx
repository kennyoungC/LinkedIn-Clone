import { Modal } from "react-bootstrap"
import { useDispatch } from "react-redux"

import useHttp from "../../../hooks/use-http"
import { hideAlert, showAlert } from "../../../store"

import LoadingSpinner from "../Spinner/LoadingSpinner"
import ProfileForm from "./ProfileForm"

const EditProfileModal = (props) => {
  const dispatch = useDispatch()
  const url = "https://striveschool-api.herokuapp.com/api/profile/"
  const auth =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mjk1MDkxNmJmZTkyYzAwMTVlY2E5ZjAiLCJpYXQiOjE2NTM5MzQzNTgsImV4cCI6MTY1NTE0Mzk1OH0.VaDp06IDD3hAoXF2L3NJHR2aBc8cxxJNoPeBAyIB-lc"
  const { isEditing, sendRequest } = useHttp()
  // const [isEditing, setIsEditing] = useState(false)

  const submitForm = (newProfile) => {
    sendRequest(
      {
        url,
        method: "PUT",
        body: newProfile,
        headers: {
          "Content-Type": "application/json",
          Authorization: auth,
        },
      },
      () => {
        props.onClose()
        dispatch(
          showAlert({
            message: "Your Profile has been Updated",
            type: "success",
          })
        )

        setTimeout(() => {
          dispatch(hideAlert())
        }, 3000)
      }
    )
  }

  // const submitForm = async (newProfile) => {
  //   setIsEditing(true)
  //   try {
  //     const response = await fetch(
  //       "https://striveschool-api.herokuapp.com/api/profile/",
  //       {
  //         method: "PUT",
  //         body: JSON.stringify({ ...newProfile }),
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization:
  //             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mjk1MDkxNmJmZTkyYzAwMTVlY2E5ZjAiLCJpYXQiOjE2NTM5MzQzNTgsImV4cCI6MTY1NTE0Mzk1OH0.VaDp06IDD3hAoXF2L3NJHR2aBc8cxxJNoPeBAyIB-lc",
  //         },
  //       }
  //     )
  //     if (!response.ok) {
  //       throw new Error(response.statusText)
  //     }

  //     dispatch(
  //       showAlert({ message: "Your Profile has been Updated", type: "success" })
  //     )
  //     setIsEditing(false)
  //     props.onClose()

  //     setTimeout(() => {
  //       dispatch(hideAlert())
  //     }, 3000)
  //   } catch (error) {
  //     console.log(error.message)
  //     dispatch(showAlert({ message: error.message, type: "danger" }))
  //     setTimeout(() => {
  //       dispatch(hideAlert())
  //     }, 3000)
  //   }
  // }

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
