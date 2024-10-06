import BlogHeroSec from "./heroSec";
import TrendingBlogSec from "./trendingBlogs";
import { Box } from "@mui/material"; // Import Box from MUI

export default function Services() {
  return (
    <>
      <BlogHeroSec />
      {/* Wrap TrendingBlogSec in Box with padding */}
      <Box
        sx={{
          padding: { xs: "20px", md: "50px 80px" }, // Apply padding here
        }}
      >
        <TrendingBlogSec />
      </Box>
    </>
  );
}
