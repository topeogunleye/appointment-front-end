import React, { useEffect } from 'react';
import './ServiceDetails.css';
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../../components/Sidebar/Sidebar';
import { fetchServiceById } from '../../redux/serviceSlice';

const ServiceDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const service = useSelector((state) => state.services.services[0]);

  useEffect(() => {
    dispatch(fetchServiceById(id));
  }, [dispatch, id]);

  if (!service) {
    return <div>Loading...</div>;
  }

  const {
    photo, engineer, price, labour, duration, description,
  } = service;

  return (
    <div className="grid lg:grid-cols-custom">
      <Sidebar />
      <div className="service-details-styles w-1/2 flex justify-between pt-8">
        <div className="image-back-section">
          <div className="image-container ml-5">
            <img src={photo} alt={service} className="service-image" />
          </div>
          <button
            type="button"
            className="bg-green rounded-r-full w-12 p-1.5 back-button float-left mt-5"
            onClick={() => {
              navigate('/CarRepairs');
            }}
          >
            <IconContext.Provider value={{ color: '#ffffff', className: 'global-class-name' }}>
              <FaIcons.FaCaretLeft />
            </IconContext.Provider>
          </button>
        </div>
        <div className="mx-auto flex flex-col pt-4 gap-y-5">
          <h1 className="self-end text-xl font-bold">{service.service}</h1>
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
                  $
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
              navigate('/AddService');
            }}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
