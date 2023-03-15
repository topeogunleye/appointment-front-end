import React from 'react';
import {
  FaCog, FaSearch, FaChevronRight,
} from 'react-icons/fa';
import { IconContext } from 'react-icons';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Homepage.css';

const Homepage = () => (
  <div className="grid lg:grid-cols-custom">
    <Sidebar />
    <div className="homepage static">
      <div className="background-image" />
      <h1 className="tracking-widest leading-[2] text-white text-[45px] font-bold">BAREFOOT MECHANICS</h1>
      <div className="button-container">
        <button type="button" className="configure-button">
          <FaCog className="settings-icon" />
          Configure
          <FaChevronRight className="right-caret-icon" />
        </button>
      </div>
      <div className="search-container absolute top-1 right-1 bg-white rounded-full p-1.5 w-12">
        <IconContext.Provider value={{ color: 'orange', className: 'global-class-name' }}>
          <FaSearch className="search-icon" size={26} />
        </IconContext.Provider>
      </div>
      <div className="loading-icon">
        <div className="dot1" />
        <div className="dot2" />
        <div className="dot3" />
        <div className="dot4" />
      </div>
    </div>
  </div>
);

export default Homepage;
