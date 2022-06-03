import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import useHttp from "../../../hooks/use-http"
import { addExperience, showEditing } from "../../../store"
import LoadingSpinner from "../Spinner/LoadingSpinner"
import EditExperienceModal from "./EditExperienceModal"
import ExperienceItem from "./ExperienceItem"

const Experience = ({ experienceId }) => {
  const experience = useSelector((state) => state.experience.experience)
  const { isEditing: isLoading, sendRequest: fetchExperience } = useHttp()
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const params = useParams()
  const { profileId } = params
  let id
  if (!profileId) {
    id = experienceId
  }
  if (profileId) {
    id = profileId
  }

  const url = `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`

  useEffect(() => {
    const setData = (data) => {
      dispatch(addExperience(data))
      dispatch(showEditing(false))
    }
    fetchExperience(
      {
        url,
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mjk1MDkxNmJmZTkyYzAwMTVlY2E5ZjAiLCJpYXQiOjE2NTM5MzQzNTgsImV4cCI6MTY1NTE0Mzk1OH0.VaDp06IDD3hAoXF2L3NJHR2aBc8cxxJNoPeBAyIB-lc",
        },
      },
      setData
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, fetchExperience])

  let experienceContent
  if (experience.length > 0) {
    experienceContent = experience.map((experience) => (
      <ExperienceItem experience={experience} key={experience._id} />
    ))
  }
  if (experience.length === 0) {
    experienceContent = <div>No experience</div>
  }

  return (
    <div className="card mb-2 p-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="mb-0">Experience</h5>
        {!profileId && (
          <div>
            <Link to={`/edit-experience/${id}`}>
              <button className="border-0 bg-transparent fs-5 float-end">
                <i className="bi bi-pencil"></i>
              </button>
            </Link>
            {show && (
              <EditExperienceModal
                experienceId={id}
                show={show}
                onClose={handleClose}
              />
            )}
            <button
              onClick={handleShow}
              className="border-0 bg-transparent fs-5 float-end"
            >
              <i className="bi bi-plus-lg"></i>
            </button>
          </div>
        )}
      </div>
      {!isLoading && experienceContent}
      {isLoading && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      {/* <ExperienceItem /> */}
    </div>
  )
}

export default Experience
