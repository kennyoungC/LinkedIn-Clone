import React, { useEffect, useState } from "react"
import { Form, Modal } from "react-bootstrap"
import useHttp from "../../hooks/use-http"

const EditSpecificExperienceForm = (props) => {
  const { isEditing, sendRequest } = useHttp()
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
      let loadedExperience = {
        role: experienceData.role,
        company: experienceData.company,
        area: experienceData.area,
        startDate: experienceData.startDate,
        endDate: experienceData.endDate,
        description: experienceData.description,
      }

      setExperience({
        ...loadedExperience,
      })
    }

    sendRequest(
      {
        url: `https://striveschool-api.herokuapp.com/api/profile/${props.userId}/experiences/${props.experienceId}`,

        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mjk1MDkxNmJmZTkyYzAwMTVlY2E5ZjAiLCJpYXQiOjE2NTM5MzQzNTgsImV4cCI6MTY1NTE0Mzk1OH0.VaDp06IDD3hAoXF2L3NJHR2aBc8cxxJNoPeBAyIB-lc",
        },
      },
      transformedExperience
    )
  }, [sendRequest, props.experienceId, props.userId])

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
          value={experience.company}
          onChange={(e) => inputHandler(e, "company")}
          placeholder="Microsoft"
          type="text"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicLocation">
        <Form.Label>Location*</Form.Label>
        <Form.Control
          onChange={(e) => inputHandler(e, "area")}
          value={experience.area}
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
          value={experience.startDate}
          type="date"
        />
      </Form.Group>
      <Form.Group className="my-3" controlId="formBasicEndDate">
        <Form.Label className={isChecked ? "text-muted" : ""}>
          End date*
        </Form.Label>
        <Form.Control
          onChange={(e) => inputHandler(e, "endDate")}
          value={experience.endDate}
          type="date"
          disabled={isChecked}
        />
      </Form.Group>
      <Form.Group className="my-3" controlId="formBasicIndustry">
        <Form.Label>Industry*</Form.Label>
        <Form.Control
          onChange={(e) => inputHandler(e, "role")}
          value={experience.role}
          type="text"
          required
          placeholder="Software development, IT, etc."
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description*</Form.Label>
        <Form.Control
          onChange={(e) => inputHandler(e, "description")}
          value={experience.description}
          as="textarea"
          rows={3}
          required
        />
      </Form.Group>

      <Modal.Footer>
        <button className="btn btn-primary">Save</button>
      </Modal.Footer>
    </Form>
  )
}

export default EditSpecificExperienceForm
