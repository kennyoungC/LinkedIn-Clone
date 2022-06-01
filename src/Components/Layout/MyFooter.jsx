import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import logo from "../../Assets/Img/footerLogo.png"
const MyFooter = () => {
  return (
    <Container fluid="md" className="py-5">
      <img
        src={logo}
        alt=""
        className="img-fluid mb-3"
        style={{ width: "120px" }}
      />
      <Row>
        <Col md={2}>
          <ul className="d-flex flex-column gap-2 list-unstyled">
            <li>
              <a className="text-decoration-none text-muted" href="#">
                About
              </a>
            </li>
            <li>
              <a className="text-decoration-none text-muted" href="#">
                Community Guidelines
              </a>
            </li>
            <li>
              <a className="text-decoration-none text-muted" href="#">
                Privacy & Terms
              </a>
            </li>
            <li>
              <a className="text-decoration-none text-muted" href="#">
                Sales Solution
              </a>
            </li>
            <li>
              <a className="text-decoration-none text-muted" href="#">
                Safety Center
              </a>
            </li>
          </ul>
        </Col>
        <Col md={2}>
          <ul className="d-flex flex-column gap-2 list-unstyled">
            <li>
              <a className="text-decoration-none text-muted" href="#">
                Accessibilty
              </a>
            </li>
            <li>
              <a className="text-decoration-none text-muted" href="#">
                Career
              </a>
            </li>
            <li>
              <a className="text-decoration-none text-muted" href="#">
                Ad Choices
              </a>
            </li>
            <li>
              <a className="text-decoration-none text-muted" href="#">
                Mobile
              </a>
            </li>
          </ul>
        </Col>
        <Col md={2}>
          <ul className="d-flex flex-column gap-2 list-unstyled">
            <li>
              <a className="text-decoration-none text-muted" href="#">
                Talent Solutions
              </a>
            </li>
            <li>
              <a className="text-decoration-none text-muted" href="#">
                Marketing Solutions
              </a>
            </li>
            <li>
              <a className="text-decoration-none text-muted" href="#">
                Advertising
              </a>
            </li>
            <li>
              <a className="text-decoration-none text-muted" href="#">
                Small Buusiness
              </a>
            </li>
          </ul>
        </Col>
        <Col md={6}>
          <div className="d-flex justify-content-center align-items-start">
            {" "}
            <ul className="d-flex flex-column gap-2 list-unstyled w-50">
              <li>
                <div className="d-flex gap-2 align-items-start">
                  <button className="border-0 bg-transparent ">
                    <i className="bi bi-question-circle-fill"></i>
                  </button>
                  <div className="d-flex flex-column gap-2">
                    <span className="">Questions?</span>
                    <span className="text-muted">Visit our Help Center.</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex gap-2 align-items-start">
                  <button className="border-0 bg-transparent ">
                    <i className="bi bi-question-circle-fill"></i>
                  </button>
                  <div className="d-flex flex-column gap-2">
                    <span className="">Manage your account and privacy</span>
                    <span className="text-muted">Go to your Setting</span>
                  </div>
                </div>
              </li>
            </ul>
            <div className="input-group mb-3 d-flex flex-column w-50">
              <p className="mb-1">Select Language</p>
              <select
                defaultValue="english"
                className="form-select w-100 "
                aria-label="Default select example"
              >
                <option value="english">English (English)</option>
                <option value="german">German</option>
                <option value="french">French</option>
                <option value="spanish">Spanish</option>
              </select>
            </div>
          </div>
        </Col>
      </Row>
      <p className="text-muted">LinkedIn Corporation &copy; 2022</p>
    </Container>
  )
}

export default MyFooter
