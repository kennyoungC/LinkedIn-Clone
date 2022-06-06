import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import AddToFeed from "../Components/NewsFeed/AddToFeed"
import Feeds from "../Components/NewsFeed/Feeds"
import FeedsProfile from "../Components/NewsFeed/FeedsProfile"
import FeedsRecent from "../Components/NewsFeed/FeedsRecent"
import PostNewFeed from "../Components/NewsFeed/PostNewFeed"
import WhoIsHiring from "../Components/NewsFeed/WhoIsHiring"

const NewsFeed = () => {
  return (
    <Container>
      <Row className="my-4">
        <Col md={3}>
          <FeedsProfile />

          <FeedsRecent />
        </Col>
        <Col md={6}>
          <PostNewFeed />
          <hr />
          <Feeds />
          <Feeds />
          <Feeds />
          <Feeds />
          <Feeds />
          <Feeds />
          <Feeds />
          <Feeds />
        </Col>
        <Col md={3}>
          <AddToFeed />
          <WhoIsHiring />
        </Col>
      </Row>
    </Container>
  )
}

export default NewsFeed
