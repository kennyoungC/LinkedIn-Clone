import { useState } from "react"
import { Button, Modal } from "react-bootstrap"
import styles from "./ProfilePicModal.module.css"

function ProfilePicModal({ show, handleClose, profile }) {
  const [profileImg, setProfileImg] = useState(null)
  const date = profileImg ? profileImg.lastModifiedDate.toDateString() : null

  const onFileUpload = async (e) => {
    // Create a object of formData
    const formData = new FormData()

    // Update the formData object
    formData.append("profile", profileImg, profileImg.name)

    // Request made to the backend api
    // Send formData object
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
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Change photo</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          KENNETH, help other recognize you!
          <div className="my-3">
            <img
              src={"https://via.placeholder.com/150"}
              className="card-img-top rounded-circle img-thumbnail"
              alt="..."
              style={{ height: "90", width: "150px", objectFit: "cover" }}
            />
          </div>
          <p>
            On LinkedIn, we require members to use their real identities, so
            take or upload a photo of yourself. Then crop, filter, and adjust it
            to perfection.
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
        <Modal.Footer>
          <input
            className={`${styles.input} me-auto`}
            type="file"
            id="file"
            onChange={(e) => setProfileImg(e.target.files[0])}
          />
          <label htmlFor="file">Upload Image</label>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
          <Button variant="primary" onClick={onFileUpload}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default ProfilePicModal