import { Container, Box, Button, Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import React from "react";
import Image from "next/image";

const TeamSec = () => {
  const imagesArray = [
    {
      id: 1,
      name: "Andrea James",
      skill: "Digital Brand Designer",
      btn: ["Brand", "Design"],
      img: "/assets/team1.svg",
    },
    {
      id: 2,
      name: "Alex Benjani",
      skill: "Product Development",
      btn: ["Mobile", "UI", "Design"],
      img: "/assets/team2.svg",
    },
    {
      id: 3,
      name: "Lily Gabriella",
      skill: "UI Illustrator",
      btn: ["Brand", "UI"],
      img: "/assets/team3.svg",
    },
    {
      id: 4,
      name: "Andrea James",
      skill: "Digital Brand Designer",
      btn: ["Graphic Designer", "Illustrator"],
      img: "/assets/team4.svg",
    },
    {
      id: 5,
      name: "Darren Channing",
      skill: "Illustrator",
      btn: ["Brand", "Design"],
      img: "/assets/team5.svg",
    },
  ];

  return (
    <>
      <Box sx={{ marginTop: "60px", padding: { xs: "20px", md: "0px 80px" } ,  mb:10}}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: 600,
            color: "#010205",
            paddingLeft: "7px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            textAlign: {xs:"center", md : "left"}
          }}
        >
          Meet the Minds Behind the Innovation
          <Button
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 1,
              color: "#000",
              fontSize: "14px",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              padding: "10px 15px",
              border: "1px solid black",
              borderRadius: 10,
              textTransform: "capitalize",
            }}
          >
            <Typography>See All</Typography>
            <EastIcon />
          </Button>
        </Typography>
      </Box>

      <Container maxWidth="xl" disableGutters sx={{ padding: { xs: "20px", md: "0 0 0 80px" }, fontFamily: "'Plus Jakarta Sans', sans-serif",  mb:10 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
            overflow: "hidden",
            position: "relative",
          }}
        >
          {imagesArray.map((item) => (
            <Box
              key={item.id}
              sx={{
                position: "relative",
                borderRadius: 5,
                minWidth: { xs: "100%", md: "290px" },
                height: "352px",
                overflow: "hidden",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "flex-start",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
              }}
            >
              <Image
                src={item.img}
                alt={item.name}
                fill // Updated to use fill
                style={{ objectFit: 'cover' }} // Updated objectFit
                priority
              />
              <Box
                sx={{
                  position: "absolute",
                  left: "7%",
                  bottom: "10%",
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography sx={{ fontWeight: 600, fontSize: "18px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {item.name}
                </Typography>
                <Typography sx={{ fontSize: "14px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{item.skill}</Typography>
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    marginTop: "10px",
                  }}
                >
                  {item.btn.map((buttonText, index) => (
                    <Button
                      key={index}
                      sx={{
                        color: "#fff",
                        fontSize: "10px",
                        border: "1px solid white",
                        borderRadius: 10,
                      }}
                    >
                      {buttonText}
                    </Button>
                  ))}
                </Box>
              </Box>
            </Box>
          ))}
          <Box
            sx={{
              width: "100px",
              position: "absolute",
              right: 0,
              background: "black",
              zIndex: 1,
            }}
          />
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" }, justifyContent: "center", marginTop: "20px" }}>
          <Button
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: "#000",
              fontSize: "14px",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              padding: "10px 15px",
              border: "1px solid black",
              borderRadius: 10,
              textTransform: "capitalize",
            }}
          >
            <Typography>See All</Typography>
            <EastIcon />
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default TeamSec;
