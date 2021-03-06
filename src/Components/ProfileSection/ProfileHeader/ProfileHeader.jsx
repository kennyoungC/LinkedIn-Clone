import React, { useState } from "react"
import { Row, Col, Button } from "react-bootstrap"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import EditProfileModal from "./EditProfileModal"
import ProfileCarousel from "./ProfileCarousel"
import styles from "./ProfileHeader.module.css"
import ProfilePicModal from "./ProfilePicModal"

const ProfileHeader = () => {
  const [showProfileModal, setShowProfileModal] = useState(false)
  const userProfile = useSelector((state) => state.profile.profile)
  const peopleProfile = useSelector(
    (state) => state.peopleProfile.peopleProfile
  )
  const params = useParams()

  const profile = params.profileId ? peopleProfile : userProfile
  let isUser = false
  if (!params.profileId) {
    isUser = true
  }

  const closeProfilePicHandler = () => setShowProfileModal(false)
  const showProfilePicHandler = () => setShowProfileModal(true)

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div className="card rounded-3 position-relative mb-2">
      {showProfileModal && (
        <ProfilePicModal
          profile={profile}
          handleClose={closeProfilePicHandler}
          show={showProfileModal}
        />
      )}
      <span>
        <img
          src="https://images.unsplash.com/photo-1654476728670-989c41eee300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          className="card-img-top"
          alt="..."
          style={{ height: "185px", objectFit: "cover" }}
        />
      </span>
      {isUser && (
        <span className={`${styles.camera} text-primary position-absolute p-2`}>
          <i className="bi bi-camera-fill"></i>
        </span>
      )}
      <div className="card-body position relative">
        {isUser && (
          <span className={`${styles["profile-pic"]} position-absolute`}>
            <img
              onClick={showProfilePicHandler}
              src={profile.image}
              className="card-img-top rounded-circle img-thumbnail"
              alt="..."
              style={{
                height: "150px",
                width: "150px",
                objectFit: "cover",
                cursor: "pointer",
              }}
            />
          </span>
        )}
        {!isUser && (
          <span className={`${styles["profile-pic"]} position-absolute`}>
            <img
              src={profile.image}
              className="card-img-top rounded-circle img-thumbnail"
              alt="..."
              style={{
                height: "150px",
                width: "150px",
                objectFit: "cover",
                cursor: "pointer",
              }}
            />
          </span>
        )}
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
