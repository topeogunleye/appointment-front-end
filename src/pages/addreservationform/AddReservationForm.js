import React from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import './AddReservationForm.css';

function AddReservationForm() {
  return (
    <div className="grid grid-cols-custom">
      <Sidebar />
      <div className="grid items-center min-h-screen bg-cover bg-repeat bg-top text-white">
        <div className="h-80 grid items-center">
          <h2 className="leading-10 tracking-widest underline underline-offset-8 decoration-solid font-bold">BOOK A CAR REPAIR TODAY</h2>
          <p className="w-3/4 m-auto leading-7 text-sm">
            There are 34 different repair services at Barefoot Mechanic.
            Todays five shops are in production:
            the manual transmission PX and the modern CVT transmission S, LX, GT, and GT5.
            We have repair shops all over the globe which some include a free first month
            subscription
            If you wish to find out if a free repair is available in your area.
            please use the selector below
          </p>
          <div className="flex items-center justify-between m-auto w-80">
            <Link
              to="/CarRepairForm/"
              className="button bg-green flex justify-between items-center  w-36"
            >
              London
              <FaIcons.FaArrowDown className="inline" />
            </Link>

            <Link
              to="/ServiceForm/"
              type="button"
              className="button bg-white text-green flex justify-center items-center w-36"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddReservationForm;
