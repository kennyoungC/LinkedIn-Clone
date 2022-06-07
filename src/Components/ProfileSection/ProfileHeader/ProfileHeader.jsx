import React, { useEffect, useState } from "react"
import { Row, Col, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { setId } from "../../../store"
import EditProfileModal from "./EditProfileModal"
import ProfileCarousel from "./ProfileCarousel"
import styles from "./ProfileHeader.module.css"

const ProfileHeader = (props) => {
  const dispatch = useDispatch()
  const id = useSelector((state) => state.user.id)
  console.log("redux id", id)
  const profile = props.profile
  useEffect(() => {
    dispatch(setId(profile.id))
  }, [id, dispatch, profile.id])
  let isUser = false
  if (String(profile.id) === id) {
    isUser = true
  }

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div className="card rounded-3 position-relative mb-2">
      <img
        src="https://via.placeholder.com/22"
        className="card-img-top"
        alt="..."
        style={{ height: "185px", objectFit: "cover" }}
      />
      {isUser && (
        <span className={`${styles.camera} text-primary position-absolute p-2`}>
          <i className="bi bi-camera-fill"></i>
        </span>
      )}
      <div className="card-body position relative">
        <span className={`${styles["profile-pic"]} position-absolute`}>
          <img
            src={profile.image}
            className="card-img-top rounded-circle img-thumbnail"
            alt="..."
            style={{ height: "150px", width: "150px", objectFit: "cover" }}
          />
        </span>
        {show && <EditProfileModal show={show} onClose={handleClose} />}
        {isUser && (
          <button
            onClick={handleShow}
            className="border-0 bg-transparent float-end"
          >
            <i className="bi bi-pen"></i>
          </button>
        )}
        <div className="d-flex justify-content-between align-items-center mt-4">
          <div>
            <h5 className="card-title text-uppercase">
              {profile.name} {profile.surname}
            </h5>
          </div>
          {/* <div className="d-flex gap-2 align-items-center ">
            <img src="https://via.placeholder.com/30" alt="" />
             <p className="mb-0">Vytauto Magnus University</p> 
          </div>*/}
        </div>
        <Row>
          <Col md={7}>
            <p className="card-text lead">{profile.bio}</p>
            <p className="text-muted text-capitalize">{profile.area}</p>
            <p>
              <a className="text-decoration-none" href="#">
                Contact info
              </a>
            </p>
            <p>
              <a className="text-decoration-none" href="#">
                51 Connections
              </a>
            </p>
            <div className="d-flex gap-2">
              {" "}
              <Button className="rounded-pill py-1">Open to</Button>
              <Button className="rounded-pill py-1 bg-transparent btn-outline-primary text-primary">
                Add profile section
              </Button>
              <Button className="rounded-pill py-1 bg-transparent btn-outline-secondary text-secondary">
                More
              </Button>
            </div>
          </Col>
        </Row>
        <div className="my-3 ">
          <ProfileCarousel />
        </div>
      </div>
    </div>
  )
}

export default ProfileHeader
