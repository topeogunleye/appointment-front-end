import { useEffect, useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import * as FaIcons from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import { login, clearAuthState } from '../../redux/auth/authSlice';
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
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleSignIn = async () => {
    const credentials = { username: 'User', password: 'secret' }; // replace with your own login form data
    await dispatch(login(credentials));
  };

  const handleSignOut = () => {
    dispatch(clearAuthState());
  };

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const domNode = useClickOutside(() => {
    setSidebar(false);
  });

  return (
    <div className="py-2 pl-2 static border-r border-gray-600 z-10">
      <div className="transition-all duration-1000 ease-out">
        <NavLink to="#" className="menu-bars ml-4 md:ml-8 text-2xl sm:text-3xl">
          <FaIcons.FaBars onClick={showSidebar} />
        </NavLink>
      </div>
      <nav
        className={sidebar ? 'nav-menu active' : 'nav-menu'}
        ref={domNode}
      >
        <ul className="nav-menu-items">
          <div className="w-full grid place-items-center transition-all duration-1000 ease-out p-4">
            <div className="mt-4 mb-8 flex justify-items-center items-center">
              <NavLink to="/">
                <div
                  className="font-black text-2xl logo-signature mx-auto logo"
                >
                  <img src={logo} alt="logo" className="w-20" />
                </div>
              </NavLink>
            </div>
          </div>
          {SidebarData.map((item) => (
            <li key={uuidv4()} className={item.cName}>
              <NavLink
                to={item.path}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? '#97bf0f' : '#ffffff',
                  color: isActive ? '#ffffff' : '#000000',
                })}
              >
                <span className="item-title uppercase font-bold text-sm">{item.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="dev-info transition-all duration-1000 ease-out">
          <div className="text-center my-6">
            {user ? (
              <button type="button" onClick={handleSignOut}>Sign Out</button>
            ) : (
              <button type="button" onClick={handleSignIn}>Sign In</button>
              // <NavLink className="option" to="/loginsignup/">
              //   SIGN IN
              // </NavLink>
            )}
          </div>
          <div className="social-media inline-block">
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
        </div>
      </nav>

    </div>
  );
}
