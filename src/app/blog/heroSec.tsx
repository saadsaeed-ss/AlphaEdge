import { Typography, Box } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Image, { StaticImageData } from "next/image"; // Import StaticImageData

import img1 from "../../../public/assets/blog1.png";
import img2 from "../../../public/assets/blog2.png";
import img3 from "../../../public/assets/blog3.png";
import img4 from "../../../public/assets/blog4.png";

// Define an interface for the MiniBlog props
interface MiniBlogProps {
  image: StaticImageData; // Change to StaticImageData
  date: string;
  readTime: string;
  title: string;
  link: string; // Add link property
}

// Reusable MiniBlog Component
const MiniBlog: React.FC<MiniBlogProps> = ({ image, date, readTime, title, link }) => {
  return (
    <a href={link} style={{ textDecoration: "none", color: "inherit" }}> {/* Wrap with anchor tag */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "row", sm: "column", md: "row" },
          gap: 1,
          borderRadius: "10px",
          transition: "background-color 0.3s", // Add transition for hover effect
          "&:hover": {
            backgroundColor: "#f5f5f5", // Change background color on hover
          },
        }}
      >
        <Image
          src={image}
          alt="Blog Image"
          width={190}
          height={140}
          style={{ borderRadius: "10px" }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            paddingTop: { xs: "5px" },
            paddingLeft: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 1,
              color: "#878C91",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              {date}
            </Typography>
            <AccessTimeIcon sx={{ fontSize: "20px" }} />
            <Typography
              sx={{
                fontSize: "16px",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              {readTime}
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: "16px",
              color: "#121212",
              fontWeight: "medium",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
    </a>
  );
};

const BlogHeroSec = () => {
  const blogs = [
    {
      image: img2,
      date: "Oct 22",
      readTime: "4 min read",
      title: "How to Travel on a Budget: See the world without breaking the bank.",
      link: "/blog/travel-on-budget", // Add respective links
    },
    {
      image: img3,
      date: "Oct 23",
      readTime: "5 min read",
      title: "The Secrets of Digital Marketing: Grow your online presence.",
      link: "/blog/digital-marketing-secrets", // Add respective links
    },
    {
      image: img4,
      date: "Oct 24",
      readTime: "3 min read",
      title: "Healthy Living: Tips to balance your life and work effectively.",
      link: "/blog/healthy-living-tips", // Add respective links
    },
  ];

  return (
    <Box
      sx={{
        padding: { xs: "20px", md: "50px 80px" },
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "48px",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          Blogs
        </Typography>

        <Typography
          sx={{
            fontSize: "16px",
            color: "#878C91",
            fontWeight: 500,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          Explore our latest insights and tips to help your business grow:
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 5,
            marginTop: "20px",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {/* Hero Blog Section */}
          <Box
            sx={{
              width: { xs: "100%", md: "60%" },
              borderRadius: "10px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "400px",
              position: "relative",
            }}
          >
            {/* Updated Link for the Hero Blog */}
            <a href="/blog/benefits-of-meditation" style={{ textDecoration: "none", color: "inherit" }}>
              <Image
                src={img1}
                alt="Blog Image 1"
                layout="fill"
                objectFit="cover"
                style={{ borderRadius: "10px" }}
              />

              <Box
                sx={{
                  position: "absolute",
                  bottom: "-20%",
                  width: "90%",
                  backgroundColor: "white",
                  borderTopRightRadius: "10px",
                  borderBottomRightRadius: "10px",
                  display: { xs: "block", sm: "block", md: "flex" },
                  flexDirection: "column",
                  alignItems: "start",
                  padding: "20px 30px 20px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    color: "#878C91",
                    fontSize: "12px",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}
                  >
                    Oct 22
                  </Typography>
                  <AccessTimeIcon sx={{ fontSize: "20px" }} />
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}
                  >
                    4 min read
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: "600",
                    color: "#121212",
                    margin: "10px 0",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  The Benefits of Meditation: Improve mental health with simple
                  practices.
                </Typography>
                <Typography
                  sx={{
                    color: "#878C91",
                    fontSize: "16px",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  We are a passionate team of digital marketing enthusiasts
                  dedicated to helping businesses succeed in the digital world.
                  With years of experience and a deep understanding
                </Typography>
              </Box>
            </a>
          </Box>

          {/* Mini Blogs Section */}
          <Box
            sx={{
              width: { xs: "100%", md: "35%" },
              display: "flex",
              flexDirection: { xs: "column", sm: "row", md: "column" },
              maxHeight: "400px",
              marginTop: { xs: "100px", md: "0" },
              gap: { xs: 2, sm: 7, md: 2 },
            }}
          >
            {blogs.map((blog, index) => (
              <MiniBlog
                key={index}
                image={blog.image}
                date={blog.date}
                readTime={blog.readTime}
                title={blog.title}
                link={blog.link} // Pass the link to MiniBlog
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BlogHeroSec;
