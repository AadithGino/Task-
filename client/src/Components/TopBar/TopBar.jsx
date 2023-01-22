import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Logout } from "../../REDUX/Actions/adminAction";

function TopBar() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand>Admin</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
              <Nav.Link  onClick={() => navigate("/user-management")}>User Management</Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/add-employee");
                }}
              >
                Add Employee
              </Nav.Link>
            </Nav>

            <Nav.Link onClick={()=>{
              dispatch(Logout())
            }}>Logout</Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default TopBar;
