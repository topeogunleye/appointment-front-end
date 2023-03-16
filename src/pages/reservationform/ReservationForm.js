import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // import useNavigate
import DatePicker from 'react-multi-date-picker';
import InputIcon from 'react-multi-date-picker/components/input_icon';
import { postServices } from '../../redux/reservationSlice';
import { handleOptionChange } from '../../redux/selectDropdownSlice';
import './ReservationForm.css';

const ReservationForm = () => {
  const selectedOption = useSelector((state) => state.selectDropdown.selectedOption);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // initialize useNavigate
  const [vehicle, setVehicle] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [color, setColor] = useState('');
  const [location, setLocation] = useState(selectedOption);
  const [service, setService] = useState('');
  const [startDate, setStartDate] = useState(null);

  const isLoading = useSelector((state) => state.isLoading);
  const userId = useSelector((state) => (state.auth.user ? state.auth.user.id : null));
  const userName = useSelector((state) => (state.auth.user ? state.auth.user.username : null));

  // Watch for changes to the selectedOption state value, and update location accordingly
  useEffect(() => {
    setLocation(selectedOption);
  }, [selectedOption]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(postServices({
      selectedDate: startDate,
      data:
       {
         vehicle, model, year, color, location, service, userId, username: userName,
       },
    }));
    // Reset the form after submission
    setVehicle('');
    setModel('');
    setYear('');
    setColor('');
    setService('');

    navigate('/AddReservationForm'); // redirect to home page after form submission
  };

  const handleDateChange = (selectedDate) => {
    setStartDate(selectedDate); // update startDate variable with selected date
  };

  // Check if the user is logged in, and redirect to login page if not
  useEffect(() => {
    if (!userId) {
      navigate('/loginsignup');
    }
  }, [userId, navigate]);

  return (
    <div className="">
      <form onSubmit={handleFormSubmit} className="max-w-lg mx-auto p-8">
        <label htmlFor="username" className="block font-medium mb-2 flex items-center justify-center">
          Name: <input type="text" className='ml-34' value={userName || ''} disabled />
        </label>

        <div className="mb-4">
          <div className="datepicker-container">
            <label htmlFor="datepicker" className="block font-medium mb-2">
              Select Date:
            </label>
            <DatePicker id="datepicker" value={startDate} onChange={handleDateChange} render={<InputIcon />} />
          </div>

        </div>
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
              value={selectedOption}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              onChange={(e) => dispatch(handleOptionChange(e.target.value))}
            >
              <option>New York</option>
              <option>Los Angeles</option>
              <option>Chicago</option>
              <option>Houston</option>
              <option>Philadelphia</option>
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
