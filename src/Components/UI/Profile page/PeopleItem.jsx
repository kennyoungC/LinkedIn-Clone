import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const PeopleItem = ({ person }) => {
  return (
    <div className="d-flex align-items-start gap-2 mb-2">
      <img
        className="rounded-circle"
        src={person.image}
        alt=""
        style={{ width: "48px", height: "48px" }}
      />
      <div>
        <div className="d-flex flex-column gap-1 mb-1">
          <p className="mb-0">
            {person.name} &middot; <span className="text-muted">2nd</span>
          </p>
          <span className="text-muted">{person.title}</span>
        </div>
        <Button className="rounded-pill py-0 bg-transparent btn-outline-secondary text-secondary">
          Connect
        </Button>
      </div>
    </div>
  )
}

export default PeopleItem
