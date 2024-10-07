import React, { useState } from "react";
import axios from "axios";
import { useAuthContext } from "./context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null); // Token state
  const {login} = useAuthContext()
    const handleSubmit =  (e) => {
        e.preventDefault();
        
        login(username,password)

        
    };

    



  return (
    <div>
      <h2>Login</h2>
      {isLoggedIn ? (
        <div>
          <p>Welcome! You are logged in.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default Login;
