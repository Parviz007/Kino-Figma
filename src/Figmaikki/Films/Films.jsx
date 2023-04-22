import { Box } from "@mui/material";
import React from "react";
import Kino from "./Kino/Kino";
import Email from "./E-mail/Email";
import End from "./End/End";

export default function Films() {
  return (
    <Box>
      <Kino />
      <Email/>
      <End/>
    </Box>
  );
}
