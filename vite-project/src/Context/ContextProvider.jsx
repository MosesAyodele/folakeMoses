// import React, { createContext, useState } from 'react';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const login = () => setIsAuthenticated(true);
//   const logout = () => setIsAuthenticated(false);

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };


import React, { createContext, useState, useContext } from 'react';

export const AuthContext = createContext();

const usersDB = []; 

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const register = (user) => {
    usersDB.push(user);
    setCurrentUser(user);
    setIsAuthenticated(true);
  };

  const login = (email, password) => {
    const user = usersDB.find(u => u.email === email && u.password === password);
    if (user) {
      setCurrentUser(user);
      setIsAuthenticated(true);
    } else {
      alert('User not found');
    }
  };

  const logout = () => {
    setCurrentUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, currentUser, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};