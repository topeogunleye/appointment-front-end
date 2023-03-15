import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import { postServices } from '../../redux/reservationSlice';

const ReservationForm = () => {
  const dispatch = useDispatch();
  const [vehicle, setVehicle] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [color, setColor] = useState('');
  const [location, setLocation] = useState('');
  const [service, setService] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const isLoading = useSelector((state) => state.isLoading);
  const userId = useSelector((state) => state.auth.user.id);

  // useEffect(() => {
  //   if (isLoading) {
  //     dispatch(postServices({
  //       vehicle, model, year, color, location, service, userId,
  //     }));
  //   }
  // }, [isLoading]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    dispatch(postServices({
      startDate, vehicle, model, year, color, location, service, userId,
    }));
  };

  return (
    <div className="">
      <form onSubmit={handleFormSubmit} className="max-w-lg mx-auto p-8">
        {/* temi look here */}
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
      {/* please */}
        <div className="mb-4">
          <label htmlFor="vehicle" className="block font-medium mb-2">
            Vehicle
            <input
              type="text"
              id="vehicle"
              name="vehicle"
              value={vehicle}
              onChange={(e) => setVehicle(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </label>
        </div>
        <div className="mb-4">
          <label htmlFor="model" className="block font-medium mb-2">
            Model
            <input
              type="text"
              id="model"
              name="model"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </label>
        </div>
        <div className="mb-4">
          <label htmlFor="year" className="block font-medium mb-2">
            Year
            <input
              type="number"
              id="year"
              name="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </label>
        </div>
        <div className="mb-4">
          <label htmlFor="color" className="block font-medium mb-2">
            Color
            <select
              id="color"
              name="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            >
              <option value="">Select a color</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="yellow">Yellow</option>
            </select>
          </label>
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block font-medium mb-2">
            Location
            <select
              id="location"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            >
              <option value="">Select a location</option>
              <option value="new-york">New York</option>
              <option value="los-angeles">Los Angeles</option>
              <option value="chicago">Chicago</option>
              <option value="miami">Miami</option>
            </select>
          </label>
        </div>
        <div className="mb-4">
          <label htmlFor="service" className="block font-medium mb-2">
            Service Type (optional)
            <select
              id="service"
              name="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            >
              <option value="">Select a service</option>
              <option value="oil-change">Oil Change</option>
              <option value="tire-replacement">Tire Replacement</option>
              <option value="battery-replacement">Battery Replacement</option>
              <option value="brake-repair">Brake Repair</option>
            </select>
          </label>
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-green rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
          >
            {isLoading ? 'Loading...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReservationForm;
