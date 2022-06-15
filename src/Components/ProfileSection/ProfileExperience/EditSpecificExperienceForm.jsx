import React, { useEffect, useState } from "react"
import { Form, Modal, Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import useHttp from "../../../hooks/use-http"
import { hideAlert, showAlert } from "../../../store"
import { BEARER_TOKEN } from "../../../store/BearerToken"

const EditSpecificExperienceForm = (props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isEditing, sendRequest } = useHttp()
  const [isDeleting, setIsDeleting] = useState(false)
  const [isDeleted, setIsDeleted] = useState(false)
  const [experience, setExperience] = useState({
    role: "",
    company: "",
    area: "",
    startDate: "",
    endDate: "",
    description: "",
  })
  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    const transformedExperience = (experienceData) => {
      setExperience({
        role: experienceData.role,
        company: experienceData.company,
        area: experienceData.area,
        startDate: experienceData.startDate,
        endDate: experienceData.endDate,
        description: experienceData.description,
      })
    }

    sendRequest(
      {
        url: `https://striveschool-api.herokuapp.com/api/profile/${props.userId}/experiences/${props.experienceId}`,

        headers: {
          Authorization: BEARER_TOKEN,
        },
      },
      transformedExperience
    )
  }, [sendRequest, props.experienceId, props.userId])

  const deleteHandler = async () => {
    try {
      setIsDeleting(true)
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${props.userId}/experiences/${props.experienceId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: BEARER_TOKEN,
          },
        }
      )
      if (!response.ok) {
        throw new Error("Unable to delete experience")
      }
      if (response.ok) {
        dispatch(
          showAlert({
            message: "Experience was successfully DELETED",
            type: "danger",
          })
        )
        setTimeout(() => {
          dispatch(hideAlert())
        }, 3000)
        setTimeout(() => {
          navigate("/profile")
        }, 3000)
        setIsDeleting(false)
        setIsDeleted(true)
      }
    } catch (error) {
      console.log(error.message)
      setIsDeleting(false)
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(experience)
    props.onSubmit(experience)
  }

  const inputHandler = (e, value) => {
    setExperience({ ...experience, [value]: e.target.value })
  }
  return (
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Title*</Form.Label>
        <Form.Control placeholder="Retail Sale Manager" type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicLastName">
        <Form.Label>Employment type</Form.Label>
        <Form.Select aria-label="Default select example">
          <option>Please select</option>
          <option value="part-time">Part-time</option>
          <option value="full-time">Full-time</option>
          <option value="self-employed">Self-employed</option>
          <option value="freelancer">Freelancer</option>
          <option value="contract">Contract</option>
          <option value="internship">Internship</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCompanyName">
        <Form.Label>Company name*</Form.Label>
        <Form.Control
          value={experience.company ?? ""}
          onChange={(e) => inputHandler(e, "company")}
          placeholder="Microsoft"
          type="text"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicLocation">
        <Form.Label>Location*</Form.Label>
        <Form.Control
          onChange={(e) => inputHandler(e, "area")}
          value={experience.area ?? ""}
          type="text"
          required
          placeholder="Ex. London, United Kingdom"
        />
      </Form.Group>
      <div className="mb-2">
        <Form.Check
          inline
          label="I currently work here"
          name="group1"
          type={"checkbox"}
          id="checkbox1"
          onChange={() => setIsChecked(!isChecked)}
        />
      </div>

      <Form.Group className="my-3" controlId="formBasicStartDate">
        <Form.Label>Start date*</Form.Label>
        <Form.Control
          onChange={(e) => inputHandler(e, "startDate")}
          value={experience.startDate ?? ""}
          type="date"
        />
      </Form.Group>
      <Form.Group className="my-3" controlId="formBasicEndDate">
        <Form.Label className={isChecked ? "text-muted" : ""}>
          End date*
        </Form.Label>
        <Form.Control
          onChange={(e) => inputHandler(e, "endDate")}
          value={experience.endDate ?? ""}
          type="date"
          disabled={isChecked}
        />
      </Form.Group>
      <Form.Group className="my-3" controlId="formBasicIndustry">
        <Form.Label>Industry*</Form.Label>
        <Form.Control
          onChange={(e) => inputHandler(e, "role")}
          value={experience.role ?? ""}
          type="text"
          required
          placeholder="Software development, IT, etc."
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description*</Form.Label>
        <Form.Control
          onChange={(e) => inputHandler(e, "description")}
          value={experience.description ?? ""}
          as="textarea"
          rows={3}
          required
        />
      </Form.Group>

      <div className="d-flex justify-content-between align-items-center">
        {!isDeleting && !isDeleted && (
          <Button onClick={deleteHandler} variant="danger" type="button">
            Delete experience
          </Button>
        )}
        {isDeleting && (
          <Button
            onClick={deleteHandler}
            variant="danger"
            type="button"
            className="d-flex align-items-center gap-2"
          >
            <span>
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </span>
            <span>Deleting...</span>
          </Button>
        )}
        {isDeleted && (
          <Button onClick={deleteHandler} variant="danger" type="button">
            Deleted
          </Button>
        )}
        <Modal.Footer>
          <button className="btn btn-primary">Save</button>
        </Modal.Footer>
      </div>
    </Form>
  )
}

export default EditSpecificExperienceForm
