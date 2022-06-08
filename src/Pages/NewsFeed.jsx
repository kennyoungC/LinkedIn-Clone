import React, { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import AddToFeed from "../Components/NewsFeed/AddToFeed"
import Feeds from "../Components/NewsFeed/Feeds"
import FeedsProfile from "../Components/NewsFeed/FeedsProfile"
import FeedsRecent from "../Components/NewsFeed/FeedsRecent"
import PostNewFeed from "../Components/NewsFeed/PostNewFeed"
import WhoIsHiring from "../Components/NewsFeed/WhoIsHiring"
import LoadingSpinner from "../Components/UI/Spinner/LoadingSpinner"
import useHttp from "../hooks/use-http"

const NewsFeed = () => {
  const [posts, setPosts] = useState([])
  const [profile, setProfile] = useState({})
  const { isEditing: isLoading, sendRequest } = useHttp()
  // const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    const getData = (data) => {
      const filterOutNull = data.filter((data) => data.user !== null)
      const miniPost = filterOutNull.reverse().slice(0, 20)
      setPosts(miniPost)
    }

    sendRequest(
      {
        url: "https://striveschool-api.herokuapp.com/api/posts/",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mjk1MDkxNmJmZTkyYzAwMTVlY2E5ZjAiLCJpYXQiOjE2NTM5MzQzNTgsImV4cCI6MTY1NTE0Mzk1OH0.VaDp06IDD3hAoXF2L3NJHR2aBc8cxxJNoPeBAyIB-lc",
        },
      },
      getData
    )
  }, [sendRequest])

  const postCreated = (newPost) => {
    setPosts([newPost, ...posts])
  }

  useEffect(() => {
    // fetchNewsFeed()
    const getData = (data) => {
      const newData = {
        name: data.name + " " + data.surname,
        image: data.image,
        id: data._id,
        bio: data.bio,
      }
      setProfile(newData)
    }

    sendRequest(
      {
        url: "https://striveschool-api.herokuapp.com/api/profile/me",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mjk1MDkxNmJmZTkyYzAwMTVlY2E5ZjAiLCJpYXQiOjE2NTM5MzQzNTgsImV4cCI6MTY1NTE0Mzk1OH0.VaDp06IDD3hAoXF2L3NJHR2aBc8cxxJNoPeBAyIB-lc",
        },
      },
      getData
    )
  }, [sendRequest])

  const FeedsWrapper = ({ posts }) => {
    return posts.map((post) => (
      <Feeds profileDetails={profile} key={post._id} posts={post} />
    ))
  }

  return (
    <Container>
      <Row className="my-4">
        <Col md={3}>
          <FeedsProfile profileDetails={profile} />

          <FeedsRecent />
        </Col>
        <Col md={6}>
          <PostNewFeed profileDetails={profile} onPostCreated={postCreated} />
          <hr />
          {!isLoading && <FeedsWrapper posts={posts} />}
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
