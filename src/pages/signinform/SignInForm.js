import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../../redux/auth/authSlice';

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleUsernameChange = (evt) => {
    setUsername(evt.target.value);
  };

  const handlePasswordChange = (evt) => {
    setPassword(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(signup({ username, password }))
      .then((result) => {
        if (result.payload) {
          // successful sign up, handle user data
        } else {
          // failed sign up, handle error
        }
      });
    setUsername('');
    setPassword('');
  };

  return (
    <div className="mx-auto p-8 w-80">
      <h1 className="text-xl font-bold mb-4">Sign Up</h1>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username-input" className="block text-gray-700 font-bold mb-2">
            Username
            <input
              id="username-input"
              value={username}
              onChange={handleUsernameChange}
              type="text"
              placeholder="username"
              className="border border-gray-400 p-2 w-full rounded-lg"
            />
          </label>
        </div>
        <div className="mb-4">
          <label htmlFor="password-input" className="block text-gray-700 font-bold mb-2">
            Password
            <input
              id="password-input"
              value={password}
              onChange={handlePasswordChange}
              type="password"
              placeholder="password"
              className="border border-gray-400 p-2 w-full rounded-lg"
            />
          </label>
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
