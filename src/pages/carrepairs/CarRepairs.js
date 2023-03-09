import React, { useEffect, useState } from 'react';
import './CarRepair.css';
import { useSelector, useDispatch } from 'react-redux';
import Sidebar from '../../components/Sidebar/Sidebar';
import { fetchServices } from '../../redux/carRepairServices';

const CarRepairs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServices());
  }, []);

  const services = useSelector((state) => state.services);
  console.log(services.services);

  const [index, setIndex] = useState(0);
  // const length = 500;
  const { length } = services.services;
  console.log(length);

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

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
            <p>{index}</p>
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
