import React from "react"
import { NavLink } from "react-router-dom"
import EachNavLink from "./EachNavLink"

const NavLinks = () => {
  return (
    <div className="d-flex gap-4 text-center border-end pe-4">
      <NavLink className="text-decoration-none" to={"/feed"}>
        {" "}
        <EachNavLink title="Home" icon="bi bi-house-door-fill" />
      </NavLink>

      <EachNavLink title="My Network" icon="bi bi-people-fill" />
      <EachNavLink title="Jobs" icon="bi bi-briefcase-fill" />
      <EachNavLink title="Messaging" icon="bi bi-chat-dots-fill" />
      <EachNavLink title="Notifications" icon="bi bi-bell-fill" />
      <div className="d-flex align-items-center flex-column justify-content-center">
        <img
          className="rounded-circle"
          src="https://via.placeholder.com/22"
          alt=""
        />
        <div className="dropdown">
          <button
            className="btn btn-transparent dropdown-toggle border-0 p-0"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Me
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavLinks
