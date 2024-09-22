import React from "react";
import EastIcon from "@mui/icons-material/East";
import { Box, Typography, Button } from "@mui/material";

const WorkWithUs = () => {
  return (
    <Box
      sx={{
        padding: { xs: "20px", md: "50px 80px" }, // Adjust padding for mobile and larger screens
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          backgroundColor: "black",
          padding: { xs: "30px 20px", md: "40px" }, // Adjust padding for mobile and desktop
          color: "#fff",
          borderRadius: 5,
          backgroundImage: `url('/assets/WorkWithUsBg.png')`, // Ensure the correct path to the image
          backgroundSize: "cover", // Make sure the image covers the entire area
          backgroundPosition: "center", // Position the image properly
        }}
      >
        {/* Headline */}
        <Typography
          sx={{
            fontSize: { xs: "24px", md: "35px" }, // Smaller font size on mobile, larger on desktop
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: "600",
            textAlign: { xs: "center", md: "left" }, // Center text on mobile, align left on larger screens
            marginBottom: { xs: "20px", md: "10px" }, // Add bottom margin to separate elements
          }}
        >
          Ready to work with us?
        </Typography>

        {/* Content Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // Stack items vertically on mobile, horizontally on desktop
            justifyContent: { xs: "center", md: "space-between" },
            alignItems: { xs: "center", md: "flex-start" }, // Align content to start on larger screens
            textAlign: { xs: "center", md: "left" }, // Center text on mobile
          }}
        >
          {/* Description Text */}
          <Typography
            sx={{
              fontSize: { xs: "12px", md: "14px" }, // Smaller font size for mobile
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              marginBottom: { xs: "20px", md: "0" }, // Add margin for spacing on mobile
              maxWidth: { xs: "100%", md: "60%" }, // Limit text width on larger screens
            }}
          >
            Get started today and join over hundreds of satisfied clients. Enter
            your email to join our community and stay updated with the latest
            trends and insights.
          </Typography>

          {/* Call-to-Action Button */}
          <Button
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: { xs: "0", md: "-25px" }, // No margin on mobile
              gap: 5,
              color: "#000",
              padding: { xs: "8px 12px", md: "10px 15px" }, // Smaller padding for mobile
              backgroundColor: "#fff",
              borderRadius: 10,
              textTransform: "capitalize",
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: "600",
              }}
            >
              Get Started
            </Typography>
            <EastIcon />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default WorkWithUs;
