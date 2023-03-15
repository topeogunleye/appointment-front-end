import React, { useState, useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { IconContext } from 'react-icons';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Carousel.css';
import { useNavigate } from 'react-router-dom';
import { fetchServices } from '../../redux/carRepairServices';

const Carousel = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { selectedService } = props;

  useEffect(() => {
    dispatch(fetchServices());
  }, []);

  const services = useSelector((state) => state.services);

  console.log(services);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    const newStartIndex = (currentImageIndex - 3 + services.services.length)
      % services.services.length;
    setCurrentImageIndex(newStartIndex);
  };

  const handleNextClick = () => {
    const newStartIndex = (currentImageIndex + 3) % services.services.length;
    setCurrentImageIndex(newStartIndex);
  };

  return (
    <div className="carousel my-5">
      <div className="carousel-container">
        {[...services.services, ...services.services, ...services.services]
          .slice(currentImageIndex, currentImageIndex + 3)
          .map((service) => (
            <div className="carousel-item" key={service.id}>
              <img
                src={service.photo}
                alt={service.service}
                className="carousel-image"
              />
              <div className="p-4 text-gray-500">
                <h3
                  className="text-xl font-semibold mb-2 border-b border-dashed border-indigo-600 leading-[2]"
                  onClick={() => {
                    navigate('/service_details');
                    selectedService(service);
                  }}
                >
                  {service.service}
                </h3>
                <p className="mb-4 text-sm font-normal w-60">
                  {service.description}
                </p>
                <div className="flex items-center justify-center w-64">
                  <IconContext.Provider
                    value={{
                      color: 'gray',
                      className: 'text-gray-600 mr-4 hover:text-blue-500',
                    }}
                  >
                    <FaFacebook size={24} />
                  </IconContext.Provider>
                  <IconContext.Provider
                    value={{
                      color: 'gray',
                      className: 'text-gray-600 mr-4 hover:text-blue-500',
                    }}
                  >
                    <FaTwitter size={24} />
                  </IconContext.Provider>
                  <IconContext.Provider
                    value={{
                      color: 'gray',
                      className: 'text-gray-600 mr-4 hover:text-blue-500',
                    }}
                  >
                    <FaInstagram size={24} />
                  </IconContext.Provider>
                </div>
              </div>
            </div>
          ))}
      </div>
      <button
        type="button"
        onClick={handlePrevClick}
        className="carousel-button prev bg-green rounded-r-full w-12 p-1.5"
      >
        <IconContext.Provider
          value={{ color: '#ffffff', className: 'global-class-name' }}
        >
          <FaIcons.FaCaretLeft />
        </IconContext.Provider>
      </button>
      <button
        type="button"
        onClick={handleNextClick}
        className="carousel-button next bg-green rounded-l-full w-12 p-1.5"
      >
        <IconContext.Provider
          value={{ color: '#ffffff', className: 'global-class-name ml-2' }}
        >
          <FaIcons.FaCaretRight />
        </IconContext.Provider>
      </button>
    </div>
  );
};

export default Carousel;
