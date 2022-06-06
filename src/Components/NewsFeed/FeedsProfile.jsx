import React from "react"
import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import styles from "./FeedsProfile.module.css"
const FeedsProfile = () => {
  return (
    <div className={styles.FeedsProfile}>
      <Card>
        {" "}
        <Card.Img variant="top" src="https://via.placeholder.com/150x60" />
        <Card.Body className=" text-center border-bottom position-relative">
          <span className={styles["profile-img"]}>
            <img
              className="rounded-circle img-thumbnail "
              src="https://via.placeholder.com/75"
              alt=""
            />
          </span>
          <Link to={"/profile"}>
            <Card.Title className="text-uppercase mt-5">Kenneth obi</Card.Title>
          </Link>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
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
            <i class="bi bi-bookmark-fill"></i>
          </span>
          <p className="fw-bold mb-0">My items</p>
        </div>
      </Card>
    </div>
  )
}

export default FeedsProfile
