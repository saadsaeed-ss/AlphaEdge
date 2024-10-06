"use client"; // Ensure the component is treated as a Client Component

import { useParams } from "next/navigation"; // Use `useParams` from `next/navigation`
import { Typography, Box } from "@mui/material"; // Import Box for layout
import Image, { StaticImageData } from "next/image"; // Import Image and StaticImageData
import Link from "next/link"; // Import Link from next/link
import TrendingBlogs from "../trendingBlogs";

import heroImage1 from "../../../../public/assets/detailBlogImg.svg";
import Image1 from "../../../../public/assets/tb1.png";

type BlogDataType = {
  [key: string]: {
    title: string;
    content: string;
    date: string;
    readTime: string;
    image?: StaticImageData; // Make image optional for future use
  };
};

const blogData: BlogDataType = {
  "benefits-of-meditation": {
    title:
      "The Benefits of Meditation: Improve mental health with simple practices.",
    content: "Here is some content about meditation...",
    date: "Oct 22",
    readTime: "4 min read",
    image: heroImage1,
  },
  "travel-on-budget": {
    title:
      "How to Travel on a Budget: See the world without breaking the bank.",
    content: "Here is some content about traveling on a budget...",
    date: "Oct 22",
    readTime: "4 min read",
    image: heroImage1,
  },
  "digital-marketing-secrets": {
    title: "The Secrets of Digital Marketing: Grow your online presence.",
    content: "This blog post shares insights into digital marketing...",
    date: "Oct 23",
    readTime: "5 min read",
    image: heroImage1,
  },
  "healthy-living-tips": {
    title: "Healthy Living: Tips to balance your life and work effectively.",
    content: "Health is wealth, and here are some tips for staying healthy...",
    date: "Oct 24",
    readTime: "3 min read",
  },
  "diversity-inclusion": {
    title: "The Importance of Diversity and Inclusion in the Workplace.",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    date: "May 22",
    readTime: "4 min read",
  },
  "fintech-startup": {
    title: "How to Build a Fintech Startup.",
    content:
      "Explore the key steps and challenges in building a successful fintech startup in today’s digital landscape.",
    date: "June 10",
    readTime: "6 min read",
  },
  "ai-in-business": {
    title: "Artificial Intelligence in Business.",
    content:
      "Discover how AI is transforming industries by improving efficiency, decision-making, and customer experience.",
    date: "July 14",
    readTime: "5 min read",
  },
  "remote-work": {
    title: "Remote Work: The New Normal.",
    content:
      "Learn about the benefits and challenges of remote work and how it’s changing the modern workplace.",
    date: "August 2",
    readTime: "3 min read",
  },
  "blockchain-explained": {
    title: "Blockchain Technology Explained.",
    content:
      "An easy-to-understand guide to how blockchain technology works and its potential applications.",
    date: "September 18",
    readTime: "7 min read",
  },
  "sustainability-in-business": {
    title: "Sustainability in Business.",
    content:
      "Find out how businesses are adopting sustainable practices to address environmental and social challenges.",
    date: "October 5",
    readTime: "8 min read",
  },
};

const BlogPost = () => {
  const { slug } = useParams();
  const blog = slug ? blogData[slug as string] : null;

  if (!blog) {
    return <Typography>Blog post not found.</Typography>;
  }

  return (
    <Box sx={{ marginTop: "60px", padding: { xs: "20px", md: "50px 80px" } }}>
      {/* Main blog content */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography
          sx={{
            fontSize: "48px",
            fontWeight: "600",
            lineHeight: 1.2,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            marginBottom: "20px",
          }}
        >
          {blog.title}
        </Typography>

        <Box sx={{ height: { xs: "360px", sm: "auto" } }}>
          <Image
            src={blog.image || heroImage1}
            alt={`${blog.title} Hero Image`}
            width={1280}
            height={400}
            style={{
              margin: "20px 0",
              objectFit: "cover",
              borderRadius: "10px",
              width: "100%",
              height: "100%",
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
            borderTop: "1px solid lightgray",
            paddingTop: "30px",
          }}
        >
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: { xs: "medium", sm: "bold" },
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            {blog.date}
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: { xs: "medium", sm: "bold" },
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            {blog.readTime}
          </Typography>
        </Box>

        <Typography
          sx={{
            marginTop: "20px",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          {blog.content}
        </Typography>
      </Box>

      {/* New section starts here */}
      <Box sx={{ marginTop: "60px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 3, md: 5 },
          }}
        >
          {/* Left Column - Latest Posts */}
          <Box sx={{ flex: "1 1 33%" }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "600",
                marginBottom: "20px",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Latest Posts
            </Typography>

            {Object.keys(blogData)
              .slice(0, 4) // Show only the first 4 posts
              .map((key) => (
                <Box
                  key={key}
                  sx={{
                    marginBottom: "30px",
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "15px",
                  }}
                >
                  <Link href={`/blog/${key}`} passHref>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {blogData[key].date}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "500",
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                      }}
                    >
                      {blogData[key].title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {blogData[key].content.slice(0, 50)}...{" "}
                      {/* Short preview */}
                    </Typography>
                  </Link>
                </Box>
              ))}
          </Box>

          {/* Right Column - Main Blog Content (Subheadings, Content, Images) */}
          <Box sx={{ flex: "2 1 66%" }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                marginTop: { xs: "30px", md: "0px" },
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Natural light is a highly sought-after feature in any space
            </Typography>
            <Typography
              sx={{
                marginTop: "10px",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Optimize for search land it in region today shall be a cloudy day,
              thanks to blue sky thinking... [Add more content here]
            </Typography>

            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                marginTop: "40px",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Subheading 2
            </Typography>
            <Typography
              sx={{
                marginTop: "10px",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Cross-pollination across our domains we need to build it so that
              it scales... [Add more content here]
            </Typography>

            {/* Images Section */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "30px",
              }}
            >
              <Box
                sx={{
                  width: "48%",
                  bgcolor: "grey.200",
                  height: "400px",
                  position: "relative",
                }}
              >
                <Image
                  src={Image1} // Or use your own image path here
                  alt="First image"
                  layout="fill"
                />
              </Box>
              <Box
                sx={{
                  width: "48%",
                  bgcolor: "grey.200",
                  height: "400px",
                  position: "relative",
                }}
              >
                <Image
                  src={Image1} // Or use your own image path here
                  alt="Second image"
                  layout="fill"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box sx={{ marginTop: "60px"}}>
        <TrendingBlogs/> 
      </Box>
    </Box>
  );
};

export default BlogPost;
