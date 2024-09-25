import { Box, Typography, Button } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import Image from "next/image";
import logo from "../../../public/assets/Id8Edge_logo.svg";

const PartnerSec = () => {
  return (
    <Box
      sx={{
        margin: "50px 0",
        padding: { xs: "20px", md: "50px 80px" },
        bgcolor: "white",
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Title and Subtitle */}
        <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "48px",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Partnership Details
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
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
          component="a" // Behaves like a link
          href="/" // Placeholder link
          sx={{
            display: "flex",
            gap: 1,
            color: "#000",
            border: "1px solid black",
            borderRadius: 10,
            textTransform: "capitalize",
            marginTop: { xs: "20px", md: "0" },
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
            Learn More
          </Typography>
          <EastIcon sx={{ marginRight: "10px" }} />
        </Button>
      </Box>

      {/* Partnership Logo and Text */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 1, sm: 3 },
          marginTop: "50px",
        }}
      >
        {/* Logo */}
        <Box>
          <Image src={logo} alt="Partnership Logo" width={100} height={100} />
        </Box>

        {/* Partnership Description */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "30px",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            We have collaborated with id8edge to provide you with the best
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              color: "#878C91",
              width: { md: "60ch" },
              paddingBottom: { xs: "8px", sm: "20px" },
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Optimize for search land it in region today shall be a cloudy day,
            thanks to blue sky thinking, we can now deploy our new UI to the
            cloud. Unlock meaningful moments of relaxation forcing function, or
            weaponize the data.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PartnerSec;
