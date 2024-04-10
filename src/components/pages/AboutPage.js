import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AboutPage = () => {
  return (
    <div className="about-page pb-5">
      <Container>
        <h2 className="text-center mb-4">About Us</h2>

        {/* First Section */}
        <Row className="mb-5">
          <Col md={6}>
            <img
              src="/images/about/image1.jpg"
              className="img-fluid"
              alt="About 1"
            />
          </Col>
          <Col md={6}>
            <div className="about-text">
              <h3>Premium Parts</h3>
              <p>
                California Plumbing Parts is a leading company based in Orange
                County, dedicated to providing a comprehensive range of plumbing
                parts catering to diverse needs. Specializing in faucets and
                their associated components, the company stands out for its
                commitment to quality and customer satisfaction. With a vast
                inventory sourced from trusted manufacturers, California
                Plumbing Parts ensures that customers have access to top-notch
                products for their plumbing projects, whether they're
                professionals or DIY enthusiasts.
              </p>
            </div>
          </Col>
        </Row>

        {/* Second Section */}
        <Row className="mb-5 flex-md-row-reverse">
          <Col md={6}>
            <img
              src="/images/about/image2.jpg"
              className="img-fluid"
              alt="About Image 2"
            />
          </Col>
          <Col md={6}>
            <div className="about-text">
              <h3>Dedicated to service</h3>
              <p>
                At California Plumbing Parts, the emphasis is not just on
                offering products but also on delivering expertise and support
                to customers. The knowledgeable staff is readily available to
                assist clients in selecting the right parts for their specific
                requirements, ensuring optimal performance and durability. From
                basic fixtures to specialized components, the company offers a
                wide selection to accommodate various budgets and preferences.
                With an unwavering focus on reliability and efficiency,
                California Plumbing Parts has established itself as a go-to
                destination for all plumbing needs in Orange County and beyond.
              </p>
            </div>
          </Col>
        </Row>

        {/* Third Section */}
        <Row className="mb-5">
          <Col md={6}>
            <img
              src="/images/about/image3.jpg"
              className="img-fluid"
              alt="About Image 3"
            />
          </Col>
          <Col md={6}>
            <div className="about-text">
              <h3>Total Satisfaction</h3>
              <p>
                In addition to its extensive product offerings, California
                Plumbing Parts distinguishes itself through its commitment to
                sustainability and innovation. The company actively seeks out
                eco-friendly solutions and partners with manufacturers who
                prioritize environmental responsibility. By promoting
                water-efficient products and implementing eco-conscious
                practices in its operations, California Plumbing Parts not only
                contributes to conservation efforts but also helps customers
                reduce their environmental footprint. With a blend of quality,
                expertise, and eco-consciousness, California Plumbing Parts
                continues to set the standard for excellence in the plumbing
                industry, serving as a trusted ally for professionals and
                homeowners alike.
              </p>
            </div>
          </Col>
        </Row>

        {/* Call to Action */}
        <div className="text-center">
          <p>For more information, contact us.</p>
          <button className="btn btn-primary">Contact Us</button>
        </div>
      </Container>
    </div>
  );
};

export default AboutPage;
