import React, { useEffect, useState } from 'react';
import './CarRepair.css';
import { useSelector, useDispatch } from 'react-redux';
import Sidebar from '../../components/Sidebar/Sidebar';
import { fetchServices } from '../../redux/carRepairServices';
import ServiceComponent from '../../components/ServiceComponent';

const CarRepairs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServices());
  }, []);

  const services = useSelector((state) => state.services);
  console.log(services.services);

  const [index, setIndex] = useState(0);
  // const length = 500;
  const length = services.services.length;

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  const current_carousel = [];
  if (!services.isLoading) {
    const carousel_first = services.services[index];
    let carousel_second;
    let carousel_third;

    if (index == length - 1) {
      carousel_second = services.services[0];
      carousel_third = services.services[1];
    } else if (index + 1 == length - 1) {
      carousel_second = services.services[index + 1];
      carousel_third = services.services[0];
    } else {
      carousel_second = services.services[index + 1];
      carousel_third = services.services[index + 2];
    }

    current_carousel.push(carousel_first);
    current_carousel.push(carousel_second);
    current_carousel.push(carousel_third);

    console.log(current_carousel);
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="border-2 border-black m-auto">
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
            <div>
              {current_carousel.map((service) => (
                <ServiceComponent key={service.id} service={service} />
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

export default CarRepairs;
