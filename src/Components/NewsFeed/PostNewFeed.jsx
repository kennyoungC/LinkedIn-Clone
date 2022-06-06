import React, { useState } from "react"
import { Link } from "react-router-dom"
import PostModal from "./PostModal"

const PostNewFeed = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div className="card p-3">
      <div className="d-flex align-items center gap-2 mb-3">
        <Link to={"/profile"}>
          <img
            className="rounded-circle"
            src="https://via.placeholder.com/48x48"
            alt=""
            style={{ width: "48px", height: "48px" }}
          />
        </Link>
        {show && <PostModal show={handleShow} onHide={handleClose} />}
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
            <i class="bi bi-image"></i>
          </span>{" "}
          Photo
        </li>
        <li>
          <span className="text-success me-1">
            <i class="bi bi-file-play-fill"></i>
          </span>{" "}
          Video
        </li>
        <li>
          <span className="text-primary me-1">
            <i class="bi bi-calendar4-event"></i>
          </span>{" "}
          Event
        </li>
        <li>
          <span className="text-danger me-1">
            <i class="bi bi-pencil-square"></i>
          </span>{" "}
          Write article
        </li>
      </ul>
    </div>
  )
}

export default PostNewFeed
