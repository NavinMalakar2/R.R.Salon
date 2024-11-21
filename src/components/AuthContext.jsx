import React, { createContext, useState, useContext } from 'react';

// Create Context
const AuthContext = createContext();

// Custom Hook to use AuthContext
export const useAuth = () => useContext(AuthContext);

// AuthProvider Component
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('user'));

  const login = () => {
    localStorage.setItem('user', JSON.stringify({ email: 'user@example.com' }));
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

                                      // @NavinMalakarCreation