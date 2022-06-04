import React from "react"
import { Col, Container, Row } from "react-bootstrap"

const NewsFeed = () => {
  return (
    <Container>
      <Row>
        <Col md={9}>
          <h1>New Feed</h1>
        </Col>
        <Col md={3}>
          <p>new-feed side bar</p>
        </Col>
      </Row>
    </Container>
  )
}

export default NewsFeed
