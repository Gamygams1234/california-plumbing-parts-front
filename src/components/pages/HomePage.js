import React from 'react';
import { Carousel, Container, Button } from 'react-bootstrap';

const HomePage = () => {
  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <Carousel style={{ height: '100%' }}>
        <Carousel.Item>
          <div className="carousel-image-overlay"></div>
          <img
            className="d-block w-100 carousel-image"
            src="/images/carousel/image1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        {/* <Carousel.Item>
          <div className="carousel-image-overlay"></div>
          <img
            className="d-block w-100 carousel-image"
            src="/images/carousel/image2.jpg"
            alt="Second slide"
          />
        </Carousel.Item> */}
        {/* <Carousel.Item>
          <div className="carousel-image-overlay"></div>
          <img
            className="d-block w-100 carousel-image"
            src="/images/carousel/image3.jpg"
            alt="Third slide"
          />
        </Carousel.Item> */}
      </Carousel>
      <Container style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', zIndex: 1, color: 'white' }}>
        <h1 style={{ fontWeight: 'bold' }}>Faucets and Fittings with Unequaled Durability</h1>
        <p>Get the dependability you need with faucets and fittings that will work like new, for years to come.</p>
        <Button variant="info" className="rounded-pill" href="/products">See Products</Button>
      </Container>
    </div>
  );
};

export default HomePage;
