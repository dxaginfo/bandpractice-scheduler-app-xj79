import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Box } from '@mui/material';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Calendar from './pages/Calendar';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import BandManagement from './pages/BandManagement';
import VenueManagement from './pages/VenueManagement';
import SetlistManagement from './pages/SetlistManagement';
import AttendanceTracking from './pages/AttendanceTracking';
import ProfileSettings from './pages/ProfileSettings';
import ProtectedRoute from './components/auth/ProtectedRoute';

const App: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="calendar"
            element={
              <ProtectedRoute>
                <Calendar />
              </ProtectedRoute>
            }
          />
          <Route
            path="bands"
            element={
              <ProtectedRoute>
                <BandManagement />
              </ProtectedRoute>
            }
          />
          <Route
            path="venues"
            element={
              <ProtectedRoute>
                <VenueManagement />
              </ProtectedRoute>
            }
          />
          <Route
            path="setlists"
            element={
              <ProtectedRoute>
                <SetlistManagement />
              </ProtectedRoute>
            }
          />
          <Route
            path="attendance"
            element={
              <ProtectedRoute>
                <AttendanceTracking />
              </ProtectedRoute>
            }
          />
          <Route
            path="profile"
            element={
              <ProtectedRoute>
                <ProfileSettings />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </Box>
  );
};

export default App;