import React from "react"

const Suggested = () => {
  return (
    <div className="card my-2 p-3">
      <h6>Suggested for you</h6>
      <span className="text-muted mb-3">
        <span>
          <i className="bi bi-eye-fill"></i>
        </span>{" "}
        Private to you
      </span>
      <h6 className="mb-0">Intermediate</h6>
      <div className="d-flex mb-2">
        <input type="range" className="w-100" />
        <span>6/7</span>
      </div>
      <p className="mb-0 lead fs-6">
        Complete 1 step to achieve{" "}
        <span>
          <a className="text-decoration-none" href="#">
            All-star
          </a>
        </span>{" "}
      </p>
    </div>
  )
}

export default Suggested
