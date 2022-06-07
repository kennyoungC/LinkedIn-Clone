import React, { useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import useHttp from "../../hooks/use-http"
import { showAlert } from "../../store"
import LoadingSpinner from "../UI/Spinner/LoadingSpinner"

const EditModal = (props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [postInput, setPostInput] = useState(props.postDetail.text)
  console.log(props.postDetail._id)
  const { isEditing, sendRequest } = useHttp()

  const editPostHandler = async (e) => {
    try {
      sendRequest(
        {
          url: `https://striveschool-api.herokuapp.com/api/posts/${props.postDetail._id}`,
          method: "PUT",
          body: { text: postInput },
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mjk1MDkxNmJmZTkyYzAwMTVlY2E5ZjAiLCJpYXQiOjE2NTM5MzQzNTgsImV4cCI6MTY1NTE0Mzk1OH0.VaDp06IDD3hAoXF2L3NJHR2aBc8cxxJNoPeBAyIB-lc",
          },
        },
        (data) => {
          console.log(data)
          dispatch(showAlert({ message: "Post Updated", type: "success" }))
          navigate("/feed")
          props.onHide()
        }
      )
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Modal show={props.show} onHide={props.onHide} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Create a post</Modal.Title>
        </Modal.Header>
        {!isEditing ? (
          <Modal.Body>
            <div className="d-flex align-items-start gap-2 my-1">
              <img
                className="rounded-circle"
                src={props.profile.image}
                alt=""
                style={{ width: "48px", height: "48px" }}
              />
              <div>
                <div className="d-flex flex-column gap-1 mb-1">
                  <p className="mb-0">{props.profile.name} </p>
                </div>
                <Button className="rounded-pill py-0 bg-transparent btn-outline-secondary text-secondary">
                  Anyone
                </Button>
              </div>
            </div>
            <Form>
              <Form.Group
                className="my-2"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  value={postInput}
                  onChange={(e) => setPostInput(e.target.value)}
                  placeholder="What do you want to talk about?"
                  className="border-0"
                  as="textarea"
                  rows={4}
                />
              </Form.Group>
              <span className="float-start d-flex gap-3">
                <i className="bi bi-image"></i>
                <i className="bi bi-file-play-fill"></i>
                <i className="bi bi-sticky-fill"></i>
                <i className="bi bi-briefcase-fill"></i>
                <i className="bi bi-bar-chart-line-fill"></i>
                <i className="bi bi-three-dots"></i>
              </span>
              <Button
                onClick={editPostHandler}
                disabled={postInput.length === 0}
                className="float-end px-3 py-0 rounded-pill"
                variant={postInput.length === 0 ? "secondary" : "primary"}
              >
                Edit Post
              </Button>
            </Form>
          </Modal.Body>
        ) : (
          <div className="centered">
            <LoadingSpinner />
          </div>
        )}
      </Modal>
    </>
  )
}

export default EditModal
