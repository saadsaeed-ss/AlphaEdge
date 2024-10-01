import { Box, Typography, Button } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Image from "next/image";
import img from "../../../public/assets/edgeSecImg.png";

const EdgeSec = () => {
  return (
    <Box
      sx={{
        marginTop: "40px",
        padding: { xs: "20px", md: "50px 80px" }, // Applied padding to the Box
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "center", md: "center" }, // Center align for all screens
            justifyContent: "space-between", // Space between title and button
          }}
        >
          {/* Title and Subtitle */}
          <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize:  "48px", // Reduced size on smaller screens
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              What is Id8Edge?
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" }, // Adjust subtitle size for smaller screens
                color: "#878C91",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                marginTop: "10px",
              }}
            >
              From Ideation to MVP Development
            </Typography>
          </Box>

          {/* CTA Button */}
          <Button
            component="a" // Ensures the button behaves like a link
            href="/" // Placeholder link, replace with the correct one
            sx={{
              display: "flex",
              gap: 1,
              color: "#000",
              border: "1px solid black",
              borderRadius: 10,
              textTransform: "capitalize",
              marginTop: { xs: "20px", md: "0" }, // Keep margin for smaller screens
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                padding: "5px 20px",
              }}
            >
              Get a Quote
            </Typography>
            <EastIcon
              sx={{
                marginRight: "10px",
              }}
            />
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            marginTop: { xs: "0px", sm: "20px" },
            width: "100%", // Ensure the entire container is 100% width
            alignItems: { xs: "center", md: "flex-start" }
          }}
        >
          {/* Image Section */}
          <Box
            sx={{
              width: { xs: "100%", sm: "80%", md: "50%" }, // Set width to 100% for xs, and 50% for sm and above
              order: { xs: 1, sm: 1, md: 2 }, // Ensure image comes first on small screens
              margin: { xs: "50px 0", md: "auto" },
            }}
          >
            <Image
              src={img}
              alt="Service Image"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              order: { xs: 2, sm: 1 }, // Content comes second on small screens
              width: { xs: "100%", md: "50%" }, // Set width to 100% for xs, and 50% for sm and above
              marginTop: { sm: "20px", md: "40px" },
              alignItems: { xs: "center", md: "flex-start" }
            }}
          >
            {/* First Section */}
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <KeyboardDoubleArrowRightIcon
                  sx={{
                    display: { xs: "block" }, // Ensure arrow is visible on all screen sizes
                  }}
                />
                <Typography
                  sx={{
                    color: "#000",
                    fontWeight: 600,
                    fontSize: { xs: "20px", md: "24px" }, // Adjust heading size for smaller screens
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  Integrate Comprehensive Business Data
                </Typography>
              </Box>
              <Typography
                sx={{
                  color: "#878C91",
                  fontSize: { xs: "14px", md: "16px" }, // Adjust font size
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  paddingLeft: { xs: 0, md: "32px" }, // Content aligned under heading
                }}
              >
                We are a passionate team of digital marketing enthusiasts
                dedicated to
              </Typography>
            </Box>

            {/* Second Section */}
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <KeyboardDoubleArrowRightIcon
                  sx={{
                    display: { xs: "block" }, // Ensure arrow is visible on all screen sizes
                  }}
                />
                <Typography
                  sx={{
                    color: "#000",
                    marginTop: "10px",
                    fontWeight: 600,
                    fontSize: { xs: "20px", md: "24px" }, // Adjust heading size for smaller screens
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  Receive Intelligent Recommendations
                </Typography>
              </Box>
              <Typography
                sx={{
                  color: "#878C91",
                  fontSize: { xs: "14px", md: "16px" }, // Adjust font size
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  paddingLeft: { xs: 0, md: "32px" }, // Content aligned under heading
                }}
              >
                We are a passionate team of digital marketing enthusiasts
                dedicated to
              </Typography>
            </Box>

            {/* Third Section */}
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <KeyboardDoubleArrowRightIcon
                  sx={{
                    display: { xs: "block" }, // Ensure arrow is visible on all screen sizes
                  }}
                />
                <Typography
                  sx={{
                    color: "#000",
                    marginTop: "10px",
                    fontWeight: 600,
                    fontSize: { xs: "20px", md: "24px" }, // Adjust heading size for smaller screens
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  Act, Implement & Monitor Progress
                </Typography>
              </Box>
              <Typography
                sx={{
                  color: "#878C91",
                  fontSize: { xs: "14px", md: "16px" }, // Adjust font size
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  paddingLeft: { xs: 0, md: "32px" }, // Content aligned under heading
                }}
              >
                We are a passionate team of digital marketing enthusiasts
                dedicated to
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EdgeSec;
