import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation()

  if (loading) {
    return <h2>Loading</h2>
  }

  if (user) {
    return children;
  }
  return <Navigate to='/login' state={{ from: location }}></Navigate>

};

export default PrivateRouter;