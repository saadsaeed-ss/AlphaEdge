"use client"; 
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import logo from "../../../public/assets/alphaLogo.svg";
import logo2 from "../../../public/assets/alphaLogoWhite.svg";
import React, { useState } from "react";

const HeroSection = () => {
  const [activeBox, setActiveBox] = useState(5);

  const serviceArray = [
    {
      id: 1,
      heading: "Service 01",
      text: "We are a passionate team of digital marketing enthusiasts dedicated to helping businesses succeed.",
    },
    {
      id: 2,
      heading: "Tools Dummy",
      text: "We provide cutting-edge tools to drive success in the digital landscape.",
    },
    {
      id: 3,
      heading: "Info Dummy",
      text: "We specialize in providing insightful information for marketing strategies.",
    },
    {
      id: 4,
      heading: "Dummy Text",
      text: "Delivering high-quality solutions tailored to your unique business needs.",
    },
    {
      id: 5,
      heading: "Lorem Ipsum",
      text: "Innovative solutions to keep you ahead in the digital world.",
    },
    {
      id: 6,
      heading: "Service 06",
      text: "Our expertise is dedicated to ensuring business growth through digital marketing.",
    },
  ];

  return (
    <Box
      sx={{
        padding: { xs: "20px", md: "50px 80px" },
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "35px",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          Services
        </Typography>

        <Typography
          sx={{
            fontSize: "16px",
            color: "#878C91",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          We are a passionate team of digital marketing enthusiasts dedicated to
          helping businesses succeed in the digital world. With years of
          experience and a deep understanding of the ever-evolving online
          landscape, we stay at the forefront of industry trends and
          technologies.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            marginTop: "50px",
            rowGap: "20px",
            columnGap: { xs: "50px", md: "20px", lg: "50px" },
          }}
        >
          {serviceArray.map((item) => (
            <Box
              key={item.id}
              onMouseEnter={() => setActiveBox(item.id)}
              onMouseLeave={() => {
                if (activeBox !== item.id) {
                  setActiveBox(item.id); // Keep the last hovered box active
                }
              }}
              sx={{
                display: "flex",
                flexDirection: "column",
                borderRadius: "10px",
                padding: "20px",
                flex: { xs: "1 1 100%", sm: "1 1 30%" }, // 100% width on xs, 30% on sm and larger
                backgroundColor: activeBox === item.id ? "#000" : "#fff",
                transition: "background-color 0.1s ease, color 0.1s ease",
                willChange: "background-color, color",
              }}
            >
              <Box sx={{ display: "flex", marginBottom: "10px" }}>
                <Image
                  src={activeBox === item.id ? logo2 : logo}
                  alt={`${item.heading} Logo`} // Improved alt text
                />
              </Box>

              <Typography
                sx={{
                  color: activeBox === item.id ? "white" : "black",
                  margin: "20px 0 10px 0",
                  fontSize: "18px",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: "600",
                  transition: "color 0.1s ease",
                }}
              >
                {item.heading}
              </Typography>

              <Typography
                sx={{
                  color: activeBox === item.id ? "white" : "#878C91",
                  fontSize: "16px",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  transition: "color 0.1s ease",
                }}
              >
                {item.text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
