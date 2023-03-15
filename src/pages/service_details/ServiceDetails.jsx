import React from 'react';
import './ServiceDetails.css';
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { useNavigate } from 'react-router-dom';

function ServiceDetails(props) {
  const navigate = useNavigate();
  console.log(props);

  const { service, photo, engineer, price, labour, duration, description } =
    props.details;

  console.log(photo);

  return (
    <div className="service-details-styles border-2 border-black w-1/2 flex justify-between pt-8">
      <div className="image-back-section">
        <div className="image-container">
          <img src={photo} alt={service} className="service-image" />
        </div>
        <button
          type="button"
          className="bg-green rounded-r-full w-12 p-1.5 back-button"
          onClick={() => {
            navigate('/CarRepairs');
          }}
        >
          <IconContext.Provider
            value={{ color: '#ffffff', className: 'global-class-name' }}
          >
            <FaIcons.FaCaretLeft />
          </IconContext.Provider>
        </button>
      </div>
      <div className="mx-auto flex flex-col pt-4 gap-y-5">
        <h1 className="self-end text-xl font-bold">{service}</h1>
        <p className="self-end">50% deposit</p>
        <table>
          <tbody>
            <tr>
              <td>Engineer</td>
              <td>{engineer}</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>
                {'$'}
                {price}
              </td>
            </tr>
            <tr>
              <td>Labour</td>
              <td>{labour}</td>
            </tr>
            <tr>
              <td>Duration</td>
              <td>{duration}</td>
            </tr>
            <tr>
              <td>Description</td>
              <td>{description}</td>
            </tr>
          </tbody>
        </table>

        <button
          type="button"
          className="bg-green text-white w-24 py-1.5 px-1 rounded-full self-end"
          onClick={() => {
            navigate('/AddReservationForm');
          }}
        >
          Book
        </button>
      </div>
    </div>
  );
}

export default ServiceDetails;
