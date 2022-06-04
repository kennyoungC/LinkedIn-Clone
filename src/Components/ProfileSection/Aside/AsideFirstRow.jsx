import React from "react"

const AsideFirstRow = () => {
  return (
    <div className="card mb-2">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start">
          <p className="card-text text-muted mb-0">Edit public profile & URL</p>
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
  )
}

export default AsideFirstRow
