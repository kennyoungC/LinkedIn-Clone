import React from "react"

const EachNavLink = (props) => {
  return (
    <div className="d-flex flex-column align-items-center ">
      <span className="fs-4 ">
        <i class={props.icon}></i>
      </span>
      <p className="m-0 text-muted">{props.title}</p>
    </div>
  )
}

export default EachNavLink
