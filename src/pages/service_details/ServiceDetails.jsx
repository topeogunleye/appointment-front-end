import React from 'react';

function ServiceDetails() {
  return (
    <div className="border-2 border-black w-1/2 mx-auto">
      <div>
        <div>This will hold the image of the service</div>
        <button>{'<'}</button>
      </div>
      <div>
        <h1>Name</h1>
        <div>This will hold the table of details</div>
        <button type="button">Book Reservation</button>
      </div>
    </div>
  );
}

export default ServiceDetails;
