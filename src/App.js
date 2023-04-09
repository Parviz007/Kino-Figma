import { Container } from "@mui/material";
import { Box } from "@mui/system";
import "./App.css";
import backgraund from "./figma/Kino1/bacgraundjocer.png";
import Figmaikki from "./Figmaikki/Figmaikki";
import { Route, Routes } from "react-router-dom";
import Navbar from "./figma/Navbar/Navbar";
import Section_salom from "./figma/Section_1";

function App() {
  return (
    <div className="App">
      <Box
        width={"100%"}
        height={"100vh"}
        sx={{
          backgroundImage: `url(${backgraund})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          bgcolor: "#1e2538",
          backgroundRepeat: "no-repeat",
        }}
      >
        {" "}
        <Box>
          <Container>
            <Navbar />
          </Container>

          <Routes>
            <Route path="/" element={<Section_salom />} />
            {/* <Route path="/Figmaikki" element={<Figmaikki />} /> */}
            {/* <Container></Container> */}
          </Routes>
        </Box>
      </Box>
    </div>
  );
}

export default App;
