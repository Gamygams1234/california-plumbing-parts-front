import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Navbar bg="dark" variant="dark" >
      <Container>
        <Navbar.Text>
          <span>&copy; {currentYear} California Plumbing Parts</span>
        </Navbar.Text>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href="/about" className="text-light mx-2">About</a>
            <a href="/contact" className="text-light mx-2">Contact</a>
            <a href="/terms" className="text-light mx-2">Terms of Service</a>
            {/* Add more links as needed */}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Footer;