import { Typography, Box, Button } from "@mui/material";
import Image from "next/image";

// Define the boxes data array
const boxesData = [
  {
    title: "Ideation tools",
    description: "Ai Wave - Ai Chatbot",
    image: "/assets/StartupImg1.png",
  },
  {
    title: "MVP Development",
    description: "Ai Wave - Ai Chatbot",
    image: "/assets/StartupImg2.png",
  },
  {
    title: "Organizational Support",
    description: "Ai Wave - Ai Chatbot",
    image: "/assets/StartupImg3.png",
  },
];

const Startup = () => {
  return (
    <Box sx={{ padding: { xs: "20px", md: "50px 80px" }, mb: 10 }}>
      <Box
        sx={{
          borderRadius: 10,
          backgroundImage: `url('/assets/startupbg.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          overflow: "hidden",
          padding: "50px 0",
        }}
      >
        {/* Text Content */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontWeight: 600,
              fontSize: { xs: "20px", sm: "24px", md: "35px" },
              fontFamily: `'Plus Jakarta Sans', sans-serif`,
              textAlign: "center",
            }}
          >
            Transform Your Startup Journey
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontWeight: 500,
              fontSize: "14px",
              textAlign: "center",
              fontFamily: `'Plus Jakarta Sans', sans-serif`,
              maxWidth: "600px",
            }}
          >
            From Ideation to MVP Development, AlphaEdge Solutions empowers your
            innovation journey with key features for success
          </Typography>

          {/* Buttons */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 3,
              marginTop: "10px",
              justifyContent: "center",
            }}
          >
            {["Ideation tools", "MVP Development", "Organizational Support"].map(
              (label, index) => (
                <Button
                  key={index}
                  sx={{
                    border: "1px solid white",
                    borderRadius: 5,
                    px: 3,
                    py: 1,
                    color: "#fff",
                    fontSize: "10px",
                    fontFamily: `'Plus Jakarta Sans', sans-serif`,
                    width: { xs: "100%", sm: "auto" },
                    textAlign: "center",
                  }}
                >
                  {label}
                </Button>
              )
            )}
          </Box>

          {/* Content Boxes */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 3,
              marginTop: "40px",
              color: "#fff",
              alignItems: "center",
              justifyContent: "center", // Center the boxes
              width: { xs: "90%", sm: "auto" }, // Set width to 90% on smaller screens
            }}
          >
            {boxesData.map((box, index) => (
              <Box
                key={index}
                sx={{
                  position: "relative",
                  width: { xs: "100%", sm: "321.86px" },
                  height: "321.86px",
                  borderRadius: 5,
                  marginTop: { xs: "20px", md: "40px" },
                  color: "#fff",
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    position: "absolute",
                    left: "10%",
                    top: "10%",
                    zIndex: 2, // Make sure it's above the overlay
                  }}
                >
                  <Box
                    sx={{
                      width: "50px",
                      borderBottom: "1px solid white",
                      marginRight: 1,
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontFamily: `'Plus Jakarta Sans', sans-serif`,
                    }}
                  >
                    {box.title}
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    position: "absolute",
                    bottom: "10%",
                    left: "10%",
                    fontWeight: 500,
                    fontSize: "18px",
                    fontFamily: `'Plus Jakarta Sans', sans-serif`,
                    zIndex: 2, // Make sure it's above the overlay
                  }}
                >
                  {box.description}
                </Typography>

                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 0, // Below text and overlay
                  }}
                >
                  <Image
                    src={box.image}
                    alt={box.title}
                    fill={true}
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Startup;
