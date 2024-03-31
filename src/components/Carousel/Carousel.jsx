import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { generateSlides } from '../../utils/generateSlides/generateSlide';

export const AutoplayExample = () => {
  return (
    <div className="wrapper">
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        interval={3000}
        transitionTime={500}
      >
        {generateSlides().map((slide) => (
          <div key={slide.src}>
            <img
              src={slide.src}
              alt={slide.alt}
              style={{
                width: '100%',
                height: '90vh',
                objectFit: 'cover',
              }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};