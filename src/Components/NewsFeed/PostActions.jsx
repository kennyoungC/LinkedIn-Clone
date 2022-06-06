import React from "react"

const PostActions = () => {
  return (
    <ul className="list-unstyled d-flex align-items-center justify-content-between p-1">
      <li>
        <span className=" me-1">
          <i class="bi bi-hand-thumbs-up"></i>
        </span>{" "}
        Like
      </li>
      <li>
        <span className=" me-1">
          <i class="bi bi-chat-dots"></i>
        </span>{" "}
        Comment
      </li>
      <li>
        <span className=" me-1">
          <i class="bi bi-arrow-90deg-right"></i>
        </span>{" "}
        Share
      </li>
      <li>
        <span className="me-1">
          <i class="bi bi-send-fill"></i>
        </span>{" "}
        Send
      </li>
    </ul>
  )
}

export default PostActions
