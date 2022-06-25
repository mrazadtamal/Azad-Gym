import React, { useState, useEffect } from "react";
import { Box, Stack, Typography, Button, TextField } from "@mui/material";

const SearchExercises = () => {
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: "44px", xs: "50px" } }}
        mb="50px"
        mt="60px"
        textAlign="center"
      >
        search
      </Typography>
      <Box position="relative" mb="72px">
        <TextField />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
