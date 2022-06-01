import React from "react"
import AlsoViewed from "./People"
import PeopleYouMayKnow from "./People"
import Promoted from "./Promoted"

const Aside = () => {
  return (
    <>
      <div className="card mb-2">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-start">
            <p className="card-text text-muted mb-0">
              Edit public profile & URL
            </p>
            <button className="border-0 bg-transparent ">
              <i className="bi bi-question-circle-fill"></i>
            </button>
          </div>
          <hr />
          <div className="d-flex justify-content-between align-items-start">
            <p className="card-text mb-0 text-muted">
              Add profile in another language
            </p>
            <button className="border-0 bg-transparent ">
              <i className="bi bi-question-circle-fill"></i>
            </button>
          </div>
        </div>
      </div>
      <Promoted />
      <AlsoViewed title="People also view" />
      <PeopleYouMayKnow title="People you may know" />
    </>
  )
}

export default Aside
