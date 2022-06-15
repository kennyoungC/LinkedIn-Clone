import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import useHttp from "../../../hooks/use-http"
import { getItem, hideAlert, showAlert, showEditing } from "../../../store"
import EditExperienceModal from "./EditExperienceModal"
import { useNavigate } from "react-router-dom"
import ExperienceItem from "./ExperienceItem"

const EditExperience = () => {
  const navigate = useNavigate()
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const experience = useSelector((state) => state.experience.experience)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getItem())
    dispatch(showEditing(true))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const goBackHandler = () => {
    navigate(-1, { replace: true })
  }

  return (
    <div className="card mb-2 p-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex align-items-center gap-2 mb-2">
          <button
            onClick={goBackHandler}
            className="border-0 bg-transparent fs-5 float-end"
          >
            <i className="bi bi-arrow-left"></i>
          </button>{" "}
          <h5 className="mb-0">Experience</h5>
        </div>
        {show && <EditExperienceModal show={show} onClose={handleClose} />}
        <div>
          <button
            onClick={handleShow}
            className="border-0 bg-transparent fs-5 float-end"
          >
            <i className="bi bi-plus-lg"></i>
          </button>
        </div>
      </div>
      {experience.map((experience) => (
        <ExperienceItem key={experience._id} experience={experience} />
      ))}
    </div>
  )
}

export default EditExperience
