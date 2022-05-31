import React from "react"

const ProfileCarousel = () => {
  return (
    <div className="d-flex gap-4">
      <div className="bg-custom p-2 rounded  w-50">
        <div className="d-flex justify-content-between align-items-center ">
          <p className="text-secondary mb-0">Open to work</p>
          <button className="border-0 bg-transparent">
            <i class="bi bi-pen"></i>
          </button>
        </div>
        <p className="mb-0">Sofware Developer roles</p>
        <span>
          <a className="text-decoration-none" href="#">
            See all details
          </a>
        </span>
      </div>
      <div className="border p-2 rounded w-50 ">
        <div className="d-flex justify-content-between align-items-start">
          <p className="text-secondary mb-0">
            Share that you're hiring and attract qualified candidates
          </p>
          <button className="border-0 bg-transparent">
            <i class="bi bi-x-lg"></i>{" "}
          </button>
        </div>
        <span>
          <a className="text-decoration-none" href="#">
            See all details
          </a>
        </span>
      </div>
    </div>
  )
}

export default ProfileCarousel
