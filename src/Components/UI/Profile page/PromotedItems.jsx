import React from "react"

const PromotedItems = () => {
  return (
    <div className="d-flex gap-1 align-items-end mb-3 px-1">
      <img src="https://via.placeholder.com/48" alt="" />
      <div className="d-flex flex-column ">
        <p className="mb-0">#1 PV Design Software</p>
        <span className="text-ellipsis--2">
          Sign-up for a free 14-days trial and see PVcase features in action
        </span>
      </div>
      <button className="border-0 bg-transparent  ">
        <i class="bi bi-chevron-right"></i>
      </button>
    </div>
  )
}

export default PromotedItems
