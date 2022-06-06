import React from "react"
import PostActions from "./PostActions"

const Feeds = () => {
  return (
    <div className="card my-2 px-3 py-2">
      <div className="d-flex align-items-start justify-content-between gap-2 my-3">
        <img
          className="rounded-circle"
          src="https://via.placeholder.com/48x48"
          alt=""
          style={{ width: "48px", height: "48px" }}
        />
        <div>
          <div className="d-flex flex-column gap-1 mb-1">
            <p className="mb-0 fw-bold">Mads Brods &middot; 1st</p>
            <span className="fs-6 text-muted">
              Lorem ipsum dolor sit amet consectetur elit dd.
            </span>
            <span>
              4h &middot; <i class="bi bi-globe"></i>
            </span>
          </div>
        </div>
        <span>
          <i class="bi bi-three-dots"></i>
        </span>
      </div>
      <p className="mb-0">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi voluptas
        aut accusantium excepturi alias omnis tempore quas accusamus deleniti,
        facere, vel blanditiis. Accusantium et dignissimos nihil suscipit
        placeat, iure dolorum!
      </p>
      <hr />
      <PostActions />
    </div>
  )
}

export default Feeds
