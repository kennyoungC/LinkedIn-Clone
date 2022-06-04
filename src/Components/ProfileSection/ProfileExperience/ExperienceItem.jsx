import Moment from "moment"
import { useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import EditSpecificExperience from "./EditSpecificExperience"
import EditSpecificExperienceForm from "./EditSpecificExperienceForm"

const ExperienceItem = (props) => {
  const editIcon = useSelector((state) => state.experience.showEditing)
  const [show, setShow] = useState(false)
  // const params = useParams()
  // console.log(params)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const startDate = props.experience.startDate
  const start = Moment(startDate).format("MMM YYYY")

  const endDate = props.experience.endDate
  // console.log(endDate)

  let end, months, years
  if (endDate) {
    end = Moment(endDate).format("MMM YYYY")
    const hours = Math.floor(
      Math.abs(new Date(startDate) - new Date(endDate)) / 36e5
    )
    const diff = hours / 8760
    years = diff.toFixed(1).split(".")[0]
    months = +diff.toFixed(1).split(".")[1] + 2
  }

  if (endDate === null || endDate === undefined) {
    end = "Present"
    const hours = Math.floor(Math.abs(new Date(startDate) - new Date()) / 36e5)
    const diff = hours / 8760
    years = diff.toFixed(1).split(".")[0]
    months = +diff.toFixed(1).split(".")[1] + 2
  }
  return (
    <>
      <div className="d-flex justify-content-between align-items-start">
        <div className="d-flex gap-1 align-items-start mb-3 px-1">
          <img src="https://via.placeholder.com/48" alt="" />
          <div className="d-flex flex-column lh-sm">
            <h6 className="mb-0">{props.experience.role}</h6>
            <p className="mb-0">
              {props.experience.company} &middot; Part-time
            </p>
            <p className="mb-0">
              {start} - {end} &middot;
              <span className="ms-1">
                {`${
                  years > 0 ? years + `${+years > 1 ? " yrs" : " yr"} ` : ""
                }`}
                {`${months > 0 ? months + " mos" : ""}`}
              </span>
            </p>
            <p className="text-capitalize">{props.experience.area}</p>
          </div>
        </div>
        {show && (
          <EditSpecificExperience
            id={props.experience._id}
            onClose={handleClose}
            show={handleShow}
          />
        )}
        {editIcon && (
          <button
            onClick={handleShow}
            className="border-0 bg-transparent fs-5 float-end"
          >
            <i className="bi bi-pencil"></i>
          </button>
        )}
      </div>
      <hr />
    </>
  )
}

export default ExperienceItem
