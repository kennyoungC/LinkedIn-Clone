import { useCallback, useEffect, useState } from "react"
import { Button, Modal } from "react-bootstrap"
import LoadingSpinner from "../../UI/Spinner/LoadingSpinner"
import styles from "./ProfilePicModal.module.css"

function ProfilePicModal({ show, handleClose, profile }) {
  const [isEditing, setIsEditing] = useState(false)
  const [isEdited, setIsEdited] = useState(false)

  const [profileImg, setProfileImg] = useState(null)
  const date = profileImg ? profileImg.lastModifiedDate.toDateString() : null

  useEffect(() => {
    console.log(isEdited)
  }, [isEdited])
  const onFileUpload = async (e) => {
    // Create a object of formData
    const formData = new FormData()

    // Update the formData object
    formData.append("profile", profileImg, profileImg.name)

    // Request made to the backend api
    // Send formData object

    setIsEditing(true)

    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${profile.id}/picture`,
      {
        body: formData,
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mjk1MDkxNmJmZTkyYzAwMTVlY2E5ZjAiLCJpYXQiOjE2NTM5MzQzNTgsImV4cCI6MTY1NTE0Mzk1OH0.VaDp06IDD3hAoXF2L3NJHR2aBc8cxxJNoPeBAyIB-lc",
        },
      }
    )
    setIsEditing(false)
    setIsEdited(true)
    const data = await response.json()
    // console.log(data)
  }

  let innerModalContent
  if (!isEditing && !isEdited) {
    innerModalContent = (
      <Modal.Body className="text-center">
        KENNETH, help other recognize you!
        <div className="my-3">
          <img
            src={profile.image}
            className="card-img-top rounded-circle img-thumbnail"
            alt="..."
            style={{ height: "150px", width: "150px", objectFit: "cover" }}
          />
        </div>
        <p>
          On LinkedIn, we require members to use their real identities, so take
          or upload a photo of yourself. Then crop, filter, and adjust it to
          perfection.
        </p>
        {profileImg ? (
          <div className="d-flex gap-2">
            <span>name: {profileImg.name}</span>
            <span>type: {profileImg.type}</span>
            <span>last modified: {date}</span>
          </div>
        ) : (
          " "
        )}
      </Modal.Body>
    )
  }
  if (isEditing) {
    innerModalContent = (
      <div className="centered">
        {" "}
        <LoadingSpinner />
      </div>
    )
  }
  if (isEdited) {
    innerModalContent = (
      <div className="centered">
        {" "}
        <h3>Your profile picture has been updated!</h3>
      </div>
    )
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Change photo</Modal.Title>
        </Modal.Header>
        {innerModalContent}
        <Modal.Footer>
          {!isEdited && (
            <>
              <input
                className={`${styles.input} me-auto `}
                type="file"
                id="file"
                onChange={(e) => setProfileImg(e.target.files[0])}
              />
              <label htmlFor="file">Upload Image</label>

              <Button className="mb-3" variant="primary" onClick={onFileUpload}>
                Save Changes
              </Button>
            </>
          )}
          {isEdited && (
            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default ProfilePicModal
