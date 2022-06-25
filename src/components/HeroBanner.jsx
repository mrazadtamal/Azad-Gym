import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
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
      <Typography lineHeight="35px" fontSize="22px">
        Azad GYM
      </Typography>
      <Button>Learn More</Button>
    </Box>
  );
};

export default HeroBanner;
