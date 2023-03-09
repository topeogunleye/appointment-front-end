import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';

function AddReservationForm() {
  return (
    <div className="flex">
      <Sidebar />
      <h2 className="m-auto p-32">This is the form for adding a new car repair service</h2>
    </div>
  );
}

export default AddReservationForm;
