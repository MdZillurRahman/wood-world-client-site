import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

import banner1 from '../../../../Images/Banner/westernhamlock.jpg';
import banner2 from '../../../../Images/Banner/banner4.jpg';
import banner3 from '../../../../Images/Banner/Application-Furniture.png';

const Banner = () => {
    return (
        <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>Wood Snacks Table</h5>
      <p>One can easily use it to have snacks, to use laptop or to study.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Wood Dinning Table</h5>
      <p>Easily comportable for a Family Dinning or Snacks.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Wood Bed</h5>
      <p>Reasonable Couple Bed.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
};

export default Banner;