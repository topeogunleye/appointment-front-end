import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CarRepairs from './pages/carrepairs/CarRepairs';
import RemoveReservationForm from './pages/removereservationForm/RemoveReservationForm';
import AddReservationForm from './pages/addreservationform/AddReservationForm';
import Services from './pages/services/Services';
import Reservations from './pages/reservations/Reservations';
import './App.css';
import Loginsignup from './pages/signuplogin/SignUpLogin';
import ReservationForm from './pages/reservationform/ReservationForm';
import ServicesForm from './pages/addservice/addseviceform';
import Homepage from './pages/home/Homepage';
import ServiceDetails from './pages/service_details/ServiceDetails';

const App = () => {
  const [serviceDetailsData, setServiceDetailsData] = useState({});

  const handleServiceClick = (data) => {
    setServiceDetailsData(data);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes className="flex">
          <Route path="/" element={<Homepage />} />
          <Route
            path="/CarRepairs"
            element={<CarRepairs handleServiceClick={handleServiceClick} />}
          />
          <Route path="/services" element={<Services />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/AddReservationForm" element={<AddReservationForm />} />
          <Route
            path="/RemoveReservationForm"
            element={<RemoveReservationForm />}
          />
          <Route path="/ReservationForm" element={<ReservationForm />} />
          <Route path="loginsignup" element={<Loginsignup />} />
          <Route
            path="/services/:id"
            element={<ServiceDetails details={serviceDetailsData} />}
          />
          <Route path="*" element={<div>404 Not Found</div>} />
          <Route path="/AddService" element={<ServicesForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
