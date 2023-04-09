import React from "react";
import { Box, Container } from "@mui/material";
import Navbar from "./Navbar/Navbar";
import XozirKino from "./Kino1/XozirKino";
import Farsash from "./Farsash/Farsash";
import Mashxur from "./mashxur/Mashxur";
import Akyiyori from "./Akriyori/Akyiyori";
import Jemis from "./jemis/Jemis";
import Finish from "./Finish/finish";
export default function Section_salom() {
  return (
    <Box>
      <Container>
        <XozirKino />
        <Farsash />
        <Mashxur />
        <Akyiyori />
        <Jemis />
        <Finish />
      </Container>
    </Box>
  );
}
