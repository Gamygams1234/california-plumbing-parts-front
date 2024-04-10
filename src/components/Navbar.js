import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavCollapse = () => setExpanded(false);

  return (
    <Navbar expand="lg" expanded={expanded} style={{ backgroundColor: '#1A4869', paddingTop: "0", paddingBottom: "0" }}>
      <Container>
        <Link to="/" className="navbar-brand" onClick={handleNavCollapse}>
          <img
            src="/images/logo.png"
            height="100"
            className="d-inline-block align-top"
            alt="Company Logo"
          />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ border: 'none' }} onClick={() => setExpanded(!expanded)}>
          <span style={{ color: 'white' }}>☰</span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ margin: '0 auto' }}>
            <Link to="/about" className="nav-link" style={{ color: 'white', fontWeight: 'bold' }} onClick={handleNavCollapse}>About</Link>
            <Link target="_blank" to="https://online.fliphtml5.com/dfck/gayc/#p=1" className="nav-link" style={{ color: 'white', fontWeight: 'bold' }} onClick={handleNavCollapse}>Brochure</Link>
            <Link to="/contact" className="nav-link" style={{ color: 'white', fontWeight: 'bold' }} onClick={handleNavCollapse}>Contact</Link>
            <Link to="#" className="nav-link" style={{ color: 'white', fontWeight: 'bold' }} onClick={handleNavCollapse}>Parts</Link>
          </Nav>
          <Nav>
            <Nav.Link href="tel:123-456-7890" style={{ color: 'white', fontWeight: 'bold' }}>
              <i className="bi bi-phone"></i> 123-456-7890
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;