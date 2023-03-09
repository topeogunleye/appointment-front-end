import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';

function Reservations() {
  return (
    <div className="flex">
      <Sidebar />
      <h1 className="m-auto pl-32">This is the page that shows all the reservations you have created as a user</h1>
    </div>
  );
}

export default Reservations;
