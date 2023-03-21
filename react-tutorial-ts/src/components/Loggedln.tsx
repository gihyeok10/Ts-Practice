import React from "react";
import { useState } from "react";

const Loggedln = () => {
  const [isLoggedIn, setIsLoggendIn] = useState(false);
  const handleLogin = () => {
    setIsLoggendIn(true);
  };
  const handleLogout = () => {
    setIsLoggendIn(false);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User is {isLoggedIn ? "logeend in" : "logout"}</div>
    </div>
  );
};

export default Loggedln;
