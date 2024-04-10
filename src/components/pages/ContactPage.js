import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
const apiKey = process.env.REACT_APP_GOOGLE_KEY || '';

const ContactPage = () => {
  return (
    <Container className="mt-5" style={{ paddingTop: '118px' }}>
      <Row className="flex-row-reverse">
        <Col md={6}>
          <h2>Visit Us</h2>
          <p>California Plumbing Parts</p>
          <p>1912 N. Batavia St, Suite "F"</p>
          <p>Orange CA 92865</p>
          <iframe width="100%" height="350" style={{border: "0"}} loading="lazy" allowfullscreen
src={`https://www.google.com/maps/embed/v1/place?q=1912%20N.%20Batavia%20St%2C%20Suite%20%22F%22%20Orange%20CA%2092865%20&key=${apiKey}`}  ></iframe>
        </Col>
        <Col md={6}>
          <h2>Contact Us</h2>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="formSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="Enter subject" />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;