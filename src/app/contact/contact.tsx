"use client"; // This ensures the component is treated as a client component

import {
  Container,
  Box,
  Typography,
  FormControl,
  InputLabel,
  Input,
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
    <Box sx={{ marginTop: "60px", padding: { xs: "20px", md: "50px 80px" } }}>
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
            {/* Title with Plus Jakarta Sans font */}
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "48px",
                fontFamily: "'Plus Jakarta Sans', sans-serif", // Apply Plus Jakarta Sans font
              }}
            >
              Contact Us
            </Typography>

            {/* Subtitle with Plus Jakarta Sans font */}
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "medium",
                color: "#878C91",
                fontFamily: "'Plus Jakarta Sans', sans-serif", // Apply Plus Jakarta Sans font
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
              {/* Email Input */}
              <FormControl
                sx={{ width: { xs: "100%", sm: "45%", md: "100%" } }}
              >
                <InputLabel
                  htmlFor="email-input"
                  sx={{
                    fontSize: "14px",
                    color: "#878C91",
                    marginLeft: "-12px",
                    fontFamily: "'Plus Jakarta Sans', sans-serif", // Apply Plus Jakarta Sans font
                  }}
                >
                  Email
                </InputLabel>
                <Input
                  type="email"
                  id="email-input"
                  {...register("email", { required: "Email is required" })}
                  aria-describedby="email-helper-text"
                  sx={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} // Apply Plus Jakarta Sans font
                />
                {errors.email?.message &&
                  typeof errors.email.message === "string" && (
                    <span
                      style={{
                        // textAlign: "center",
                        fontSize: "12px",
                        color: "red",
                        marginTop: "7px",
                        fontFamily: "'Plus Jakarta Sans', sans-serif", // Apply Plus Jakarta Sans font
                      }}
                    >
                      {errors.email.message}
                    </span>
                  )}
              </FormControl>

              {/* Name Input */}
              <FormControl
                sx={{ width: { xs: "100%", sm: "45%", md: "100%" } }}
              >
                <InputLabel
                  htmlFor="name-input"
                  sx={{
                    fontSize: "14px",
                    color: "#878C91",
                    marginLeft: "-12px",
                    fontFamily: "'Plus Jakarta Sans', sans-serif", // Apply Plus Jakarta Sans font
                  }}
                >
                  Name
                </InputLabel>
                <Input
                  type="text"
                  id="name-input"
                  aria-describedby="name-helper-text"
                  {...register("name", { required: "Name is required" })}
                  sx={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} // Apply Plus Jakarta Sans font
                />
                {errors.name?.message &&
                  typeof errors.name.message === "string" && (
                    <span
                      style={{
                        // textAlign: "center",
                        fontSize: "12px",
                        color: "red",
                        marginTop: "7px",
                        fontFamily: "'Plus Jakarta Sans', sans-serif", // Apply Plus Jakarta Sans font
                      }}
                    >
                      {errors.name.message}
                    </span>
                  )}
              </FormControl>

              {/* Phone Input */}
              <FormControl
                sx={{ width: { xs: "100%", sm: "45%", md: "100%" } }}
              >
                <InputLabel
                  htmlFor="phone-input"
                  sx={{
                    fontSize: "14px",
                    color: "#878C91",
                    marginLeft: "-12px",
                    fontFamily: "'Plus Jakarta Sans', sans-serif", // Apply Plus Jakarta Sans font
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
                  sx={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} // Apply Plus Jakarta Sans font
                />
                {errors.phone?.message &&
                  typeof errors.phone.message === "string" && (
                    <span
                      style={{
                        // textAlign: "center",
                        fontSize: "12px",
                        color: "red",
                        marginTop: "7px",
                        fontFamily: "'Plus Jakarta Sans', sans-serif", // Apply Plus Jakarta Sans font
                      }}
                    >
                      {errors.phone.message}
                    </span>
                  )}
              </FormControl>

              {/* Message Input */}
              <FormControl
                sx={{ width: { xs: "100%", sm: "45%", md: "100%" } }}
              >
                <InputLabel
                  htmlFor="msg-input"
                  sx={{
                    fontSize: "14px",
                    color: "#878C91",
                    marginLeft: "-12px",
                    fontFamily: "'Plus Jakarta Sans', sans-serif", // Apply Plus Jakarta Sans font
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
                  sx={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} // Apply Plus Jakarta Sans font
                />
                {errors.message?.message &&
                  typeof errors.message.message === "string" && (
                    <span
                      style={{
                        // textAlign: "center",
                        fontSize: "12px",
                        color: "red",
                        marginTop: "7px",
                        fontFamily: "'Plus Jakarta Sans', sans-serif", // Apply Plus Jakarta Sans font
                      }}
                    >
                      {errors.message.message}
                    </span>
                  )}
              </FormControl>

              {/* Submit Button with Icon */}
              <button
                type="submit"
                style={{
                  backgroundColor: "#000",
                  border: "none",
                  color: "#fff",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 20px",
                  borderRadius: "50px",
                  fontFamily: "'Plus Jakarta Sans', sans-serif", // Apply Plus Jakarta Sans font
                }}
              >
                Send
                <EastIcon sx={{ color: "#fff", marginLeft: "30px" }} />
              </button>
            </Box>
          </Box>

          {/* Google Maps Iframe */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: { xs: "100%", md: "50%" }, // Increase the width on larger screens
              order: { xs: 1, md: 2 },
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10400.449946199482!2d-0.12762568566257623!3d51.507350379635455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b30f0ff55cd%3A0x49e2c59cbf1e685!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1727275697187!5m2!1sen!2s"
              width="100%"
              height="450" // Increased the height
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
            ></iframe>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default Contactus;
