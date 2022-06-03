import { Col, Container, Row } from "react-bootstrap"
import AsideFirstRow from "../Components/UI/Profile page/AsideFirstRow"
import EditExperience from "../Components/UI/Profile page/EditExperience"
import ExperienceItem from "../Components/UI/Profile page/ExperienceItem"

const EditExperiencePage = () => {
  return (
    <Container>
      <Row className="mt-3">
        <Col md={9}>
          <EditExperience />
        </Col>
        <Col md={3}>
          <AsideFirstRow />
        </Col>
      </Row>
    </Container>
  )
}

export default EditExperiencePage
