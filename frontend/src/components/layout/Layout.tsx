import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box, Toolbar } from '@mui/material';
import Header from './Header';
import Sidebar from './Sidebar';
import { RootState } from '../../store';

const DRAWER_WIDTH = 240;

const Layout: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {isAuthenticated && (
        <>
          <Header drawerWidth={DRAWER_WIDTH} onDrawerToggle={handleDrawerToggle} />
          <Sidebar
            drawerWidth={DRAWER_WIDTH}
            mobileOpen={mobileOpen}
            onDrawerToggle={handleDrawerToggle}
          />
        </>
      )}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${isAuthenticated ? DRAWER_WIDTH : 0}px)` },
          ml: { sm: isAuthenticated ? `${DRAWER_WIDTH}px` : 0 },
        }}
      >
        {isAuthenticated && <Toolbar />}
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;