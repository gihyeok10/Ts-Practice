import React, { useState } from "react";
type AuthUser = {
  name: string;
  email: string;
};
const User = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogin = () => {
    setUser({
      name: "Vishwas",
      email: "fg9812301@naver.com",
    });
  };
  //  제네릭 사용.
  const handleLogOut = () => {
    setUser({ name: "s", email: "s" });
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogOut}>Logout</button>
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </div>
  );
};

export default User;
