import { Container, Row, Col } from "react-bootstrap"
import logo from "../../Assets/Img/logo.png"
import NavLinks from "./NavLinks"

const MyNavbar = () => {
  return (
    <div className="bg-white border-bottom">
      <Container className="">
        <Row className="align-items-center py-2">
          <Col md={5}>
            <div className="d-flex gap-2 align-items-center pt-2">
              <img
                className="img-fluid"
                src={logo}
                alt=""
                style={{ height: "48px", width: "48px", objectFit: "cover" }}
              />
              <div className="input-group ">
                <span className="input-group-text " id="basic-addon1">
                  <i className="bi bi-search"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
          </Col>
          <Col md={7} className="d-flex gap-3 align-items-center">
            <NavLinks />

            <div className="d-flex align-items-center flex-column justify-content-center">
              <span className="fs-4">
                {" "}
                <i className="bi bi-grid-3x3-gap"></i>
              </span>
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
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <span className="text-center text-warning">
              Try Premium for <br />
              free
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MyNavbar
