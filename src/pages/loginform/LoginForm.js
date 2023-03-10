import React, { useState } from 'react';
import PropTypes from 'prop-types';

function LoginForm(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (evt) => {
    setUsername(evt.target.value);
  };

  const handlePasswordChange = (evt) => {
    setPassword(evt.target.value);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await fetch('http://[::1]:8000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        // localStorage.setItem('token', data.jwt);
        // props.handleLogin(data.user);
      });
    // setUsername('');
    // setPassword('');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-2/3 bg-gray-100 rounded-lg p-8">
        <h1 className="text-2xl mb-4">Log In</h1>
        <form className="ui form" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block font-bold mb-2">Username</label>
            <input 
              id="username"
              value={username} 
              onChange={handleUsernameChange}
              type="text"
              placeholder="username"
              className="block appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-bold mb-2">Password</label>
            <input 
              id="password"
              value={password} 
              onChange={handlePasswordChange} 
              type="password" 
              placeholder="password"
              className="block appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
};

export default LoginForm;
