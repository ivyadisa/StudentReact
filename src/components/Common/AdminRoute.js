// src/components/Common/AdminRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const AdminRoute = ({ element, ...rest }) => {
  const isAdmin = true; // Replace this with actual admin check logic

  return isAdmin ? element : <Navigate to="/" />;
};

export default AdminRoute;
