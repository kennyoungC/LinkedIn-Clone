import React from "react"
import styles from "./OptionListMenu.module.css"
const OptionListMenu = ({ postName, postSurname }) => {
  return (
    <ul className={styles.list}>
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
      <li>
        <div className="d-flex align-items-center gap-2">
          <span className="fs-5">
            <i className="bi bi-file-x-fill"></i>
          </span>
          <span>
            <div className="d-flex flex-column">
              <p className="mb-0 ">
                {" "}
                Unfollow {postName} {postSurname}
              </p>
              <span className="text-muted">
                Stay connected but stop seeing posts from {postName} in feed
              </span>
            </div>
          </span>
        </div>
      </li>
      <li>
        <div className="d-flex align-items-center gap-2">
          <span className="fs-5">
            <i className="bi bi-person-x-fill"></i>
          </span>
          <span>
            <div className="d-flex flex-column">
              <p className="mb-0 ">
                {" "}
                Remove connection with {postName} {postSurname}
              </p>
              <span className="text-muted">{postName} wont't be notified</span>
            </div>
          </span>
        </div>
      </li>
      <li>
        <div className="d-flex align-items-center gap-2">
          <span className="fs-5">
            <i className="bi bi-eye-slash-fill"></i>
          </span>
          <span>
            <div className="d-flex flex-column">
              <p className="mb-0 "> I don't want to see this</p>
              <span className="text-muted">
                Let us know why you don't want to see this post
              </span>
            </div>
          </span>
        </div>
      </li>
      <li>
        <div className="d-flex align-items-center gap-2">
          <span className="fs-5">
            <i className="bi bi-eye-fill"></i>
          </span>
          <span>
            <div className="d-flex flex-column">
              <p className="mb-0 "> Report this post</p>
              <span className="text-muted">
                This post is offensive or the account is hacked
              </span>
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

export default OptionListMenu
