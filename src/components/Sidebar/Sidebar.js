import { useEffect, useState, useRef } from 'react';
import * as FaIcons from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Image from '../../images/image.png';
import SidebarData from './SidebarData';
import './Sidebar.css';

const useClickOutside = (handler) => {
  const domNode = useRef();

  useEffect(() => {
    const maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener('mousedown', maybeHandler);

    return () => {
      document.removeEventListener('mousedown', maybeHandler);
    };
  });

  return domNode;
};

export default function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const domNode = useClickOutside(() => {
    setSidebar(false);
  });

  return (
    <div className="sidebar transition-all duration-1000 ease-out">
      <button type="button" className="menu-bars ml-4 md:ml-8 text-2xl sm:text-3xl sm:collapse">
        <FaIcons.FaBars onClick={showSidebar} />
      </button>
      <div className="grid items-center w-full">
        <img src={Image} alt="logo" className="w-10 h-10" />
      </div>
      <nav ref={domNode} className={sidebar ? 'nav-menu active bg-white' : 'nav-menu'}>
        <ul className="nav-menu-items my-32">
          {SidebarData.map((item, index) => (
            <li key={index} className={item.cName}>
              <NavLink to={item.path}>
                <span className="item-title">{item.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="social-media flex justify-between w-3/5 absolute bottom-2 left-3">
          <a
            href="https://github.com/topeogunleye
                "
            className="fa fa-github"
            target="blank"
          >
            <FaIcons.FaGithub />
          </a>
          <a
            href="https://web.facebook.com/topeogunleye21
            "
            className="fa fa-facebook"
            target="blank"
          >
            <FaIcons.FaFacebook />
          </a>
          <a
            href="https://twitter.com/topeogunleye21
            "
            className="fa fa-twitter"
            target="blank"
          >
            <FaIcons.FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/ogunleye
            "
            className="fa fa-linkedin"
            target="blank"
          >
            <FaIcons.FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/topeogunleye1/
            "
            className="fa fa-instagram"
            target="blank"
          >
            <FaIcons.FaInstagram />
          </a>
        </div>
      </nav>
    </div>
  );
}
