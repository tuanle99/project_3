import React, { useEffect } from "react";
import img from "../../images/gardenista-3.png";
import API from "../../utils/API";
import { useHistory, useLocation } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  let isLoggin = true;
  const history = useHistory();
  const location = useLocation();

  function logOut() {
    localStorage.setItem("isLoggin", false);
    localStorage.setItem("user", "");
    API.logout()
      .then((response) => {
        isLoggin = response.data.logged_in;
        localStorage.setItem("isLoggin", false);
        localStorage.setItem("user", null);
        window.location.pathname = "/";
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  useEffect(() => {
    checkLogin();
  }, []);

  function checkLogin() {
    API.auth()
      .then((response) => {
        console.log(response);
        return response.data.logged_in;
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  function authenticate() {
    console.log(location.pathname);
    if (location.pathname === "/") {
      return (
        <nav
          className="navbar navbar-expand-lg navbar-light"
          style={{ backgroundColor: "#5b7444" }}
        >
          <div className="container-fluid">
            <a className="navbar-brand">
              <img src={img} alt="" width="75" height="93.75" />
            </a>
          </div>
        </nav>
      );
    } else {
      return (
        <Navbar style={{ backgroundColor: '#5b7444' }} variant="dark" className="color-nav" expand="lg">
          <Navbar.Brand href="/home"><img src={img} width="75" height="93.75" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/cards">Your Plants</Nav.Link>
              <Nav.Link href="/plants">Add Plants</Nav.Link>
              <Nav.Link href="/journal">Journal</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link onClick={logOut}>Log Out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    }

  }

  return authenticate();
};

export default Header;
