import React from "react";
import { Box, Typography, Button, LinearProgress } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image"; // Import Next.js Image component

const HeroSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        padding: { xs: "20px", md: "50px 80px" },
        margin: 0,
        mb: 10,
        mt: 5,
      }}
    >
      {/* First Column */}
      <Box
        sx={{
          flex: 1.2,
          textAlign: { xs: "center", md: "left" },
          mb: { xs: 6, md: 0 },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "600",
            mb: 4,
            fontFamily: `'Plus Jakarta Sans', sans-serif`,
            fontSize: {
              xs: "2.25rem",
              sm: "3rem",
              md: "3.75rem",
              lg: "4.5rem",
            }, // Using rem
          }}
        >
          Welcome to <br />
          AlphaEdge Solutions
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 4,
            fontFamily: `'Plus Jakarta Sans', sans-serif`,
            color: "#878C91",
            width: { xs: "100%", md: "90%" },
          }}
        >
          Empowering Entrepreneurs from Concept to Creation with Innovative
          Tools and Expert Support
        </Typography>

        <Button
          variant="contained"
          color="primary"
          sx={{
            mb: 4,
            fontFamily: `'Plus Jakarta Sans', sans-serif`,
            backgroundColor: "black",
            color: "white",
            borderRadius: 50,
            padding: "10px 24px",
            display: "flex",
            alignItems: "center",
            gap: 2,
            fontSize: { xs: "0.875rem", md: "1rem" },
            mx: { xs: "auto", md: "0" },
            textTransform: "none",
          }}
          endIcon={<ArrowForwardIcon />}
        >
          Get Started
        </Button>

        {/* Satisfied Clients Image and Text */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mt: { xs: 5, md: 12 },
            justifyContent: { xs: "center", md: "flex-start" },
            mb: { xs: 2, md: 0 },
          }}
        >
          <Image
            src="/assets/clients.png"
            alt="Client"
            width={70}
            height={50}
            style={{ marginRight: 16 }}
          />
          <Typography
            variant="body1"
            sx={{
              fontFamily: `'Plus Jakarta Sans', sans-serif`,
              fontWeight: "bold",
              fontSize: { xs: "1rem", md: "1.25rem" },
            }}
          >
            15,300+ <br /> Satisfied Clients
          </Typography>
        </Box>
      </Box>

      {/* Second Column */}
      <Box sx={{ flex: 1 }}>
        {/* First Row - Image and Box */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "center", md: "stretch" },
            mb: 2,
            width: "100%",
          }}
        >
          {/* Image */}
          {/* Image */}
<Box
  sx={{
    display: "flex",
    padding: { xs: "0 0 20px 0", md: "0 20px 0 0" },
    flex: 1.2,
    width: { xs: "80%", sm: "50%", md: "50%" },
  }}
>
  <Image
    src="/assets/heroSecImg1.png"
    alt="Laptop Working"
    width={500} // Original width
    height={300} // Original height
    style={{
      maxWidth: "100%", // Ensure it doesn't exceed the container width
      objectFit: "contain", // Maintains aspect ratio
    }}
    priority // Optional for hero images
  />
</Box>


          {/* Colored Box with Title and Content */}
          <Box
            sx={{
              flex: 1,
              backgroundColor: "#F0F0F0",
              color: "black",
              borderRadius: 2,
              p: 3,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: { xs: "100%" },
            }}
          >
            <Box>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: "bold",
                  mb: 1,
                  fontFamily: `'Plus Jakarta Sans', sans-serif`,
                  fontSize: {
                    xs: "2.25rem",
                    sm: "3rem",
                    md: "3.75rem",
                    lg: "4.5rem",
                  }, // Using rem
                }}
              >
                230+
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: `'Plus Jakarta Sans', sans-serif`,
                  color: "#5C5D5F",
                  fontSize: { xs: "0.875rem", md: "1rem" },
                }}
              >
                some big companies that we work with, and trust us very much
              </Typography>
            </Box>

            {/* Progress Bar */}
            <Box sx={{mt:5}}>
              <Box sx={{ width: "100%" }}>
                <LinearProgress
                  variant="determinate"
                  value={70}
                  sx={{
                    height: 7,
                    backgroundColor: "#E0E0E0",
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: "black",
                    },
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Second Row - New Background Box */}
        <Box
          sx={{
            display: "flex",
            // flexDirection: { xs: "column", sm: "row", md: "row" },
            backgroundColor: "#010205",
            backgroundImage: "url(/assets/trafficBg.png)",
            backgroundSize: "cover",
            backgroundPosition: "left center",
            backgroundRepeat: "no-repeat",
            padding: "20px 20px 0 20px",
            borderRadius: 2,
            color: "white",
            alignItems: "flex-start",
          }}
        >
          {/* Left Column with background image */}
          <Box
            sx={{
              flex: 2,
              pr: { xs: 0, md: 4 },
              borderRadius: 2,
              padding: "20px 20px 0",
            }}
          >
            {/* Horizontal Line and Title */}
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Box
                sx={{ height: 2, width: 50, backgroundColor: "#FFFFFF", mr: 2 }}
              />
              <Typography
                variant="body2"
                sx={{
                  fontFamily: `'Plus Jakarta Sans', sans-serif`,
                  fontSize: "0.875rem",
                }}
              >
                Drive More Traffic and Sales
              </Typography>
            </Box>
            <Typography
              variant="h5"
              sx={{
                fontFamily: `'Plus Jakarta Sans', sans-serif`,
                fontWeight: "600",
                fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" }, // Using rem
              }}
            >
              Drive more traffic and product sales
            </Typography>
          </Box>

          {/* Right Column */}
          <Box
            sx={{
              flex: 0.8,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              height: "200px",
              gap: 1,
              mt: { xs: 3, md: 0 },
            }}
          >
            {/* Three Vertical Bars */}
            <Box sx={{ width: 50, height: 70, backgroundColor: "#BAE289" }} />
            <Box sx={{ width: 50, height: 100, backgroundColor: "#99CF63" }} />
            <Box sx={{ width: 50, height: 130, backgroundColor: "#77B248" }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
