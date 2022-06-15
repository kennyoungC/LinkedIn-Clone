import React, { useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import useHttp from "../../hooks/use-http"
import { hideAlert, setPosts, showAlert } from "../../store"
import { BEARER_TOKEN } from "../../store/BearerToken"
import LoadingSpinner from "../UI/Spinner/LoadingSpinner"
import FeedImgModal from "./FeedImgModal"

const EditModal = (props) => {
  const posts = useSelector((state) => state.posts.posts)
  const [show, setShow] = useState(false)
  const [img, setImg] = useState("")

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const dispatch = useDispatch()
  const { text } = props.postDetail
  const [postInput, setPostInput] = useState(text)
  console.log(props.postDetail)
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
            Authorization: BEARER_TOKEN,
          },
        },
        (data) => {
          // console.log(data)

          dispatch(
            showAlert({ message: "Post Successfully Updated", type: "success" })
          )
          props.onHide()
          setTimeout(() => {
            dispatch(hideAlert())
            window.location.reload()
          }, 1000)
        }
      )
    } catch (error) {
      console.log(error)
    }
  }
  const getpreviewImg = (img) => {
    setImg(img)
  }

  return (
    <>
      <Modal show={props.show} onHide={props.onHide} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Edit post</Modal.Title>
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
                  value={postInput ?? ""}
                  onChange={(e) => setPostInput(e.target.value)}
                  placeholder="What do you want to talk about?"
                  className="border-0"
                  as="textarea"
                  rows={4}
                />
              </Form.Group>
              {show && (
                <FeedImgModal
                  onGetImg={getpreviewImg}
                  postId={props.postDetail._id}
                  handleClose={handleClose}
                  show={show}
                />
              )}
              <div className="text-center my-2">
                <img src={img ?? ""} style={{ width: "290px" }} alt="" />
              </div>
              <span className="float-start d-flex gap-3">
                <span onClick={handleShow} className="float-start d-flex gap-3">
                  <span className="text-primary" style={{ cursor: "pointer" }}>
                    <i className="bi bi-image"></i>
                  </span>
                </span>
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
