import { useEffect, useState } from "react"
import useHttp from "../../../hooks/use-http"
import { BEARER_TOKEN } from "../../../store/BearerToken"
import LoadingSpinner from "../../UI/Spinner/LoadingSpinner"
import PeopleItem from "./PeopleItem"
import { setPeople } from "../../../store"
import { useDispatch, useSelector } from "react-redux"

const People = ({ title }) => {
  const people = useSelector((state) => state.peopleProfile.people)
  const dispatch = useDispatch()
  const [showMore, setShowMore] = useState(25)
  const [isShowing, setIsShowing] = useState(true)

  const { isEditing: isLoading, sendRequest } = useHttp()
  const url = "https://striveschool-api.herokuapp.com/api/profile/"

  useEffect(() => {
    const transformedData = (people) => {
      let loadedProfile = []
      for (const keys in people) {
        loadedProfile.push({
          id: people[keys]._id,
          name: people[keys].name,
          image: people[keys].image,
          bio: people[keys].bio,
          title: people[keys].title,
        })
      }
      dispatch(setPeople(loadedProfile))
    }

    sendRequest(
      {
        url,
        headers: {
          Authorization: BEARER_TOKEN,
        },
      },
      transformedData
    )
  }, [sendRequest])

  const showMoreHandler = () => {
    setShowMore((prevState) => prevState + 5)
    setIsShowing(false)
  }
  const showLessHandler = () => {
    setShowMore((prev) => prev - 5)
    setIsShowing(true)
  }
  return (
    <div className="card p-2 mb-2">
      <h6>{title}</h6>
      {!isLoading &&
        people
          .slice(20, showMore)
          .map((person) => <PeopleItem key={person.id} person={person} />)}
      {isLoading && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      {isShowing && (
        <button
          onClick={showMoreHandler}
          className="border-0 border-top mt-2 py-2 bg-transparent"
        >
          Show more
          <span>
            <i className="bi bi-chevron-down"></i>
          </span>
        </button>
      )}
      {!isShowing && (
        <button
          onClick={showLessHandler}
          className="border-0 border-top mt-2 py-2 bg-transparent"
        >
          Show less
          <span>
            <i className="bi bi-chevron-up"></i>
          </span>
        </button>
      )}
    </div>
  )
}

export default People
