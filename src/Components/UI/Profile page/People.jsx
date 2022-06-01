import { useEffect, useState } from "react"
import PeopleItem from "./PeopleItem"

const People = ({ title }) => {
  const [people, setPeople] = useState([])
  const [showMore, setShowMore] = useState(5)
  const [isShowing, setIsShowing] = useState(true)

  useEffect(() => {
    fetchProfiles()
  }, [])

  const fetchProfiles = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mjk1MDkxNmJmZTkyYzAwMTVlY2E5ZjAiLCJpYXQiOjE2NTM5MzQzNTgsImV4cCI6MTY1NTE0Mzk1OH0.VaDp06IDD3hAoXF2L3NJHR2aBc8cxxJNoPeBAyIB-lc",
          },
        }
      )
      const data = await response.json()
      let loadedProfile = []
      for (const keys in data) {
        loadedProfile.push({
          id: data[keys]._id,
          name: data[keys].name,
          image: data[keys].image,
          bio: data[keys].bio,
          title: data[keys].title,
        })
      }
      setPeople(loadedProfile)
    } catch (error) {
      console.log(error)
    }
  }
  const showMoreHandler = () => {
    // setShowMore(showMore + 5)
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
      {people.slice(0, showMore).map((person) => (
        <PeopleItem key={person.id} person={person} />
      ))}
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
