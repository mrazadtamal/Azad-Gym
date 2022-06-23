import React from "react";
import { Box, Stack, Typography } from "@mui/material";

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
    </Box>
  );
};

export default HeroBanner;
