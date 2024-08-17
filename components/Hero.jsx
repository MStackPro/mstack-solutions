"use client";

import React from "react";
import { ArrowOutward } from "@mui/icons-material";
import { Box, Button, styled, Typography } from "@mui/material";

const PrimaryButton = styled(Button)({
  backgroundColor: "#d80000",
  ":hover": { backgroundColor: "#7f0c0c" },
});
const SecondaryButton = styled(Button)({
  backgroundColor: "#f1f1f1",
  ":hover": { backgroundColor: "#a5a5a5" },
  color: "#1e1e1e",
});

export default function Hero() {
  return (
    <Box className="flex flex-col items-center justify-center text-center space-y-8">
      <Typography className="xl:text-6xl text-2xl font-semibold xl:w-1/2 w-2/3 capitalize">
        We create <span className="text-primary">amazing</span> experiences for
        your brand.
      </Typography>
      <Typography className="capitalize xl:w-1/2 w-2/3">
        We are skilled at making complex ideas plain and simple
      </Typography>

      <div className="flex flex-col items-center gap-8 xl:flex-row">
        <PrimaryButton href="/contact" variant="contained" endIcon={<ArrowOutward />}>
          get in touch
        </PrimaryButton>
        <SecondaryButton variant="contained" endIcon={<ArrowOutward />}>
          See all projects
        </SecondaryButton>
      </div>
    </Box>
  );
}
