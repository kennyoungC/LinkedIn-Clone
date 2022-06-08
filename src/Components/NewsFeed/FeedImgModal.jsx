import { useEffect, useState } from "react"
import { Button, Modal } from "react-bootstrap"
import LoadingSpinner from "../UI/Spinner/LoadingSpinner"
import styles from "./FeedImgModal.module.css"
function FeedImgModal(props) {
  const [postImg, setPostImg] = useState(null)
  const [preview, setPreview] = useState()
  const [isLoading, setIsloading] = useState(false)

  useEffect(() => {
    if (!postImg) {
      setPreview(undefined)
      return
    }

    const objectUrl = URL.createObjectURL(postImg)
    setPreview(objectUrl)
    props.onGetImg(objectUrl)

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
  }, [postImg])

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setPostImg(undefined)
      return
    }

    // I've kept this example simple by using the first image instead of multiple
    setPostImg(e.target.files[0])
  }

  const onFileUpload = async (e) => {
    // Create a object of formData
    const formData = new FormData()

    // Update the formData object
    formData.append("post", postImg, postImg.name)

    // Request made to the backend api
    // Send formData object

    setIsloading(true)

    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/posts/${props.postId}
      `,
      {
        body: formData,
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mjk1MDkxNmJmZTkyYzAwMTVlY2E5ZjAiLCJpYXQiOjE2NTM5MzQzNTgsImV4cCI6MTY1NTE0Mzk1OH0.VaDp06IDD3hAoXF2L3NJHR2aBc8cxxJNoPeBAyIB-lc",
        },
      }
    )
    setIsloading(false)
    // setIsEdited(true)
    const data = await response.json()
    props.handleClose()
    // console.log(data)
  }
  const goBackHandler = () => {
    props.handleClose()
    props.onGetImg(" ")
  }

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit your photo</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center my-5">
          {isLoading && (
            <div className="centered">
              <LoadingSpinner />
            </div>
          )}
          {!isLoading && (
            <>
              {" "}
              <input
                className={`${styles.input} me-auto `}
                type="file"
                id="file"
                onChange={onSelectFile}
              />
              <label htmlFor="file">Select images to share</label>
              <img style={{ width: "320px" }} src={preview} alt="" />{" "}
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={goBackHandler}>
            Back
          </Button>
          <Button variant="primary" onClick={onFileUpload}>
            Done
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default FeedImgModal
