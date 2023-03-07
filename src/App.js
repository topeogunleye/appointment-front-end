import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import CarRepairs from './components/pages/carrepairs/CarRepairs';
import RemoveReservationForm from './components/pages/removereservationForm/RemoveReservationForm';
import AddReservationForm from './components/pages/addreservationform/AddReservationForm';
import Services from './components/pages/services/Services';
import Reservations from './components/pages/reservations/Reservations';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sidebar />}>
            <Route
              path="/"
              element={(
                <div className="flex">
                  <Sidebar />
                  <div>This is the main index page for all of the services</div>
                </div>
              )}
            />
            <Route
              path="/CarRepairs"
              element={<CarRepairs />}
            />
            <Route
              path="/services"
              element={<Services />}
            />
            <Route
              path="/reservations"
              element={<Reservations />}
            />
            <Route
              path="/AddReservationForm"
              element={<AddReservationForm />}
            />
            <Route
              path="/RemoveReservationForm"
              element={<RemoveReservationForm />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
