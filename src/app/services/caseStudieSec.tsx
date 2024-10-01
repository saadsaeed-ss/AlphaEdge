"use client"; // This is a Client Component for Next.js

import { Box, Typography, Button } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import EastIcon from "@mui/icons-material/East";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Swiper as SwiperType } from "swiper";
import Image from "next/image"; // Importing Image from Next.js

const CaseStudySection = () => {
  const SwiperRef = useRef<SwiperType | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0); // State to track the current slide

  const HighArray = [
    [
      {
        id: 1,
        img: "/assets/cs1.png",
        heading: "Fintech",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem omin accusantium doloremque laudantium.",
      },
      {
        id: 2,
        img: "/assets/cs2.png",
        heading: "Dummy Heading",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem omin accusantium doloremque laudantium.",
      },
      {
        id: 3,
        img: "/assets/cs3.png",
        heading: "Lorem Ipsum",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem omin accusantium doloremque laudantium.",
      },
      {
        id: 4,
        img: "/assets/cs4.png",
        heading: "Software Tech",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem omin accusantium doloremque laudantium.",
      },
    ],
    [
      {
        id: 1,
        img: "/assets/cs1.png",
        heading: "Fintech",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem omin accusantium doloremque laudantium.",
      },
      {
        id: 2,
        img: "/assets/cs2.png",
        heading: "Dummy Heading",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem omin accusantium doloremque laudantium.",
      },
      {
        id: 3,
        img: "/assets/cs3.png",
        heading: "Lorem Ipsum",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem omin accusantium doloremque laudantium.",
      },
      {
        id: 4,
        img: "/assets/cs4.png",
        heading: "Software Tech",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem omin accusantium doloremque laudantium.",
      },
    ],
    [
      {
        id: 1,
        img: "/assets/cs1.png",
        heading: "Fintech",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem omin accusantium doloremque laudantium.",
      },
      {
        id: 2,
        img: "/assets/cs2.png",
        heading: "Dummy Heading",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem omin accusantium doloremque laudantium.",
      },
      {
        id: 3,
        img: "/assets/cs3.png",
        heading: "Lorem Ipsum",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem omin accusantium doloremque laudantium.",
      },
      {
        id: 4,
        img: "/assets/cs4.png",
        heading: "Software Tech",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem omin accusantium doloremque laudantium.",
      },
    ],
    [
      {
        id: 1,
        img: "/assets/cs1.png",
        heading: "Fintech",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem omin accusantium doloremque laudantium.",
      },
      {
        id: 2,
        img: "/assets/cs2.png",
        heading: "Dummy Heading",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem omin accusantium doloremque laudantium.",
      },
      {
        id: 3,
        img: "/assets/cs3.png",
        heading: "Lorem Ipsum",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem omin accusantium doloremque laudantium.",
      },
      {
        id: 4,
        img: "/assets/cs4.png",
        heading: "Software Tech",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem omin accusantium doloremque laudantium.",
      },
    ],
  ];

  const isLastSlide = currentSlide === HighArray.length - 1;

  return (
    <Box sx={{ marginTop: "60px", padding: { xs: "20px", md: "50px 80px" } }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "center" }, // Center align for all screens
          justifyContent: "space-between", // Space between title and button
          marginBottom:"50px"
        }}
      >
        {/* Title and Subtitle */}
        <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize:  "48px", 
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Case Studies
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
            See our Work
          </Typography>
          <EastIcon
            sx={{
              marginRight: "10px",
            }}
          />
        </Button>
      </Box>
      <Box sx={{ paddingBottom: "40px" }}>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
          onSwiper={(swiper) => {
            SwiperRef.current = swiper;
          }}
        >
          {HighArray.map((item, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  flexWrap: "wrap",
                  gap: "30px",
                  marginTop: "30px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {item.map((subItem) => (
                  <Box
                    key={subItem.id}
                    sx={{
                      display: "flex",
                      gap: 3,
                      flex: "1 1 calc(50% - 20px)",
                    }}
                  >
                    <Box sx={{ flexShrink: 0 }}>
                      <Image
                        src={subItem.img}
                        alt={subItem.heading}
                        width={400} // Increased width
                        height={400} // Increased height
                        style={{ width: "100%", height: "auto" }} // Maintain aspect ratio
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                        marginTop: { xs: "10px", sm: "20px" },
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 700,
                          fontSize: "24px",
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                        }}
                      >
                        {subItem.heading}
                      </Typography>
                      <Typography
                        sx={{
                          width: { xs: "28ch", sm: "30ch" },
                          color: "#878C91",
                          fontSize: "16px",
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                        }}
                      >
                        {subItem.text}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
          // marginTop: "10px",
          width: "100%",
          marginBottom: "20px",
          justifyContent: { xs: "center", md: "flex-end" },
        }}
      >
        <Typography
          onClick={() => SwiperRef.current?.slidePrev()}
          sx={{
            cursor: "pointer",
            border: "1px solid black",
            borderRadius: 5,
            padding: "5px 15px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: isLastSlide ? "black" : "white",
            color: isLastSlide ? "white" : "black",
          }}
        >
          <KeyboardBackspaceIcon />
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          <span style={{ fontWeight: "bold" }}>
            0{currentSlide + 1}/0{HighArray.length}
          </span>
        </Typography>
        <Typography
          onClick={() => SwiperRef.current?.slideNext()}
          sx={{
            cursor: "pointer",
            border: "1px solid black",
            borderRadius: 5,
            padding: "5px 15px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: !isLastSlide ? "black" : "white",
            color: !isLastSlide ? "white" : "black",
          }}
        >
          <EastIcon />
        </Typography>
      </Box>
    </Box>
  );
};

export default CaseStudySection;
