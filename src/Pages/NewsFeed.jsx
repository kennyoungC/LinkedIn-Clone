import React, { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import AddToFeed from "../Components/NewsFeed/AddToFeed"
import Feeds from "../Components/NewsFeed/Feeds"
import FeedsProfile from "../Components/NewsFeed/FeedsProfile"
import FeedsRecent from "../Components/NewsFeed/FeedsRecent"
import PostNewFeed from "../Components/NewsFeed/PostNewFeed"
import WhoIsHiring from "../Components/NewsFeed/WhoIsHiring"
import LoadingSpinner from "../Components/UI/Spinner/LoadingSpinner"

const NewsFeed = () => {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    fetchNewsFeed()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const fetchNewsFeed = async () => {
    try {
      setIsLoading(true)
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mjk1MDkxNmJmZTkyYzAwMTVlY2E5ZjAiLCJpYXQiOjE2NTM5MzQzNTgsImV4cCI6MTY1NTE0Mzk1OH0.VaDp06IDD3hAoXF2L3NJHR2aBc8cxxJNoPeBAyIB-lc",
          },
        }
      )
      const data = await response.json()
      setIsLoading(false)
      setPosts(data)
    } catch (error) {
      console.log(error)
    }
  }

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
          {!isLoading &&
            posts
              .slice(0, 5)
              .map((post) => <Feeds key={post._id} posts={post} />)}
          {isLoading && (
            <div className="centered ">
              <LoadingSpinner />
            </div>
          )}
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
