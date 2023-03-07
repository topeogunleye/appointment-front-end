import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import CarRepairs from './pages/carrepairs/CarRepairs';
import RemoveReservationForm from './pages/removereservationForm/RemoveReservationForm';
import AddReservationForm from './pages/addreservationform/AddReservationForm';
import Services from './pages/services/Services';
import Reservations from './pages/reservations/Reservations';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes className="flex">
          <Route
            path="/"
            element={
              <div className="flex">
                <Sidebar />
                <div>This is the main index page for all of the services</div>
              </div>
            }
          />
          <Route
            path="/CarRepairs"
            element={
              <div className="flex">
                <Sidebar />
                <CarRepairs />
              </div>
            }
          />
          <Route
            path="/services"
            element={
              <div className="flex">
                <Sidebar />
                <Services />
              </div>
            }
          />
          <Route
            path="/reservations"
            element={
              <div className="flex">
                <Sidebar />
                <Reservations />
              </div>
            }
          />
          <Route
            path="/AddReservationForm"
            element={
              <div className="flex">
                <Sidebar />
                <AddReservationForm />
              </div>
            }
          />
          <Route
            path="/RemoveReservationForm"
            element={
              <div className="flex">
                <Sidebar />
                <RemoveReservationForm />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
