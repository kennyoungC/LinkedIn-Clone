import React from "react"
import PromotedItems from "./PromotedItems"

const Promoted = () => {
  return (
    <div className="card mb-2">
      <div className="d-flex justify-content-between align-items-center px-1">
        <h6 className="mb-0">Promoted</h6>
        <button className="border-0 bg-transparent float-end">
          <i className="bi bi-three-dots"></i>
        </button>
      </div>
      <>
        <PromotedItems />
        <PromotedItems />
        <PromotedItems />
      </>
    </div>
  )
}

export default Promoted
