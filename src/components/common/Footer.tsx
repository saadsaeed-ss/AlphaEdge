import React from "react";
import { Box, Typography, Button, Stack, Link } from "@mui/material";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        padding: { xs: "20px", md: "30px 80px" },
        mt:10,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "40px", md: "100px" },
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {/* Left Column */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Image
            src="/assets/alphaLogo.svg"
            alt="Company Logo"
            width={59}
            height={43}
          />
          <Typography
            variant="h2"
            sx={{
              color: "#010205",
              marginTop: "26px",
              fontWeight: 600,
              fontSize: { xs: "1rem", md: "1.125rem" }, // 16px and 18px
              fontFamily: `'Plus Jakarta Sans', sans-serif`,
            }}
          >
            Stay up to date
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#878C91",
              marginTop: "10px",
              fontFamily: `'Plus Jakarta Sans', sans-serif`,
              fontSize: "0.875rem", // 14px
            }}
          >
            Enter your email to stay updated with the latest news and trends.
          </Typography>

          <Box
            component="form"
            sx={{
              borderRadius: "75px",
              backgroundColor: "#fff",
              boxShadow: "0px 4px 24px -1px rgba(0, 0, 0, 0.08)",
              display: "flex",
              marginTop: "20px",
              width: { xs: "100%", md: "80%" },
              gap: "10px",
              padding: "9px 13px",
              alignItems: "center",
            }}
          >
            <Image
              src="/assets/inputIcon.svg"
              alt="Input Icon"
              width={18}
              height={18}
            />
            <input
              type="email"
              id="emailInput"
              placeholder="Enter your email & join us"
              aria-label="Enter your email & join us"
              style={{
                border: "none",
                outline: "none",
                backgroundColor: "#fff",
                font: `400 0.875rem 'Plus Jakarta Sans', sans-serif`, // 14px
                color: "#bcbcbc",
                flex: 1,
                padding: "10px 0",
              }}
            />
            <Button
              variant="contained"
              sx={{
                borderRadius: "51px",
                backgroundColor: "#99ea48",
                minHeight: "42px",
                color: "#fff",
                padding: "10px 18px",
                fontWeight: 600,
                fontSize: "1rem", // 16px
                fontFamily: `'Plus Jakarta Sans', sans-serif`,
              }}
              type="submit"
            >
              Subscribe
            </Button>
          </Box>

          <Stack direction="row" spacing={2} sx={{ marginTop: "35px" }}>
            <Link
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/fb.svg"
                alt="Facebook"
                width={38}
                height={38}
              />
            </Link>
            <Link
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/twitter.svg"
                alt="Twitter"
                width={38}
                height={38}
              />
            </Link>
            <Link
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/insta.svg"
                alt="Instagram"
                width={38}
                height={38}
              />
            </Link>
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/linked.svg"
                alt="LinkedIn"
                width={38}
                height={38}
              />
            </Link>
          </Stack>
        </Box>

        {/* Right Section: Navigation and Contact */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            gap: { xs: "40px", md: "150px" },
            justifyContent: { xs: "flex-start", md: "flex-end" },
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {/* Navigation */}
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="h3"
              sx={{
                color: "#010205",
                fontSize: "1.125rem", // 18px
                fontWeight: 600,
                fontFamily: `'Plus Jakarta Sans', sans-serif`,
              }}
            >
              Navigation
            </Typography>
            <Box
              component="ul"
              sx={{
                color: "#878c91",
                fontSize: "0.875rem", // 14px
                fontWeight: 400,
                marginTop: "35px",
                listStyle: "none",
                padding: 0,
                lineHeight: "40px",
              }}
            >
              <li>
                <Link
                  href="#"
                  underline="none"
                  color="inherit"
                  sx={{
                    transition: "color 0.3s",
                    "&:hover": {
                      color: "#99ea48", // Change color on hover
                    },
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  underline="none"
                  color="inherit"
                  sx={{
                    transition: "color 0.3s",
                    "&:hover": {
                      color: "#99ea48", // Change color on hover
                    },
                  }}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  underline="none"
                  color="inherit"
                  sx={{
                    transition: "color 0.3s",
                    "&:hover": {
                      color: "#99ea48", // Change color on hover
                    },
                  }}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  underline="none"
                  color="inherit"
                  sx={{
                    transition: "color 0.3s",
                    "&:hover": {
                      color: "#99ea48", // Change color on hover
                    },
                  }}
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  underline="none"
                  color="inherit"
                  sx={{
                    transition: "color 0.3s",
                    "&:hover": {
                      color: "#99ea48", // Change color on hover
                    },
                  }}
                >
                  Contact
                </Link>
              </li>
            </Box>
          </Box>

          {/* Contact Information */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              fontSize: "0.875rem", // 14px
              color: "#878c91",
              fontWeight: 400,
              width: "240px",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: "#010205",
                fontSize: "1.125rem", // 18px
                fontWeight: 600,
                fontFamily: `'Plus Jakarta Sans', sans-serif`,
              }}
            >
              Contact
            </Typography>

            <Box sx={{ display: "flex", marginTop: "35px", gap: "8px" }}>
              <Image
                src="/assets/phone.svg"
                alt="Phone"
                width={18}
                height={18}
              />
              <Link href="tel:(406)555-0120" underline="none" color="inherit">
                (406) 555-0120
              </Link>
            </Box>

            <Box sx={{ display: "flex", marginTop: "15px", gap: "8px" }}>
              <Image
                src="/assets/mailicon.svg"
                alt="Email"
                width={18}
                height={18}
              />
              <Link
                href="mailto:Hey@boostim.com"
                underline="none"
                color="inherit"
              >
                Hey@boostim.com
              </Link>
            </Box>

            <Box sx={{ display: "flex", marginTop: "15px", gap: "8px" }}>
              <Image
                src="/assets/pin.svg"
                alt="Location"
                width={18}
                height={18}
              />
              <Typography component="address" sx={{ fontStyle: "normal" }}>
                2972 Westheimer Rd. Santa Ana, Illinois 85486
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
