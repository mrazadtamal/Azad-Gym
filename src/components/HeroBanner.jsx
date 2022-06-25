import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "150px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography color="#0E2F5A" fontWeight="400" fontSize="26px">
        Azad GYM
      </Typography>
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        fontWeight="700"
        fontSize="26px"
      >
        Azad GYM Azad <br /> GYM Azad GYM
      </Typography>
      <Typography lineHeight="35px" mb={3} fontSize="22px">
        best gym in the world
      </Typography>
      <Button href="#exercises" variant="contained">
        Learn More
      </Button>
      <img
        className="hero-banner-img"
        src="https://res.cloudinary.com/abidazad/image/upload/v1656177254/pexels-victor-freitas-841130_1_fa9j0v.jpg"
        alt=""
      />
    </Box>
  );
};

export default HeroBanner;
