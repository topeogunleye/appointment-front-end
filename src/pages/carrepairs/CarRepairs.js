import React, { useEffect, useState } from 'react';
import './CarRepair.css';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Sidebar from '../../components/Sidebar/Sidebar';
import { fetchServices } from '../../redux/carRepairServices';
import ServiceComponent from '../../components/ServiceComponent';

const CarRepairs = (props) => {
  const dispatch = useDispatch();
  // const [currentService, setCurrentService] = useSelector();
  const { handleServiceClick } = props;

  const focusedService = (data) => {
    handleServiceClick(data);
  };

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  const services = useSelector((state) => state.services);
  console.log(services.services);

  const [index, setIndex] = useState(0);
  // const length = 500;
  const { length } = services.services;

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  const currentCarousel = [];
  if (!services.isLoading) {
    const carouselFirst = services.services[index];
    let carouselSecond;
    let carouselThird;

    if (index === length - 1) {
      [carouselSecond, carouselThird] = [
        services.services[0],
        services.services[1],
      ];
    } else if (index + 1 === length - 1) {
      [carouselSecond, carouselThird] = [
        services.services[index + 1],
        services.services[0],
      ];
    } else {
      [carouselSecond, carouselThird] = [
        services.services[index + 1],
        services.services[index + 2],
      ];
    }

    currentCarousel.push(carouselFirst);
    currentCarousel.push(carouselSecond);
    currentCarousel.push(carouselThird);

    console.log(currentCarousel);
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="border-2 border-black m-auto w-3/5">
        <div className="w-full">
          <div>
            <h1>Services we render</h1>
            <p>Please choose the service you require</p>
            <br />
            <p>....................</p>
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              className="border-2 border-black p-2 rounded-r-full w-20"
              onClick={handlePrevious}
            >
              {'<'}
            </button>
            <div className="flex">
              {currentCarousel.map((service) => (
                <ServiceComponent
                  key={service.id}
                  service={service}
                  focusedService={focusedService}
                />
              ))}
            </div>
            <button
              type="button"
              className="border-2 border-black p-2 rounded-l-full w-20"
              onClick={handleNext}
            >
              {'>'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

CarRepairs.propTypes = {
  handleServiceClick: PropTypes.func.isRequired,
};

export default CarRepairs;
