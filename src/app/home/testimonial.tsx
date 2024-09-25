"use client"; // This is a Client Component for Next.js

import { Box, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import EastIcon from "@mui/icons-material/East";
import { useRef } from "react"; 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Swiper as SwiperType } from "swiper";
import Image from "next/image"; // Importing Image from Next.js

const TestioMonials = () => {
  const SwiperRef = useRef<SwiperType | null>(null);

  const testimonials = [
    {
      id: 1,
      text: `"AlphaEdge Solutions exceeded our expectations with their detailed strategies. Our engagement skyrocketed! Their team's dedication and innovative approaches have truly transformed our business operations and marketing effectiveness, leading to record growth and a stronger brand presence."`,
      name: "Michael Kaizer",
      desc: "CEO of Basecamp Corp",
      img: "/assets/tdp.svg", 
    },
    {
      id: 2,
      text: `"Their insights into our target audience were invaluable. We saw a significant improvement in our outreach. They provided us with tools and analytics that allowed us to refine our strategies, and the results have been fantastic. We couldn't be happier with their service."`,
      name: "Emily Johnson",
      desc: "CMO of Tech Innovations",
      img: "/assets/tdp.svg",
    },
    {
      id: 3,
      text: `"Thanks to their creative campaigns, we've strengthened our brand presence in the market. The collaboration with AlphaEdge Solutions has been seamless, and their creative team really knows how to connect with the audience. Their efforts have made a remarkable impact on our visibility."`,
      name: "Sophia Lee",
      desc: "Marketing Director at NextGen",
      img: "/assets/tdp.svg",
    },
    {
      id: 4,
      text: `"The team was professional and dedicated. Their innovative approach transformed our marketing efforts. With their guidance, we implemented new strategies that have not only improved our customer engagement but also increased our revenue significantly."`,
      name: "David Chen",
      desc: "Founder of StartSmart",
      img: "/assets/tdp.svg",
    },
    {
      id: 5,
      text: `"We're thrilled with the results! Their team helped us achieve our goals in record time. The insights and support provided by AlphaEdge Solutions have been instrumental in our success, allowing us to navigate challenges effectively and seize new opportunities."`,
      name: "Jessica Park",
      desc: "VP of Growth at InnovateX",
      img: "/assets/tdp.svg",
    },
  ];

  return (
    <Box sx={{ marginTop: "60px", padding: { xs: "20px", md: "50px 80px" } }}>
      <Box sx={{ paddingBottom: "40px" }}>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => {
            SwiperRef.current = swiper;
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <Typography sx={{ fontWeight: 600, fontSize: "20px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {item.text}
                </Typography>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", gap: 2, alignItems: "center" }}>
                    <Image 
                      src={item.img} 
                      alt={item.name} 
                      width={60} 
                      height={60} 
                      style={{ borderRadius: "50%" }} 
                    />
                    <div style={{ display: "flex", flexDirection: "column", marginLeft: "10px" }}>
                      <Typography sx={{ fontSize: "12px", fontWeight: 600, color: "#010205", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                        {item.name}
                      </Typography>
                      <Typography sx={{ color: "#871c91", fontSize: "12px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                        {item.desc}
                      </Typography>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 2, alignItems: "center" }}>
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
                        backgroundColor: item.id === testimonials.length ? "black" : "transparent",
                        color: item.id === testimonials.length ? "#fff" : "#000",
                      }}
                    >
                      <KeyboardBackspaceIcon />
                    </Typography>
                    <Typography sx={{ fontSize: "14px", margin: "0 10px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      <span style={{ fontWeight: "bold" }}>0{item.id}</span>/0{testimonials.length}
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
                        backgroundColor: item.id < testimonials.length ? "black" : "transparent",
                        color: item.id < testimonials.length ? "#fff" : "#000",
                      }}
                    >
                      <EastIcon />
                    </Typography>
                  </div>
                </div>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default TestioMonials;
