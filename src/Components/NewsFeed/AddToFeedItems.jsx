import React from "react"
import { Button } from "react-bootstrap"

const AddToFeedItems = () => {
  return (
    <div className="d-flex align-items-start gap-2 my-3">
      <img
        className="rounded-circle"
        src="https://via.placeholder.com/48x48"
        alt=""
        style={{ width: "48px", height: "48px" }}
      />
      <div>
        <div className="d-flex flex-column gap-1 mb-1">
          <p className="mb-0">Mindaugas Mozuras &middot;</p>
          <span className="text-muted">hdhhdh</span>
        </div>
        <Button className="rounded-pill py-0 bg-transparent btn-outline-secondary text-secondary">
          + Follow
        </Button>
      </div>
    </div>
  )
}

export default AddToFeedItems
