import React, { useState } from "react";
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Carousel.css';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  return (
    <div className="carousel my-5">
      <div className="carousel-container">
        {images.slice(currentImageIndex, currentImageIndex + 3).map((image, index) => (
          <div className="carousel-item" key={index}>
            <img src={image.src} alt={image.alt} className="carousel-image" />
            <div className="p-4 text-gray-500">
              <h3 className="text-xl font-semibold mb-2 border-b border-dashed border-indigo-600 leading-[2]">{image.title}</h3>
              <p className="mb-4 text-sm font-normal w-60">{image.description}</p>
              <div className="flex items-center justify-center">
                <a
                  href={`https://facebook.com/${image.facebook}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 mr-4 hover:text-blue-500"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href={`https://twitter.com/${image.twitter}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 mr-4 hover:text-blue-500"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href={`https://instagram.com/${image.instagram}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 hover:text-pink-500"
                >
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button type="button" onClick={handlePrevClick} className="carousel-button prev bg-green rounded-r-full w-12 p-1.5">
        <IconContext.Provider value={{ color: '#ffffff', className: 'global-class-name' }}>
          <FaIcons.FaCaretLeft />
        </IconContext.Provider>
      </button>
      <button type="button" onClick={handleNextClick} className="carousel-button next bg-green rounded-l-full w-12 p-1.5">
        <IconContext.Provider value={{ color: '#ffffff', className: 'global-class-name ml-2' }}>
          <FaIcons.FaCaretRight />
        </IconContext.Provider>
      </button>
    </div>
  );
};

export default Carousel;
