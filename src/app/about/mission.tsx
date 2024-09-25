import { Box, Typography, Button } from "@mui/material";
import EastIcon from "@mui/icons-material/East";

const Mission = () => {
  return (
    <Box
      sx={{
        margin: "50px 0",
        padding: { xs: "20px", md: "50px 80px" },
        bgcolor: "white",
      }}
    >
      {/* Mission Title and Button Section */}
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
              fontSize: "48px",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Our Mission
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
            Read Our Story
          </Typography>
          <EastIcon
            sx={{
              marginRight: "10px",
            }}
          />
        </Button>
      </Box>

      {/* Mission Details Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
          marginTop: "30px",
        }}
      >
        {/* Mapping over mission details */}
        {[
          {
            number: "01",
            heading: "Heading 01",
            description:
              "We are a passionate team of digital marketing enthusiasts dedicated to delivering results.",
          },
          {
            number: "02",
            heading: "Heading 02",
            description:
              "Our focus is on data-driven strategies to help businesses grow efficiently.",
          },
          {
            number: "03",
            heading: "Heading 03",
            description:
              "From ideation to execution, we prioritize quality and innovation.",
          },
        ].map((item) => (
          <Box
            key={item.number}
            sx={{
              flex: 1,
              padding: "10px",
              marginTop: { xs: "20px", md: "0" },
            }}
          >
            {/* Number Badge */}
            <Typography
              sx={{
                width: "min-content",
                borderRadius: 2,
                backgroundColor: "#E4E4E4",
                padding: "7px 10px",
                fontSize: "24px",
                fontWeight: 600,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              {item.number}
            </Typography>

            {/* Heading */}
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "24px",
                marginTop: "10px",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              {item.heading}
            </Typography>

            {/* Description */}
            <Typography
              sx={{
                fontSize: "16px",
                color: "#878C91",
                marginTop: "5px",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              {item.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Mission;
