import React from "react"
import { Button } from "react-bootstrap"
import AddToFeedItems from "./AddToFeedItems"

const AddToFeed = () => {
  return (
    <div className="card">
      <div className="card-body ">
        <h6>Add to your feed</h6>
        <AddToFeedItems />
        <AddToFeedItems />
        <AddToFeedItems />
        <p className="mb-0">
          View all recomendations{" "}
          <span>
            <i class="bi bi-arrow-right"></i>
          </span>
        </p>
      </div>
    </div>
  )
}

export default AddToFeed
