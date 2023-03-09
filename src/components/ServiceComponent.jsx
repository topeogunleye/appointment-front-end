import React from 'react';

const ServiceComponent = (props) => {
  const { name, email, body } = props.service;
  console.log(props);
  return (
    <div>
      <p>{name}</p>
      <p>{email}</p>
      <p>{body}</p>
    </div>
  );
};

export default ServiceComponent;
