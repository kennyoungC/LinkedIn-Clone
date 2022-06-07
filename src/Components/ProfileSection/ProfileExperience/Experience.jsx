import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { addExperience, showEditing } from "../../../store"
import LoadingSpinner from "../../UI/Spinner/LoadingSpinner"
import EditExperienceModal from "./EditExperienceModal"
import ExperienceItem from "./ExperienceItem"

const Experience = ({ experienceId }) => {
  const experience = useSelector((state) => state.experience.experience)
  const [isLoading, setIsLoading] = useState(false)

  const dispatch = useDispatch()
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const params = useParams()
  const { profileId } = params

  let id = profileId ? profileId : experienceId
  // console.log(profileId)
  // console.log(experienceId)

  const url = `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`

  const fetchExp = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(url, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjliMjc2ZjYwOTUyNTAwMTUzZTc1NDEiLCJpYXQiOjE2NTQzMzUzNDQsImV4cCI6MTY1NTU0NDk0NH0.zh3wENBfsCIGTLqdRiTI94Fauch8Ttcg4eCIbZ16DnE",
        },
      })
      if (!response.ok) {
        throw new Error(response.statusText)
      }

      const data = await response.json()
      dispatch(addExperience(data))
      dispatch(showEditing(false))
      setIsLoading(false)
    } catch (error) {
      console.log(error.message)
      setIsLoading(false)
    }
  }
  useEffect(() => {
    id && fetchExp()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])
  // console.log(id)
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
            <Link to={`/edit-experience/${experienceId}`}>
              <button className="border-0 bg-transparent fs-5 float-end">
                <i className="bi bi-pencil"></i>
              </button>
            </Link>
            {show && (
              <EditExperienceModal
                experienceId={experienceId}
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
