import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchServices } from '../../redux/reservationSlice';

const Reservations = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.reservation.formData);
  console.log(formData);
  const isLoading = useSelector((state) => state.isLoading);

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-8">Reservations</h1>
      {isLoading ? (
        <div className="text-center">
          <span className="text-gray-500">Loading...</span>
        </div>
      ) : (
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Service</th>
              <th className="px-4 py-2 text-left">Created At</th>
              <th className="px-4 py-2 text-left">Updated At</th>
            </tr>
          </thead>

        </table>
      )}
    </div>
  );
};

export default Reservations;
