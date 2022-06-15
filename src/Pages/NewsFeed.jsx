import React, { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import AddToFeed from "../Components/NewsFeed/AddToFeed"
import Feeds from "../Components/NewsFeed/Feeds"
import FeedsProfile from "../Components/NewsFeed/FeedsProfile"
import FeedsRecent from "../Components/NewsFeed/FeedsRecent"
import PostNewFeed from "../Components/NewsFeed/PostNewFeed"
import WhoIsHiring from "../Components/NewsFeed/WhoIsHiring"
import LoadingSpinner from "../Components/UI/Spinner/LoadingSpinner"
import useHttp from "../hooks/use-http"
import { setPosts } from "../store"
import { BEARER_TOKEN } from "../store/BearerToken"

const NewsFeed = () => {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.posts.posts)
  // const profile = useSelector((state) => state.profile.profile)

  const [profile, setProfile] = useState({})
  const { isEditing: isLoading, sendRequest } = useHttp()
  // const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    const getData = (data) => {
      const filterOutNull = data.filter((data) => data.user !== null)
      const miniPost = filterOutNull.reverse().slice(0, 20)

      dispatch(setPosts(miniPost))
    }

    sendRequest(
      {
        url: "https://striveschool-api.herokuapp.com/api/posts/",
        headers: {
          Authorization: BEARER_TOKEN,
        },
      },
      getData
    )
  }, [sendRequest])

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
          Authorization: BEARER_TOKEN,
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
          <PostNewFeed profileDetails={profile} />
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
