"use client";

import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, Drawer, IconButton, useMediaQuery, useTheme } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';

const navLinkStyle = {
  color: 'inherit',
  textDecoration: 'none',
  cursor: 'pointer',
  fontFamily: `'Plus Jakarta Sans', sans-serif`,
  fontWeight: 600,
};

const buttonStyle = {
  fontFamily: `'Plus Jakarta Sans', sans-serif`,
  minWidth: '120px',
};

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawerContents = (
    <Box sx={{ width: 250, padding: 2 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {['Home', 'About', 'Services', 'Blog', 'Contact'].map((text) => (
          <Link key={text} href={`/${text.toLowerCase()}`} passHref>
            <Typography component="span" sx={navLinkStyle} onClick={handleDrawerToggle}>
              {text}
            </Typography>
          </Link>
        ))}
        <Link href="/login" passHref>
          <Button
            variant="contained"
            sx={{
              ...buttonStyle,
              backgroundColor: 'black',
              color: 'white',
              textTransform: 'none',
              borderRadius: '20px',
              width: '100%',
              '&:hover': {
                backgroundColor: '#333',
              },
            }}
            onClick={handleDrawerToggle}
          >
            Login
          </Button>
        </Link>
        <Link href="/signup" passHref>
          <Button
            variant="outlined"
            sx={{
              ...buttonStyle,
              borderColor: 'black',
              color: 'black',
              textTransform: 'none',
              borderRadius: '20px',
              width: '100%',
              '&:hover': {
                backgroundColor: '#f5f5f5',
              },
            }}
            onClick={handleDrawerToggle}
          >
            Sign Up
          </Button>
        </Link>
      </Box>
    </Box>
  );

  return (
    <Container maxWidth="xl" sx={{ paddingTop: '20px' }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          {/* Logo Section */}
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Link href="/" passHref>
              <Image
                src="/assets/alphaLogo.svg"
                alt="Logo"
                width={60}
                height={40}
                style={{ cursor: 'pointer' }}
              />
            </Link>

            {/* Menu Links (after logo) */}
            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 4, marginLeft: '80px' }}>
                {['Home', 'About', 'Services', 'Blog', 'Contact'].map((text) => (
                  <Link key={text} href={`/${text.toLowerCase()}`} passHref>
                    <Typography component="span" sx={navLinkStyle}>
                      {text}
                    </Typography>
                  </Link>
                ))}
              </Box>
            )}
          </Box>

          {/* Login/Signup Buttons */}
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Link href="/login" passHref>
                <Button
                  variant="contained"
                  sx={{
                    ...buttonStyle,
                    backgroundColor: 'black',
                    color: 'white',
                    textTransform: 'none',
                    borderRadius: '20px',
                    '&:hover': {
                      backgroundColor: '#333',
                    },
                  }}
                >
                  Login
                </Button>
              </Link>
              <Link href="/signup" passHref>
                <Button
                  variant="outlined"
                  sx={{
                    ...buttonStyle,
                    borderColor: 'black',
                    color: 'black',
                    textTransform: 'none',
                    borderRadius: '20px',
                    '&:hover': {
                      backgroundColor: '#f5f5f5',
                    },
                  }}
                >
                  Sign Up
                </Button>
              </Link>
            </Box>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
                sx={{
                  marginLeft: 'auto', // Align it to the right
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          )}

          {/* Drawer for Mobile */}
          <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
            {drawerContents}
          </Drawer>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Navbar;
