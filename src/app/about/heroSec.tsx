import { Box, Typography, Avatar } from "@mui/material";

const HeroSection = () => {
  return (
    <Box sx={{ padding: { xs: "20px", md: "50px 80px 0" }, mb: 10 }}>
      {/* Header Section */}
      <Box sx={{ marginBottom: 5, textAlign: { xs: "center", sm: "left" } }}>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "48px",
            fontFamily: `'Plus Jakarta Sans', sans-serif`,
          }}
        >
          About Us
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            color: "#878C91",
            fontFamily: `'Plus Jakarta Sans', sans-serif`,
            marginTop: "10px",
          }}
        >
          We are a passionate team of digital marketing enthusiasts dedicated to
          helping businesses succeed in the digital world. With years of
          experience and a deep understanding of the ever-evolving online
          landscape, we stay at the forefront of industry trends and
          technologies.
        </Typography>
      </Box>

      {/* Statistics Section */}
      <Box
        sx={{
          display: { xs: "block", md: "flex" },
          gap: 2,
          alignItems: "stretch",
        }}
      >
        {/* Projects Card */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: { xs: "space-around", md: "space-between" },
            bgcolor: "black",
            backgroundImage: "url('/assets/cardbg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "30px",
            padding: "20px 0 20px 50px",
            minHeight: "350px",
            width: { xs: "100%", sm: "100%", md: "33.33%" },
            overflow: "hidden",
          }}
        >
          <Box>
            <Typography
              component="h2"
              sx={{
                fontSize: { xs: "60px", md: "84px" },
                fontWeight: 700,
                fontFamily: `'Plus Jakarta Sans', sans-serif`,
                color: "#fff",
              }}
            >
              920<span style={{ color: "#99CF63" }}>+</span>
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "16px" },
                color: "#878C91",
                fontWeight: 500,
                fontFamily: `'Plus Jakarta Sans', sans-serif`,
              }}
            >
              Projects finished superbly
            </Typography>
          </Box>

          {/* Avatars */}
          <Box sx={{ display: "flex", marginTop: { xs: 5, md: 8 } }}>
            <Avatar
              src="/assets/pp1.svg"
              alt="Profile 1"
              sx={{ width: 60, height: 60 }}
            />
            <Avatar
              src="/assets/pp2.svg"
              alt="Profile 2"
              sx={{ width: 60, height: 60 }}
            />
            <Avatar
              src="/assets/pp3.svg"
              alt="Profile 3"
              sx={{ width: 60, height: 60 }}
            />
            <Avatar
              src="/assets/pp4.svg"
              alt="Profile 4"
              sx={{ width: 60, height: 60 }}
            />
          </Box>
        </Box>

        {/* Image Section */}
        <Box
          sx={{
            flex: 1,
            minHeight: "350px",
            minWidth: { xs: "100%", md: "auto" },
            display: "flex",
            mt: { xs: "20px", md: "0" },
            backgroundImage: "url('/assets/AboutImg2.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "30px",
          }}
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
