import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (!loggedInUser) {
      alert('You must be logged in to access this page!');
      navigate('/signin');
    }
  }, [navigate]);

  return <>{children}</>;
};

export default ProtectedRoute;

                                      // @NavinMalakarCreation