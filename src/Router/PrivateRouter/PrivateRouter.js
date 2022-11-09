import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import GridLoader from "react-spinners/GridLoader";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation()

  if (loading) {
    return <>
      <GridLoader
        color={`#50DBB4`}
        loading={loading}
        size={50}
        className='text-center'
      />
    </>
  }

  if (user) {
    return children;
  }
  return <Navigate to='/login' state={{ from: location }}></Navigate>

};

export default PrivateRouter;