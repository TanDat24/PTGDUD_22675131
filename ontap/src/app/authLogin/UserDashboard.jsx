import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './userSlice';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const user = useSelector((state) => state.user.user);

  if (!user) {
    return (
      <div>
        <h2>You are not logged in.</h2>
        <p>Please log in to access the dashboard.</p>
      </div>
    );
  }

  const handleLogout = () => {
    dispatch(logout());
    navigate('/auth/login');  
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Welcome, {user?.email}</h2>
      <p>You're logged in!</p>
      <button
        onClick={handleLogout}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default UserDashboard;
