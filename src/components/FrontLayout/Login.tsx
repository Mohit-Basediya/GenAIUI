import React, { useState } from 'react';
import './Login.css';
import logo from '../../images/logo.png'

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch("https://inteligenius.azurewebsites.net/generate_token_UI", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      localStorage.setItem("token", data.access_token);
      localStorage.setItem("username", username);

      window.location.href = "Home";
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      setMessage("Login failed. Please try again.");
    }
  };

  return (
    <div className="login-body">
      <div className="login-header">
        <img src={logo} alt="ALM Logo" />
      </div>
      <div className="login-page">
        <div className="login-container">
          <div className="login-img-container">
            <h2 className="app-name-label">InteliGenius</h2>
          </div>
          <form id="loginForm" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                id="username"
                name="username"
                required
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                id="password"
                name="password"
                required
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="login-submit-btn" type="submit">Login</button>
          </form>
          <div id="message" className="message">{message}</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
