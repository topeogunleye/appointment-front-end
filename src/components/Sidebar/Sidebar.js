import { useState } from 'react';
import Image from '../../images/image.png';
import * as FaIcons from 'react-icons/fa';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="grid align-items-center w-64 h-screen px-4 py-8 bg-white border-2 border-rose-600 sticky">
    <div className="grid align-items-center">
      <img src={Image} alt="logo" className="" />
      <h1 className="mt-2 text-white font-bold text-lg">Company Name</h1>
    </div>
    <nav className="flex flex-col">
      <a
        href="#"
        className="text-gray-900 hover:bg-green-300 hover:text-white py-2 px-4 text-lg font-bold"
      >
        RESERVE
      </a>
      <a
        href="#"
        className="text-gray-900 hover:bg-green-300 hover:text-white py-2 px-4 mt-2 text-lg font-bold"
      >
        MY RESEVATIONS
      </a>
      <a
        href="#"
        className="text-gray-900 hover:bg-green-300 hover:text-white py-2 px-4 mt-2 text-lg font-bold"
      >
        ADD CAR REPAIR
      </a>
      <a
      href="#"
      className="text-gray-900 hover:bg-green-300 hover:text-white py-2 px-4 mt-2 text-lg font-bold"
    >
      REMOVE CAR REPAIR
    </a>

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
