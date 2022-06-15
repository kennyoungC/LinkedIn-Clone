import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import PostModal from "./PostModal"

import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { hideAlert, setPosts, showAlert } from "../../store"
import { BEARER_TOKEN } from "../../store/BearerToken"

const PostNewFeed = ({ profileDetails }) => {
  const posts = useSelector((state) => state.posts.posts)
  const profile = useSelector((state) => state.profile.profile)
  console.log("my profile", profile)
  // console.log(posts)
  const dispatch = useDispatch()
  // const navigate = useNavigate()
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])
  const newPostHandler = async (post) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          method: "POST",
          body: JSON.stringify({ text: post }),
          headers: {
            "Content-Type": "application/json",
            Authorization: BEARER_TOKEN,
          },
        }
      )
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      const data = await response.json()
      console.log(data)
      const newPost = [
        {
          user: profile,
          ...data,
        },
        ...posts,
      ]
      console.log("newpost array", newPost)
      dispatch(setPosts(newPost))
      dispatch(showAlert({ message: "New Post added", type: "success" }))
      setTimeout(() => {
        dispatch(hideAlert())
      }, 3000)
      handleClose()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="card p-3">
      <div className="d-flex align-items center gap-2 mb-3">
        <Link to={"/profile"}>
          <img
            className="rounded-circle"
            src={profileDetails.image}
            alt=""
            style={{ width: "48px", height: "48px" }}
          />
        </Link>
        {show && (
          <PostModal
            profileDetails={profileDetails}
            onPost={newPostHandler}
            show={handleShow}
            onHide={handleClose}
          />
        )}
        <input
          style={{ cursor: "pointer" }}
          onClick={handleShow}
          className="w-100 px-2 rounded-pill"
          type="text"
          placeholder="Share what you are learning these days"
        />
      </div>
      <ul className="list-unstyled d-flex align-items-center justify-content-between mb-0">
        <li>
          <span className="text-primary me-1">
            <i className="bi bi-image"></i>
          </span>{" "}
          Photo
        </li>
        <li>
          <span className="text-success me-1">
            <i className="bi bi-file-play-fill"></i>
          </span>{" "}
          Video
        </li>
        <li>
          <span className="text-primary me-1">
            <i className="bi bi-calendar4-event"></i>
          </span>{" "}
          Event
        </li>
        <li>
          <span className="text-danger me-1">
            <i className="bi bi-pencil-square"></i>
          </span>{" "}
          Write article
        </li>
      </ul>
    </div>
  )
}

export default PostNewFeed
