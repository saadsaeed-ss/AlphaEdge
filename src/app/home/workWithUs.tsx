import React from "react";
import EastIcon from "@mui/icons-material/East";
import { Box, Typography, Button } from "@mui/material";

const WorkWithUs = () => {
  return (
    <Box
      sx={{
        padding: { xs: "20px", md: "50px 80px" }, 
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          backgroundColor: "black",
          padding: { xs: "30px 20px", md: "40px" }, 
          color: "#fff",
          borderRadius: 5,
          backgroundImage: `url('/assets/WorkWithUsBg.png')`, 
          backgroundSize: "cover", 
          backgroundPosition: "center", 
        }}
      >
        {/* Headline */}
        <Typography
          sx={{
            fontSize: { xs: "24px", md: "35px" }, // Smaller font size on mobile, larger on desktop
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: "600",
            textAlign: { xs: "center", md: "left" },
            marginBottom: { xs: "20px", md: "10px" },
          }}
        >
          Ready to work with us?
        </Typography>

        {/* Content Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: { xs: "center", md: "space-between" },
            alignItems: { xs: "center", md: "flex-start" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {/* Description Text */}
          <Typography
            sx={{
              fontSize: { xs: "12px", md: "14px" },
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              marginBottom: { xs: "20px", md: "0" },
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
              marginTop: { xs: "0", md: "-25px" },
              gap: 5,
              color: "#000",
              padding: { xs: "8px 12px", md: "10px 15px" },
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
