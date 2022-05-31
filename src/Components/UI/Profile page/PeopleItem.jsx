import React from "react"
import { Button } from "react-bootstrap"

const PeopleItem = () => {
  return (
    <div className="d-flex align-items-start gap-2 mb-2">
      <img
        className="rounded-circle"
        src="https://via.placeholder.com/48"
        alt=""
      />
      <div>
        <div className="d-flex flex-column gap-1 mb-1">
          <p className="mb-0">
            Matson Ho &middot; <span className="text-muted">2nd</span>
          </p>
          <span className="text-muted">junion MERN web Develper | ISTP</span>
        </div>
        <Button className="rounded-pill py-0 bg-transparent btn-outline-secondary text-secondary">
          Connect
        </Button>
      </div>
    </div>
  )
}

export default PeopleItem
