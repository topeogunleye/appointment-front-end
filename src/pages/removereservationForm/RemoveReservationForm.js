import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { fetchService, removeService } from '../../redux/serviceSlice';
import Sidebar from '../../components/Sidebar/Sidebar';

const RemoveReservationForm = () => {
  const dispatch = useDispatch();
  const { services, isLoading } = useSelector((state) => state.services);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    dispatch(fetchService());
  }, [dispatch, isRemoved]);

  const handleDelete = (id) => {
    dispatch(removeService(id));
    setIsRemoved(true);
  };

  return (
    <div className="grid lg:grid-cols-custom">
      <Sidebar />
      <div className="flex flex-col items-center justify-center w-full h-screen">
        <h1>Services</h1>
        {isLoading && <p>Loading...</p>}
        {!isLoading && services.length === 0 && <p>No services found.</p>}
        {!isLoading && services.length > 0 && (
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Service</th>
              <th className="px-4 py-2">Photo</th>
              <th className="px-4 py-2">Engineer</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Labour</th>
              <th className="px-4 py-2">Duration</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={uuidv4()}>
                <td className="border px-4 py-2">{service.service}</td>
                <td className="border px-4 py-2"><img src={service.photo} alt={service.service} className="w-20 h-20 object-cover" /></td>
                <td className="border px-4 py-2">{service.engineer}</td>
                <td className="border px-4 py-2">{service.price}</td>
                <td className="border px-4 py-2">{service.labour}</td>
                <td className="border px-4 py-2">{service.duration}</td>
                <td className="border px-4 py-2">{service.description}</td>
                <td className="border px-4 py-2"><button type="button" className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded" onClick={() => handleDelete(service.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>

        )}
      </div>
    </div>
  );
};

export default RemoveReservationForm;
