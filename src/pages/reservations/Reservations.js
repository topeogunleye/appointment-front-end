import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import { fetchServices } from '../../redux/reservationSlice';

const Reservations = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reservations = useSelector((state) => (state.reservation.formData
    ? state.reservation.formData : null));
  console.log('reservations:', reservations);
  const isLoading = useSelector((state) => state.isLoading);
  const user = useSelector((state) => (state.auth.user ? state.auth.user : null));
  console.log(user);
  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  const handleBack = () => {
    navigate('/');
  };

  if (!reservations) {
    return <p>Loading...</p>;
  } if (!Object.values(reservations).length) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <button
          type="button"
          className="absolute top-1 left-1 sm:top-4 sm:left-4 hover:bg-indigo-600 text-white bg-green py-1 px-1 sm:py-2 sm:px-4"
          onClick={handleBack}
        >
          &laquo; Go Back
        </button>
        <div className="max-w-md w-full">
          <div className="text-center text-2xl font-bold mb-8">
            <h1 className="text-gray-900">Welcome!</h1>
          </div>
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <p className="text-center text-gray-700 text-base">
              You have no reservations yet.
            </p>
          </div>
        </div>
      </div>
    );
  } if (!user) {
    // redirect to login page
    navigate('/loginsignup');
  }

  let userReservations = [];

  if (user && reservations) {
    userReservations = Object.values(reservations).filter(
      (reservation) => reservation.username === user.username,
    );
  }

  return (
    <div className="grid lg:grid-cols-custom">
      <Sidebar />
      <div className="container mx-auto my-4">
        <h1 className="text-3xl font-bold mb-4">Reservations</h1>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
            <th
                scope="col"
                className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Vehicle
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Model
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Year
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Color
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Location
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Service
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {userReservations && userReservations.map((service) => (
              <tr key={service.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {service.username}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {service.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {service.vehicle}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">
                  {service.model}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">
                  {service.year}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">
                  {service.color}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">
                  {service.location}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">
                  {service.service}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Reservations;
