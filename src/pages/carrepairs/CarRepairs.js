import React, { useEffect } from 'react';
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
  services.isLoading ? console.log('loading ') : console.log(services.services);
  return (
    <div className="flex">
      <Sidebar />
      <h1 className="m-auto p-32">This is the add new reservation form page</h1>
    </div>
  );
};

export default CarRepairs;
