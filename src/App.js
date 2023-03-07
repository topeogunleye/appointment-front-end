import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
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
            path="/reservenewform"
            element={
              <>
                <div>This is the add new reservation form page</div>
              </>
            }
          />
          <Route
            path="/services"
            element={
              <div className="flex">
                <Sidebar />
                <div>This will show the details of each service</div>
              </div>
            }
          />
          <Route
            path="/reservations"
            element={
              <>
                <div className="flex">
                  <Sidebar />
                  <div>
                    This is the page that shows all the reservations you have
                    created as a user
                  </div>
                </div>
              </>
            }
          />
          <Route
            path="/addcarrepairform"
            element={
              <>
                <div>This is the form for adding a new car repair service</div>
              </>
            }
          />
          <Route
            path="/removecarrepairform"
            element={
              <>
                <div>
                  This is the page where we can remove a car repair service
                </div>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
