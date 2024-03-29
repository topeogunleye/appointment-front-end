import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/auth/authSlice';

const LoginForm = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleUsernameChange = (evt) => {
    setUsername(evt.target.value);
  };

  const handlePasswordChange = (evt) => {
    setPassword(evt.target.value);
  };

  useEffect(() => {
    if (status === 'succeeded') {
      navigate('/');
    }
  }, [status, navigate]);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    dispatch(login({ username, password })).then((result) => {
      if (result.payload) {
        localStorage.setItem('token', result.payload.jwt);
        handleLogin(result.payload.user);
      }
    });
  };

  const isLoading = status === 'loading';

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-2/3 bg-gray-100 rounded-lg p-8">
        <h1 className="text-2xl mb-4">Log In</h1>
        <form className="ui form" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block font-bold mb-2">
              Username
              <input
                id="username"
                value={username}
                onChange={handleUsernameChange}
                type="text"
                placeholder="username"
                className="block appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </label>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-bold mb-2">
              Password
              <input
                id="password"
                value={password}
                onChange={handlePasswordChange}
                type="password"
                placeholder="password"
                className="block appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </label>
          </div>
          <div className="flex flex-col justify-between items-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {isLoading ? 'Loading' : 'Log In'}
            </button>
            {error && <p className="text-red-500">{error}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
};

export default LoginForm;
