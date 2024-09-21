"use client";

import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Drawer,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState<string>("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Update currentPath on client-side
  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawerContents = (
    <Box sx={{ width: 250, padding: 2 }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {["Home", "About", "Services", "Blog", "Contact"].map((text) => (
          <Link key={text} href={`/${text.toLowerCase()}`} passHref>
            <Typography
              component="span"
              sx={{
                ...navLinkStyle,
                borderBottom:
                  currentPath === `/${text.toLowerCase()}` ||
                  (currentPath === "/" && text === "Home")
                    ? "2px solid #020407"
                    : "none",
              }}
              onClick={handleDrawerToggle}
            >
              {text}
            </Typography>
          </Link>
        ))}
        <Link href="/login" passHref>
          <Button
            variant="contained"
            sx={{
              ...buttonStyle,
              backgroundColor: "black",
              color: "white",
              textTransform: "none",
              borderRadius: "20px",
              width: "100%",
              "&:hover": {
                backgroundColor: "#333",
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
              borderColor: "black",
              color: "black",
              textTransform: "none",
              borderRadius: "20px",
              width: "100%",
              "&:hover": {
                backgroundColor: "#f5f5f5",
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
    <Box sx={{ width: "100%", padding: { xs: "20px", md: "20px 80px" } }}>
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{ padding: 0 }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            paddingLeft: 0,
            paddingRight: 0,
            "@media (min-width: 600px)": {
              paddingLeft: 0, // Override padding at min-width 600px
              paddingRight: 0, // Override padding at min-width 600px
            },
          }}
        >
          {/* Logo Section */}
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <Link href="/" passHref>
              <Image
                src="/assets/alphaLogo.svg"
                alt="Logo"
                width={60}
                height={40}
                style={{ cursor: "pointer" }}
              />
            </Link>

            {/* Menu Links (after logo) */}
            {!isMobile && (
              <Box sx={{ display: "flex", gap: 4, marginLeft: "80px" }}>
                {["Home", "About", "Services", "Blog", "Contact"].map(
                  (text) => (
                    <Link key={text} href={`/${text.toLowerCase()}`} passHref>
                      <Typography
                        component="span"
                        sx={{
                          ...navLinkStyle,
                          borderBottom:
                            currentPath === `/${text.toLowerCase()}` ||
                            (currentPath === "/" && text === "Home")
                              ? "2px solid #020407"
                              : "none",
                        }}
                      >
                        {text}
                      </Typography>
                    </Link>
                  )
                )}
              </Box>
            )}
          </Box>

          {/* Login/Signup Buttons */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 2 }}>
              <Link href="/login" passHref>
                <Button
                  variant="contained"
                  sx={{
                    ...buttonStyle,
                    backgroundColor: "black",
                    color: "white",
                    textTransform: "none",
                    borderRadius: "20px",
                    "&:hover": {
                      backgroundColor: "#333",
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
                    borderColor: "black",
                    color: "black",
                    textTransform: "none",
                    borderRadius: "20px",
                    "&:hover": {
                      backgroundColor: "#f5f5f5",
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
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
                sx={{
                  marginLeft: "auto",
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
    </Box>
  );
};

// Responsive font sizes using rem
const navLinkStyle = {
  color: "inherit",
  textDecoration: "none",
  fontFamily: `'Plus Jakarta Sans', sans-serif`,
  cursor: "pointer",
  fontWeight: 600,
  fontSize: { xs: "0.875rem", sm: "1rem", md: "1.125rem" }, // Responsive font size in rem
};

const buttonStyle = {
  fontFamily: `'Plus Jakarta Sans', sans-serif`,
  minWidth: "120px",
  fontSize: { xs: "0.875rem", sm: "1rem", md: "1.125rem" }, // Responsive font size in rem
};

export default Navbar;
