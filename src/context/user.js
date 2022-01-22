import React, { useState } from 'react';

export const UserContext = React.createContext();

function User(props) {
  const [username, setUsername] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //if "continue as guest, keep "isLoggedIn" false

  const state = {
    username,
    setUsername,
    token,
    setToken,
    isLoggedIn,
    setIsLoggedIn,
  };

  return (
    <UserContext.Provider value={state}>{props.children}</UserContext.Provider>
  );
}

export default User;

// use "Async-Storage" instead of cookies for persistant login state in Native
// https://www.bigbinary.com/blog/handling-authentication-state-in-react-native
