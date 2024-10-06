"use client"; // This ensures the component is treated as a client component

import React from "react";
import {
  Container,
  Box,
  Typography,
  FormControl,
  InputLabel,
  Input,
  Button,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation"; // Correct import for Next.js App Router
import EastIcon from "@mui/icons-material/East";

const Contactus = () => {
  const router = useRouter(); // Use Next.js router from 'next/navigation'
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    router.push("/querySuccess"); // Navigate to another page using router.push
  };

  return (
    <Container sx={{ marginTop: "60px", fontFamily: `'Plus Jakarta Sans', sans-serif` }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 4, sm: 8, md: 15 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              width: { xs: "100%", md: "40%" },
              order: { xs: 2, md: 1 },
            }}
          >
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "48px",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Contact Us
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "medium",
                color: "#878C91",
                fontFamily: `'Plus Jakarta Sans', sans-serif`,
              }}
            >
              We're Here to Help – Reach Out to Our Team for Any Inquiries or
              Support Needs
            </Typography>
            <Box
              sx={{
                marginTop: "20px",
                display: "flex",
                flexDirection: { xs: "column", sm: "row", md: "column" },
                flexWrap: { sm: "wrap", md: "nowrap" },
                alignItems: "flex-start",
                gap: { xs: 3, sm: 7, md: 3 },
              }}
            >
              <FormControl
                sx={{ width: { xs: "100%", sm: "45%", md: "100%" } }}
              >
                <InputLabel
                  htmlFor="email-input"
                  sx={{
                    fontSize: "14px",
                    color: "#878C91",
                    marginLeft: "-12px",
                    fontFamily: `'Plus Jakarta Sans', sans-serif`,
                  }}
                >
                  Email
                </InputLabel>
                <Input
                  type="email"
                  id="email-input"
                  {...register("email", { required: "Email is required" })}
                  aria-describedby="email-helper-text"
                />
                {errors.email?.message &&
                  typeof errors.email.message === "string" && (
                    <span
                      style={{
                        textAlign: "center",
                        fontSize: "12px",
                        color: "red",
                        marginTop: "7px",
                        fontFamily: `'Plus Jakarta Sans', sans-serif`,
                      }}
                    >
                      {errors.email.message}
                    </span>
                  )}
              </FormControl>

              <FormControl
                sx={{ width: { xs: "100%", sm: "45%", md: "100%" } }}
              >
                <InputLabel
                  htmlFor="name-input"
                  sx={{
                    fontSize: "14px",
                    color: "#878C91",
                    marginLeft: "-12px",
                    fontFamily: `'Plus Jakarta Sans', sans-serif`,
                  }}
                >
                  Name
                </InputLabel>
                <Input
                  type="text"
                  id="name-input"
                  aria-describedby="name-helper-text"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name?.message &&
                  typeof errors.name.message === "string" && (
                    <span
                      style={{
                        textAlign: "center",
                        fontSize: "12px",
                        color: "red",
                        marginTop: "7px",
                        fontFamily: `'Plus Jakarta Sans', sans-serif`,
                      }}
                    >
                      {errors.name.message}
                    </span>
                  )}
              </FormControl>

              <FormControl
                sx={{ width: { xs: "100%", sm: "45%", md: "100%" } }}
              >
                <InputLabel
                  htmlFor="phone-input"
                  sx={{
                    fontSize: "14px",
                    color: "#878C91",
                    marginLeft: "-12px",
                    fontFamily: `'Plus Jakarta Sans', sans-serif`,
                  }}
                >
                  Phone
                </InputLabel>
                <Input
                  {...register("phone", {
                    required: "Phone number is required",
                  })}
                  type="tel"
                  id="phone-input"
                  aria-describedby="phone-helper-text"
                />
                {errors.phone?.message &&
                  typeof errors.phone.message === "string" && (
                    <span
                      style={{
                        textAlign: "center",
                        fontSize: "12px",
                        color: "red",
                        marginTop: "7px",
                        fontFamily: `'Plus Jakarta Sans', sans-serif`,
                      }}
                    >
                      {errors.phone.message}
                    </span>
                  )}
              </FormControl>

              <FormControl
                sx={{ width: { xs: "100%", sm: "45%", md: "100%" } }}
              >
                <InputLabel
                  htmlFor="msg-input"
                  sx={{
                    fontSize: "14px",
                    color: "#878C91",
                    marginLeft: "-12px",
                    fontFamily: `'Plus Jakarta Sans', sans-serif`,
                  }}
                >
                  Message
                </InputLabel>
                <Input
                  {...register("message", {
                    required: "Enter a short Message here...!",
                  })}
                  type="text"
                  id="msg-input"
                  aria-describedby="msg-helper-text"
                />
                {errors.message?.message &&
                  typeof errors.message.message === "string" && (
                    <span
                      style={{
                        textAlign: "center",
                        fontSize: "12px",
                        color: "red",
                        marginTop: "7px",
                        fontFamily: `'Plus Jakarta Sans', sans-serif`,
                      }}
                    >
                      {errors.message.message}
                    </span>
                  )}
              </FormControl>

              <button
                type="submit"
                style={{
                  backgroundColor: "#000",
                  border: "none",
                  color: "#fff",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  padding: "5px 15px",
                  borderRadius: "50px",
                  fontFamily: `'Plus Jakarta Sans', sans-serif`,
                }}
              >
                Send
                <EastIcon sx={{ color: "#fff", marginLeft: "15px" }} />
              </button>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: { xs: "100%", md: "55%" }, // Increased size for the map
              height: "400px", // Increase map height
              order: { xs: 1, md: 2 },
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24142.293895231923!2d-0.14822161455170408!3d51.50694938613882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604cbf302d2af%3A0xbedf0b9b708ed1d5!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1727275697187!5m2!1sen!2s"
              width="100%"
              height="100%"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
        </Box>
      </form>
    </Container>
  );
};

export default Contactus;
