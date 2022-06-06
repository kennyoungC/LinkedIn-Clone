import React, { useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"

const PostModal = (props) => {
  const [postInput, setPostInput] = useState("")

  const newPostHandler = async (e) => {
    e.prventDefault()
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        {
          method: "POST",
          body: JSON.stringify(postInput),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mjk1MDkxNmJmZTkyYzAwMTVlY2E5ZjAiLCJpYXQiOjE2NTM5MzQzNTgsImV4cCI6MTY1NTE0Mzk1OH0.VaDp06IDD3hAoXF2L3NJHR2aBc8cxxJNoPeBAyIB-lc",
          },
        }
      )
      if (response.status === 200) {
        props.onHide()
        console.log("Post created")
      } else {
        throw new Error("Something went wrong")
      }
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
        <Modal.Body>
          <div className="d-flex align-items-start gap-2 my-1">
            <img
              className="rounded-circle"
              src="https://via.placeholder.com/48x48"
              alt=""
              style={{ width: "48px", height: "48px" }}
            />
            <div>
              <div className="d-flex flex-column gap-1 mb-1">
                <p className="mb-0">Mindaugas Mozuras &middot;</p>
              </div>
              <Button className="rounded-pill py-0 bg-transparent btn-outline-secondary text-secondary">
                Anyone
              </Button>
            </div>
          </div>
          <Form onSubmit={newPostHandler}>
            <Form.Group
              className="my-2"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                value={postInput ?? ""}
                onChange={(e) => setPostInput(e.target.value)}
                placeholder="What do you want to talk bout?"
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
              disabled={postInput.length === 0}
              className="float-end px-3 py-0 rounded-pill"
              variant={postInput.length === 0 ? "secondary" : "primary"}
            >
              Post
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default PostModal
