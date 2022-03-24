import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container } from "react-bootstrap";
export default function Header() {
  return (
    <header>
      <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <i className="fa-solid fa-bag-shopping"></i> Shoppy
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fa-solid fa-cart-shopping mr-1"></i> Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/singin">
                <Nav.Link>
                  <i className="fa-solid fa-arrow-right-to-bracket"></i> Signin
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
