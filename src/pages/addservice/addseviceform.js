import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postService } from '../../redux/serviceSlice';

const ServiceForm = () => {
  const [service, setService] = useState('');
  const [photo, setPhoto] = useState(null);
  const [engineer, setEngineer] = useState('');
  const [price, setPrice] = useState(0);
  const [labour, setLabour] = useState('');
  const [duration, setDuration] = useState(0);
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(postService({
      service, photo, engineer, price, labour, duration, description
    }));

    setService('');
    setPhoto(null);
    setEngineer('');
    setPrice(0);
    setLabour('');
    setDuration(0);
    setDescription('');

    navigate('/services');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto mt-8">
      <div className="mb-4">
        <label htmlFor="service" className="block text-gray-700 font-bold mb-2">Service:</label>
        <input type="text" id="service" name="service" value={service} onChange={(e) => setService(e.target.value)} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <div className="mb-4">
        <label htmlFor="photo" className="block text-gray-700 font-bold mb-2">Photo:</label>
        <input type="url" id="photo" name="photo" value={photo} onChange={(e) => setPhoto(e.target.value)} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <div className="mb-4">
        <label htmlFor="engineer" className="block text-gray-700 font-bold mb-2">Engineer:</label>
        <input type="text" id="engineer" name="engineer" value={engineer} onChange={(e) => setEngineer(e.target.value)} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="block text-gray-700 font-bold mb-2">Price:</label>
        <input type="number" id="price" name="price" value={price} onChange={(e) => setPrice(e.target.value)} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <div className="mb-4">
        <label htmlFor="labour" className="block text-gray-700 font-bold mb-2">Labour:</label>
        <input type="number" id="labour" name="labour" value={labour} onChange={(e) => setLabour(e.target.value)} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <div className="mb-4">
        <label htmlFor="duration" className="block text-gray-700 font-bold mb-2">Duration:</label>
        <input type="number" id="duration" name="duration" value={duration} onChange={(e) => setDuration(e.target.value)} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description:</label>
        <textarea id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <div className="flex items-center justify-between">
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Service</button>
      </div>
    </form>
  );
};

export default ServiceForm;
