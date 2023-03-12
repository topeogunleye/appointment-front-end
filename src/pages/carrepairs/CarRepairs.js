import React, { useEffect, useState } from 'react';
import './CarRepair.css';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Sidebar from '../../components/Sidebar/Sidebar';
import ServiceComponent from '../../components/ServiceComponent';
import { fetchServices } from '../../redux/carRepairServices';
import Carousel from '../../components/Carousel/Carousel';

const CarRepairs = () => {
  const dispatch = useDispatch();

  const images = [
    {
      id: 1,
      src: 'https://picsum.photos/200/200',
      alt: 'Image 1',
      text: 'Image 1',
      title: 'Repair 1',
      description: 'This is the description for image 1',
    },
    {
      id: 2,
      src: 'https://picsum.photos/200/200',
      alt: 'Image 2',
      text: 'Image 2',
      title: 'Repair 2',
      description: 'This is the description for image 2',
    },
    {
      id: 3,
      src: 'https://picsum.photos/200/200',
      alt: 'Image 3',
      text: 'Image 3',
      title: 'Repair 3',
      description: 'This is the description for image 3',
    },
    {
      id: 4,
      src: 'https://picsum.photos/200/200',
      alt: 'Image 4',
      text: 'Image 4',
      title: 'Repair 4',
      description: 'This is the description for image 4',
    },
    {
      id: 5,
      src: 'https://picsum.photos/200/200',
      alt: 'Image 5',
      text: 'Image 5',
      title: 'Repair 5',
      description: 'This is the description for image 5',
    },
    {
      id: 6,
      src: 'https://picsum.photos/200/200',
      alt: 'Image 6',
      text: 'Image 6',
      title: 'Repair 6',
      description: 'This is the description for image 6',
    },
    {
      id: 7,
      src: 'https://picsum.photos/200/200',
      alt: 'Image 7',
      text: 'Image 7',
      title: 'Repair 7',
      description: 'This is the description for image 7',
    },
  ];

  const { handleServiceClick } = props;

  const focusedService = (data) => {
    handleServiceClick(data);
  };

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  const services = useSelector((state) => state.services);
  console.log(services.services);

  const [index, setIndex] = useState(0);
  // const length = 500;
  const { length } = services.services;

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  const currentCarousel = [];
  if (!services.isLoading) {
    const carouselFirst = services.services[index];
    let carouselSecond;
    let carouselThird;

    if (index === length - 1) {
      [carouselSecond, carouselThird] = [
        services.services[0],
        services.services[1],
      ];
    } else if (index + 1 === length - 1) {
      [carouselSecond, carouselThird] = [
        services.services[index + 1],
        services.services[0],
      ];
    } else {
      [carouselSecond, carouselThird] = [
        services.services[index + 1],
        services.services[index + 2],
      ];
    }

    currentCarousel.push(carouselFirst);
    currentCarousel.push(carouselSecond);
    currentCarousel.push(carouselThird);

    console.log(currentCarousel);
  }

  return (
    <div className="grid grid-cols-custom">
      <Sidebar />
      <div className="grid items-center min-h-screen font-bold">
        <div className="grid place-items-center justify-center">
          <h1 className="text-black-600 text-2xl tracking-wider">LATEST SERVICES</h1>
          <p className="text-sm text-gray-400">Please select a new Service</p>
        </div>
        <Carousel images={images} />
      </div>
    </div>
  );
};

export default CarRepairs;
