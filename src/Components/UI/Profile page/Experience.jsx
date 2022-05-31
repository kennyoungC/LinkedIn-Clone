import React from "react"

const Experience = () => {
  return (
    <div className="card mb-2 p-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="mb-0">Experience</h5>
        <div>
          <button className="border-0 bg-transparent fs-5 float-end">
            <i class="bi bi-pencil"></i>
          </button>
          <button className="border-0 bg-transparent fs-5 float-end">
            <i class="bi bi-plus-lg"></i>
          </button>
        </div>
      </div>
      <div className="d-flex gap-1 align-items-start mb-3 px-1">
        <img src="https://via.placeholder.com/48" alt="" />
        <div className="d-flex flex-column lh-sm">
          <h6 className="mb-0">Software Developer</h6>
          <p className="mb-0">DUMANSTORES &middot; Part-time</p>
          <p className="mb-0">Sep 2019 - Feb 2021 &middot; 1 yr 6 mos</p>
          <p>Nigeria</p>
        </div>
      </div>
    </div>
  )
}

export default Experience
