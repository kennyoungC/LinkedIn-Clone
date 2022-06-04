import { Col, Container, Row } from "react-bootstrap"
import AsideFirstRow from "../Components/ProfileSection/Aside/AsideFirstRow"
import EditExperience from "../Components/ProfileSection/ProfileExperience/EditExperience"
import ExperienceItem from "../Components/ProfileSection/ProfileExperience/ExperienceItem"

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
