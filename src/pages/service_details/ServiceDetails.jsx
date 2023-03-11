import React from 'react';

function ServiceDetails(props) {
  console.log(props);

  const { name, email, body } = props.details;
  return (
    <div className="border-2 border-black w-1/2 mx-auto">
      <div>
        <div>
          This will hold the image of the service but for now lets render email:
          {' '}
          {email}
        </div>
        <button>{'<'}</button>
      </div>
      <div>
        <h1>{name}</h1>
        <div>{body}</div>
        <button type="button">Book Reservation</button>
      </div>
    </div>
  );
}

export default ServiceDetails;
