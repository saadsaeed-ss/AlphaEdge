"use client"; // This is a Client Component for Next.js

import { Box, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import EastIcon from "@mui/icons-material/East";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Swiper as SwiperType } from "swiper";
import Image from "next/image";

// Define a type for the blog items
interface BlogItem {
  id: number;
  img: string;
  date: string;
  time: string;
  heading: string;
  text: string;
  link: string; // Add link property for navigation
}

const TrendingBlogSec = () => {
  const SwiperRef = useRef<SwiperType | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  const HighArray: BlogItem[][] = [
    [
      {
        id: 1,
        img: "/assets/tb1.svg",
        date: "May 22",
        time: "4 min read",
        heading: "The Importance of Diversity and Inclusion in the Workplace",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        link: "/blog/diversity-inclusion", // Add respective links
      },
      {
        id: 2,
        img: "/assets/tb2.svg",
        date: "June 10",
        time: "6 min read",
        heading: "How to Build a Fintech Startup",
        text: "Explore the key steps and challenges in building a successful fintech startup in today’s digital landscape.",
        link: "/blog/fintech-startup", // Add respective links
      },
      {
        id: 3,
        img: "/assets/tb3.svg",
        date: "July 14",
        time: "5 min read",
        heading: "Artificial Intelligence in Business",
        text: "Discover how AI is transforming industries by improving efficiency, decision-making, and customer experience.",
        link: "/blog/ai-in-business", // Add respective links
      },
    ],
    [
      {
        id: 4,
        img: "/assets/tb3.svg",
        date: "August 2",
        time: "3 min read",
        heading: "Remote Work: The New Normal",
        text: "Learn about the benefits and challenges of remote work and how it’s changing the modern workplace.",
        link: "/blog/remote-work", // Add respective links
      },
      {
        id: 5,
        img: "/assets/tb1.svg",
        date: "September 18",
        time: "7 min read",
        heading: "Blockchain Technology Explained",
        text: "An easy-to-understand guide to how blockchain technology works and its potential applications.",
        link: "/blog/blockchain-explained", // Add respective links
      },
      {
        id: 6,
        img: "/assets/tb2.svg",
        date: "October 5",
        time: "8 min read",
        heading: "Sustainability in Business",
        text: "Find out how businesses are adopting sustainable practices to address environmental and social challenges.",
        link: "/blog/sustainability-in-business", // Add respective links
      },
    ],
  ];

  // Function to filter the blogs based on search query
  const filteredBlogs = HighArray.flat().filter((item: BlogItem) =>
    item.heading.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to chunk the filtered blogs into groups of 3
  const chunkedBlogs = (blogs: BlogItem[], chunkSize: number): BlogItem[][] => {
    const result: BlogItem[][] = [];
    for (let i = 0; i < blogs.length; i += chunkSize) {
      result.push(blogs.slice(i, i + chunkSize));
    }
    return result;
  };

  const groupedFilteredBlogs = chunkedBlogs(filteredBlogs, 3); // Group the filtered results into chunks of 3

  // Check if the current slide is the last slide
  const isLastSlide = currentSlide === groupedFilteredBlogs.length - 1; // Determine if it's the last slide

  return (
    <Box sx={{ marginTop: "60px" }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 6 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontWeight: "600", fontSize: "48px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Trending Blogs
          </Typography>
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              position: "relative",
              width: "300px",
            }}
          >
            <input
              type="search"
              placeholder="Search Blogs"
              onChange={(e) => setSearchQuery(e.target.value)} // Update search query
              style={{
                backgroundColor: "transparent",
                padding: "15px 10px",
                border: "none",
                borderBottom: "1px solid lightgray",
                width: "100%",
                borderRadius: "0",
                outline: "none",
                color: "black",
                fontSize: "16px",
                transition: "border 0.3s ease",
              }}
            />
          </Box>
        </Box>
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
          {groupedFilteredBlogs.length > 0 ? (
            groupedFilteredBlogs.map((group, groupIndex) => (
              <SwiperSlide key={groupIndex}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: "20px",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  {group.map((subItem) => (
                    <Box
                      key={subItem.id}
                      sx={{
                        flex: "1 1 30%",
                        maxWidth: "30%",
                        minWidth: "30%",
                        overflow: "hidden",
                        transition: "transform 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-10px)",
                          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
                        },
                      }}
                    >
                      <a href={subItem.link} style={{ textDecoration: "none", color: "inherit" }}>
                        <Image
                          src={subItem.img}
                          alt={subItem.heading}
                          width={300}
                          height={100}
                          style={{ width: "100%", height: "auto" }}
                        />
                        <Box
                          sx={{
                            padding: "20px",
                            display: "flex",
                            flexDirection: "column",
                            gap: 1,
                            height: "100%",
                          }}
                        >
                          <Typography
                            sx={{
                              color: "#878C91",
                              fontSize: "14px",
                              fontFamily: "'Plus Jakarta Sans', sans-serif",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            {subItem.date}
                            <AccessTimeIcon sx={{ margin: "0 10px" }} />
                            {subItem.time}
                          </Typography>
                          <Typography
                            sx={{
                              fontWeight: 700,
                              fontSize: "20px",
                              fontFamily: "'Plus Jakarta Sans', sans-serif",
                              minHeight: "60px",
                            }}
                          >
                            {subItem.heading}
                          </Typography>
                          <Typography
                            sx={{
                              color: "#878C91",
                              fontSize: "16px",
                              fontFamily: "'Plus Jakarta Sans', sans-serif",
                              minHeight: "40px",
                            }}
                          >
                            {subItem.text}
                          </Typography>
                        </Box>
                      </a>
                    </Box>
                  ))}
                </Box>
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide>
              <Typography sx={{ textAlign: "center", fontSize: "20px", marginTop: "20px" }}>
                No results found.
              </Typography>
            </SwiperSlide>
          )}
        </Swiper>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
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
            backgroundColor: "white",
            color: "black",
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
            0{currentSlide + 1} / 0{groupedFilteredBlogs.length}
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
            backgroundColor: !isLastSlide ? "black" : "white", // Use isLastSlide here
            color: !isLastSlide ? "white" : "darkgrey",
          }}
        >
          <EastIcon />
        </Typography>
      </Box>
    </Box>
  );
};

export default TrendingBlogSec;
