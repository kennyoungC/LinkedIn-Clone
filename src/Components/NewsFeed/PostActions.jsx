import React, { useState } from "react"

const PostActions = () => {
  const [isLiked, setIsLiked] = useState(false)

  const handleLike = () => {
    setIsLiked((prev) => !prev)
  }
  return (
    <ul className="list-unstyled d-flex align-items-center justify-content-between p-1">
      <li onClick={handleLike} className={isLiked ? "text-primary" : ""}>
        <span className="me-1">
          <i
            className={`${"bi bi-hand-thumbs-up"}${isLiked ? "-fill" : ""}`}
          ></i>
        </span>{" "}
        {isLiked ? "Liked" : "Like"}
      </li>
      <li>
        <span className=" me-1">
          <i className="bi bi-chat-dots"></i>
        </span>{" "}
        Comment
      </li>
      <li>
        <span className=" me-1">
          <i className="bi bi-arrow-90deg-right"></i>
        </span>{" "}
        Share
      </li>
      <li>
        <span className="me-1">
          <i className="bi bi-send-fill"></i>
        </span>{" "}
        Send
      </li>
    </ul>
  )
}

export default PostActions
