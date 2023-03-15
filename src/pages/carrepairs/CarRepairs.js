import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './CarRepair.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import Carousel from '../../components/Carousel/Carousel';
import { fetchService } from '../../redux/serviceSlice';

const CarRepairs = (props) => {
  const dispatch = useDispatch();

  const { handleServiceClick } = props;

  const selectedService = (data) => {
    handleServiceClick(data);
  };

  useEffect(() => {
    dispatch(fetchService());
  }, [dispatch]);

  return (
    <div className="grid lg:grid-cols-custom">
      <Sidebar />
      <div className="grid items-center min-h-screen font-bold">
        <div className="grid place-items-center justify-center">
          <h1 className="text-black-600 text-2xl tracking-wider">
            LATEST SERVICES
          </h1>
          <p className="text-sm text-gray-400">Please select a new Service</p>
        </div>
        <Carousel selectedService={selectedService} />
      </div>
    </div>
  );
};

export default CarRepairs;
