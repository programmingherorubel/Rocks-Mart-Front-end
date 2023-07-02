import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Loading from '../Components/Loading';
import { Navigate, useLocation } from 'react-router-dom';

const RequiredRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (user?.email) {
    return <>{children}</>; // Use {children} instead of Children
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default RequiredRoute;