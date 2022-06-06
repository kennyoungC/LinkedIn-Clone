import React, { useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"

const PostModal = (props) => {
  const [postInput, setPostInput] = useState("")
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
              <i class="bi bi-image"></i>
              <i class="bi bi-file-play-fill"></i>
              <i class="bi bi-sticky-fill"></i>
              <i class="bi bi-briefcase-fill"></i>
              <i class="bi bi-bar-chart-line-fill"></i>
              <i class="bi bi-three-dots"></i>
            </span>
            <Button
              disabled={postInput.length === 0}
              className="float-end px-3 py-0 rounded-pill"
              variant={postInput.length === 0 ? "secondary" : "primary"}
              onClick={props.onHide}
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
