import { useState } from 'react';
import Image from '../../images/image.png';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="grid align-items-center w-64 h-screen px-4 py-8 bg-white border-r border-gray-500 sticky">
      <div className="flex justify-center w-full">
        <img src={Image} alt="logo" className="w-10 h-10" />
      </div>
      <nav className="flex flex-col">
        <Link
          to="/reservenewform/"
          className="text-gray-900 hover:bg-green-300 hover:text-white py-2 px-4 text-lg font-bold"
        >
          RESERVE
        </Link>
        <Link
          to="/resevations"
          className="text-gray-900 hover:bg-green-300 hover:text-white py-2 px-4 mt-2 text-lg font-bold"
        >
          MY RESEVATIONS
        </Link>
        <Link
          to="addcarrepairform"
          className="text-gray-900 hover:bg-green-300 hover:text-white py-2 px-4 mt-2 text-lg font-bold"
        >
          ADD CAR REPAIR
        </Link>
        <Link
          to="removecarrepairform"
          className="text-gray-900 hover:bg-green-300 hover:text-white py-2 px-4 mt-2 text-lg font-bold"
        >
          REMOVE CAR REPAIR
        </Link>

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
