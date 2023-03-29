import { Container } from "@mui/material";
import { Box } from "@mui/system";
import "./App.css";
import XozirKino from "./figma/Kino1/XozirKino";
import Navbar from "./figma/Navbar/Navbar";
import backgraund from "./figma/Kino1/bacgraundjocer.png";
import Farsash from "./figma/Farsash/Farsash";
import Mashxur from "./figma/mashxur/Mashxur";
import Akyiyori from "./figma/Akriyori/Akyiyori";
import Jemis from "./figma/jemis/Jemis";
import Finish from "./figma/Finish/finish";
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
        <Container>
          <Navbar />
          <XozirKino />
          <Farsash />
          <Mashxur />
          <Akyiyori />
          <Jemis />
        </Container>
        <Box
          sx={{
            background: "#151A26",
          }}
        >
          <Container>
            <Finish />
          </Container>
        </Box>
      </Box>
    </div>
  );
}

export default App;
