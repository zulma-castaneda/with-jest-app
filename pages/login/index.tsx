// LoginPage.tsx
import React, { useState } from 'react';
import './LoginPage.scss';
import TextInput from '../../components/TextInput';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    console.log('Logging in with username:', username, 'and password:', password);
    setIsLoggedIn(true);

  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="login-heading">Welcome</h2>
        <TextInput
          label="Username"
          id="username"
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={handleUsernameChange}
        />
        <TextInput
          label="Password"
          id="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>

        {isLoggedIn && <p>You logged in as {username}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
