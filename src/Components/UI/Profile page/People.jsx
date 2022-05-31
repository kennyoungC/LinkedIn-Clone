import PeopleItem from "./PeopleItem"

const People = ({ title }) => {
  return (
    <div className="card p-2 mb-2">
      <h6>{title}</h6>
      <PeopleItem />
      <PeopleItem />
      <PeopleItem />
      <button className="border-0 border-top mt-2 py-2 bg-transparent">
        Show more
        <span>
          <i class="bi bi-chevron-down"></i>
        </span>
      </button>
    </div>
  )
}

export default People
