import React, { useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"
import FeedImgModal from "./FeedImgModal"

const PostModal = (props) => {
  const [postInput, setPostInput] = useState("")

  const sendPostHandler = (e) => {
    e.preventDefault()
    props.onPost(postInput)
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
              src={props.profileDetails.image}
              alt=""
              style={{ width: "48px", height: "48px" }}
            />
            <div>
              <div className="d-flex flex-column gap-1 mb-1">
                <p className="mb-0">{props.profileDetails.name} </p>
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
                value={postInput ?? ""}
                onChange={(e) => setPostInput(e.target.value)}
                placeholder="What do you want to talk bout?"
                className="border-0"
                as="textarea"
                rows={4}
              />
            </Form.Group>

            <span className="float-start d-flex gap-3">
              <span className="text-primary" style={{ cursor: "pointer" }}>
                <i className="bi bi-image"></i>
              </span>
              <i className="bi bi-file-play-fill"></i>
              <i className="bi bi-sticky-fill"></i>
              <i className="bi bi-briefcase-fill"></i>
              <i className="bi bi-bar-chart-line-fill"></i>
              <i className="bi bi-three-dots"></i>
            </span>
            <Button
              onClick={sendPostHandler}
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
