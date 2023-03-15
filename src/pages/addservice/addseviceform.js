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
      service, photo, engineer, price, labour, duration, description,
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

  const handleBack = () => {
    navigate('/services');
  };

  return (
    <div className="flex justify-center items-center h-screen sticky">
      <button
        type="button"
        className="absolute top-1 left-1 sm:top-4 sm:left-4 hover:bg-indigo-600 text-white bg-green py-1 px-1 sm:py-2 sm:px-4"
        onClick={handleBack}
      >
        &laquo; Go Back
      </button>
      <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto mt-8">
        <div className="mb-4">
          <label htmlFor="service" className="block text-gray-700 font-bold mb-2">
            Service:
            <input type="text" id="service" name="service" value={service} onChange={(e) => setService(e.target.value)} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </label>
        </div>
        <div className="mb-4">
          <label htmlFor="photo" className="block text-gray-700 font-bold mb-2">
            Photo:
            <input type="text" id="photo" name="photo" onChange={(e) => setPhoto(e.target.value)} placeholder="copy image address only from url" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </label>
        </div>
        <div className="mb-4">
          <label htmlFor="engineer" className="block text-gray-700 font-bold mb-2">
            Engineer:
            <input type="text" id="engineer" name="engineer" value={engineer} onChange={(e) => setEngineer(e.target.value)} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </label>
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
            Price:
            <input type="number" id="price" name="price" value={price} onChange={(e) => setPrice(e.target.value)} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </label>
        </div>
        <div className="mb-4">
          <label htmlFor="labour" className="block text-gray-700 font-bold mb-2">
            Labour:
            <input type="number" id="labour" name="labour" value={labour} onChange={(e) => setLabour(e.target.value)} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </label>
        </div>
        <div className="mb-4">
          <label htmlFor="duration" className="block text-gray-700 font-bold mb-2">
            Duration:
            <input type="number" id="duration" name="duration" value={duration} onChange={(e) => setDuration(e.target.value)} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </label>
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
            Description:
            <textarea id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </label>
        </div>
        <div className="flex items-center justify-between">
          <button type="submit" className="bg-green hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Service</button>
        </div>
      </form>
    </div>
  );
};

export default ServiceForm;
