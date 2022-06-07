import React from "react"
import { Card } from "react-bootstrap"

const FeedsRecent = () => {
  return (
    <div className="sticky-top">
      <Card className="p-3 mt-2 ">
        <h6> Recent</h6>
        <div className="d-flex gap-1  ">
          <span>
            <i className="bi bi-calendar"></i>
          </span>
          <p className="text-muted">Information Session f...</p>
        </div>
        <ul className=" list-unstyled d-flex flex-column gap-3">
          <li>
            <a className="fw-bold text-decoration-none" href="#">
              Groups
            </a>
          </li>
          <li>
            <a className="fw-bold text-decoration-none" href="#">
              Groups
            </a>
          </li>
          <li>
            <a className="fw-bold text-decoration-none" href="#">
              Followed Hashtags
            </a>
          </li>
        </ul>
      </Card>
      <Card className="text-center fw-bold p-3 ">
        <p className="mb-0 text-muted">Discover more</p>
      </Card>
    </div>
  )
}

export default FeedsRecent
