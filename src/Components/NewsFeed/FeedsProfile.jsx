import React from "react"
import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import styles from "./FeedsProfile.module.css"
const FeedsProfile = ({ profileDetails }) => {
  return (
    <div className={styles.FeedsProfile}>
      <Card>
        {" "}
        <Card.Img
          variant="top"
          src="https://images.unsplash.com/photo-1654476728670-989c41eee300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          style={{ width: "100%", height: "80px", objectFit: "cover" }}
        />
        <Card.Body className=" text-center border-bottom position-relative">
          <span className={styles["profile-img"]}>
            <img
              style={{ width: "150px", height: "100px", objectFit: "cover" }}
              className="rounded-circle img-thumbnail "
              src={profileDetails.image}
              alt=""
            />
          </span>
          <Link to={"/profile"}>
            <Card.Title className="text-uppercase mt-5">
              {profileDetails.name}
            </Card.Title>
          </Link>
          <Card.Text>{profileDetails.bio}</Card.Text>
        </Card.Body>
      </Card>
      <Card className="p-3">
        <div className="d-flex justify-content-between mb-2">
          <span>
            <p className="text-muted mb-1">Connections</p>
            <p className="fw-bold mb-0">Grow your network</p>
          </span>
          <span>
            <a className="text-decoration-none" href="#">
              54
            </a>
          </span>
        </div>
        <div className="d-flex justify-content-between ">
          <p className="text-muted mb-1">Who's viewed your profile</p>

          <span>
            <a className="text-decoration-none" href="#">
              45
            </a>
          </span>
        </div>
      </Card>
      <Card className="p-3">
        <p className="text-muted mb-1">Access exclusive tools & insights</p>
        <div className="d-flex justify-content-between align-items-center">
          <img src="https://via.placeholder.com/20" alt="" />
          <p className="fw-bold mb-0">Try Premium for free</p>
        </div>
      </Card>
      <Card className={`${styles["border-radius-bottom"]} p-3`}>
        <div className="d-flex gap-2 align-items-center">
          <span>
            <i className="bi bi-bookmark-fill"></i>
          </span>
          <p className="fw-bold mb-0">My items</p>
        </div>
      </Card>
    </div>
  )
}

export default FeedsProfile
