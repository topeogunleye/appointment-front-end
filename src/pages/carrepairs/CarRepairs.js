import './CarRepair.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import Carousel from '../../components/Carousel/Carousel';

const CarRepairs = () => (
  <div className="grid lg:grid-cols-custom">
    <Sidebar />
    <div className="grid items-center min-h-screen font-bold">
      <div className="grid place-items-center justify-center">
        <h1 className="text-black-600 text-2xl tracking-wider">LATEST SERVICES</h1>
        <p className="text-sm text-gray-400">Please select a new Service</p>
      </div>
      <Carousel />
    </div>
  </div>
);

export default CarRepairs;
