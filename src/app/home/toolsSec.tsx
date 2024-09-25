"use client"; // This is a Client Component for Next.js

import { Typography, Box } from "@mui/material";
import { useState } from "react"; // React is only needed for hooks like useState
import Image from 'next/image'; // Next.js Image component

const ToolsSec = () => {
  const [activeBox, setActiveBox] = useState(1); // Set initial active box to 1

  // Content for each box
  const boxContents = [
    {
      title: "Innovative Ideas",
      message: "Innovative ideas that transform your vision into reality.",
    },
    {
      title: "Graphics & Motion",
      message: "Stunning graphics and animations to captivate your audience.",
    },
    {
      title: "Development",
      message: "Robust development solutions tailored for your needs.",
    },
  ];

  const handleClick = (num: number) => {
    console.log(`Button clicked in box ${num}`);
  };

  return (
    <Box sx={{ padding: { xs: "20px", md: "50px 80px" }, mb: 5 }}>
      <Typography
        variant="h2"
        sx={{
          fontWeight: "600",
          mb: 10,
          fontFamily: `'Plus Jakarta Sans', sans-serif`,
          fontSize: {
            xs: "1.5rem",
            sm: "2rem",
            md: "3rem",
            lg: "3.5rem",
          },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        Welcome to AlphaEdge Solutions,
        <br />
        integrating Id8edge&apos;s tools {/* Changed here */}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: { xs: 5, md: 3 },
          marginTop: "20px",
        }}
      >
        {[1, 2, 3].map((num) => (
          <Box
            key={num}
            onMouseEnter={() => setActiveBox(num)}
            onMouseLeave={() => setActiveBox(activeBox)} // Maintain the active box on mouse leave
            sx={{
              backgroundColor: { xs: "black", md: activeBox === num ? "black" : "lightgray" },
              backgroundImage: { xs: `url(/assets/cardbg.png)`, md: activeBox === num ? `url(/assets/cardbg.png)` : "none" },
              backgroundSize: 'cover',
              backgroundPosition: 'top center',
              width: { xs: "100%", md: activeBox === num ? "100px" : "210px" },
              borderRadius: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "start", md: activeBox === num ? "start" : "center" },
              gap: { xs: 1, md: activeBox === num ? 1 : 8 },
              height: "300px",
              padding: "20px",
              position: 'relative',
              transition: "all 0.15s ease",
              flexGrow: { xs: 1, md: activeBox === num ? 1 : 0 },
              opacity: { xs: 1, md: activeBox === num ? 1 : 0.5 },
              "& .inner-text": {
                transform: { xs: "none", md: activeBox === num ? "none" : "rotate(90deg)" },
                color: { xs: "#fff", md: activeBox === num ? "#fff" : "#656363" },
                fontFamily: `'Plus Jakarta Sans', sans-serif`,
                fontSize: { xs: "32px", md: activeBox === num ? "32px" : "18px" },
              },
              "& .inner-number": {
                color: { xs: "#fff", md: activeBox === num ? "#fff" : "#000" },
                fontFamily: `'Plus Jakarta Sans', sans-serif`,
              },
              "& .inner-msg": {
                opacity: { xs: 1, md: activeBox === num ? 1 : 0 },
                transition: "opacity 0.15s ease",
                fontFamily: `'Plus Jakarta Sans', sans-serif`,
                mt: 2,
              },
            }}
          >
            <Typography
              className="inner-number"
              sx={{
                fontWeight: 900,
                fontSize: "20px",
                fontFamily: `'Plus Jakarta Sans', sans-serif`,
                mb: 2,
              }}
            >
              0{num}
            </Typography>
            <Typography
              className="inner-text"
              sx={{
                fontWeight: 600,
                fontFamily: `'Plus Jakarta Sans', sans-serif`,
              }}
            >
              {boxContents[num - 1].title}
            </Typography>
            <Typography
              className="inner-msg"
              sx={{
                color: "#fff",
                fontSize: "Regular",
                fontFamily: `'Plus Jakarta Sans', sans-serif`,
                mt: 2,
              }}
            >
              {boxContents[num - 1].message}
            </Typography>

            {/* Image at the bottom right corner */}
            {activeBox === num && (
              <Image
                src="/assets/cardbtn.svg" // Use optimized Next.js Image component
                alt="Card Button"
                onClick={() => handleClick(num)} // Handle click
                width={80}
                height={80}
                style={{
                  position: 'absolute',
                  bottom: 20,
                  right: 20,
                  cursor: 'pointer',
                }}
              />
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ToolsSec;
