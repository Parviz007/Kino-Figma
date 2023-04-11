import React from "react";
import { Container } from "@mui/material";
import { Box } from "@mui/system";
import "./App.css";
import backgraund from "./figma/Kino1/bacgraundjocer.png";
import { Route, Routes } from "react-router-dom";
import Navbar from "./figma/Navbar/Navbar";
import Section_1 from "./figma/Section_1";
import Section_2 from "./Figmaikki/Section_2";

export default function App() {
  return (
    <div>
      <Box
        width={"100%"}
        height={"100vh"}
        sx={{
          background: `url(${backgraund})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          bgcolor: "#1e2538",
          backgroundRepeat: "no-repeat",
          position: "absolute",
          top: "0",
          zIndex: "-10"
        }}
      >
        {" "}
        <Box>
          <Container>
            <Navbar />
          </Container>
        </Box>
      </Box>

      <Routes>
        <Route path="/" element={<Section_1 />} />
        <Route path="/afisha" element={<Section_2 />} />
      </Routes>
    </div>
  );
}
