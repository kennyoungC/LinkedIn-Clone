import { useEffect, useState } from "react"
import useHttp from "../../hooks/use-http"
import EditModal from "./EditModal"
import styles from "./OptionListMenu.module.css"

import { useDispatch } from "react-redux"
import { hideAlert, showAlert } from "../../store"
import { BEARER_TOKEN } from "../../store/BearerToken"

const UserOptionListMenu = ({ postId, profile }) => {
  const dispatch = useDispatch()

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [postDetails, setPostDetails] = useState({})
  const { isEditing, sendRequest } = useHttp()
  useEffect(() => {
    sendRequest(
      {
        url: `https://striveschool-api.herokuapp.com/api/posts/${postId}`,
        headers: {
          Authorization: BEARER_TOKEN,
        },
      },
      (data) => {
        setPostDetails(data)
      }
    )
  }, [sendRequest, postId])

  const deletePostHandler = async () => {
    alert("Are you sure you want to delete this post?")
    const delPost = (data) => {
      console.log(data)

      dispatch(showAlert({ message: "Post Deleted", type: "danger" }))

      setTimeout(() => {
        dispatch(hideAlert())
        window.location.reload()
      }, 3000)
    }
    sendRequest(
      {
        url: `https://striveschool-api.herokuapp.com/api/posts/${postId}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: BEARER_TOKEN,
        },
      },
      delPost
    )
    setTimeout(() => {
      window.location.reload()
    }, 1000)
  }

  return (
    <ul className={styles.list}>
      <li>
        <div className="d-flex align-items-center gap-2">
          <span className="fs-5">
            <i className="bi bi-star"></i>
          </span>
          <span>
            <div className="d-flex flex-column">
              <p className="mb-0 ">Feature on top of profile</p>
              <span className="text-muted">Save for later</span>
            </div>
          </span>
        </div>
      </li>
      <li>
        <div className="d-flex align-items-center gap-2">
          <span className="fs-5">
            <i className="bi bi-bookmark"></i>
          </span>
          <span>
            <div className="d-flex flex-column">
              <p className="mb-0 ">Save</p>
              <span className="text-muted">Save for later</span>
            </div>
          </span>
        </div>
      </li>
      <li>
        <div className="d-flex align-items-center gap-2">
          <span className="fs-5">
            <i className="bi bi-link-45deg"></i>
          </span>
          <span>
            <div className="d-flex flex-column">
              <p className="mb-0 ">Copy link to post</p>
            </div>
          </span>
        </div>
      </li>
      {show && (
        <EditModal
          profile={profile}
          postDetail={postDetails}
          show={handleShow}
          onHide={handleClose}
        />
      )}
      <li
        onClick={() => {
          setShow(true)
        }}
      >
        <div className="d-flex align-items-center gap-2">
          <span className="fs-5">
            <i className="bi bi-pen"></i>
          </span>
          <span>
            <div className="d-flex flex-column">
              <p className="mb-0 "> Edit post</p>
            </div>
          </span>
        </div>
      </li>
      <li onClick={deletePostHandler}>
        <div className="d-flex align-items-center gap-2">
          <span className="fs-5">
            <i className="bi bi-trash-fill"></i>
          </span>
          <span>
            <div className="d-flex flex-column">
              <p className="mb-0 "> Delete post </p>
            </div>
          </span>
        </div>
      </li>
      <li>
        <div className="d-flex align-items-center gap-2">
          <span className="fs-5">
            <i className="bi bi-chat-text"></i>
          </span>
          <span>
            <div className="d-flex flex-column">
              <p className="mb-0 "> Who can comment on this post?</p>
            </div>
          </span>
        </div>
      </li>

      <li>
        <div className="d-flex align-items-center gap-2">
          <span className="fs-5">
            <i className="bi bi-flag-fill"></i>
          </span>
          <span>
            <div className="d-flex flex-column">
              <p className="mb-0 "> Who can see this post?</p>
              <span className="text-muted">
                Visible to anyone on and off LinkedIn
              </span>
            </div>
          </span>
        </div>
      </li>
    </ul>
  )
}

export default UserOptionListMenu
