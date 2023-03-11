import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceComponent = (props) => {
  const navigate = useNavigate();

  const { focusedService } = props;
  const { name, email, body } = props.service;
  console.log(props);
  return (
    <div
      onClick={() => {
        navigate('/service_details');
        focusedService(props.service);
      }}
    >
      <p>{name}</p>
      <p>{email}</p>
      <p>{body}</p>
    </div>
  );
};

export default ServiceComponent;
