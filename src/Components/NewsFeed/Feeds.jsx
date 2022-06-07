import React, { useEffect, useRef, useState } from "react"
import PostActions from "./PostActions"
import Moment from "moment"

import OptionListMenu from "./OptionListMenu"
import UserOptionListMenu from "./UserOptionListMenu"
const Feeds = ({ posts, profileDetails }) => {
  // console.log("posts", posts)
  // console.log("profile details", profileDetails)
  const [showContent, setShowContent] = useState(false)
  const profileid = profileDetails.id
  const postId = posts._id

  const optionContent =
    profileid === posts.user._id ? (
      <UserOptionListMenu profile={profileDetails} postId={postId} />
    ) : (
      <OptionListMenu
        postName={posts.user.name}
        postSurname={posts.user.surname}
      />
    )
  const timeago = Moment(posts.createdAt).fromNow()
  return (
    <div className="card my-2 px-3 py-2">
      <div className="d-flex align-items-start gap-2 my-3">
        <img
          className="rounded-circle"
          src={posts.user.image}
          alt=""
          style={{ width: "48px", height: "48px" }}
        />
        <div>
          <div className="d-flex flex-column gap-1 mb-1">
            <p className="mb-0 fw-bold">
              {posts.user.name} {posts.user.surname}
            </p>
            <span className="fs-6 text-muted">{posts.user.title}</span>
            <span>
              {timeago} &middot; <i className="bi bi-globe"></i>
            </span>
          </div>
        </div>
        <span className=" ms-auto position-relative">
          <span
            onClick={() => setShowContent((prev) => !prev)}
            style={{ cursor: "pointer" }}
          >
            {" "}
            <i className="bi bi-three-dots"></i>
          </span>

          {showContent && optionContent}
        </span>
      </div>
      <p className="mb-0">{posts.text}</p>
      <hr />
      <PostActions />
    </div>
  )
}

export default Feeds
