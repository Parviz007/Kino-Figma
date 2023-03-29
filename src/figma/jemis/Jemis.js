import React, { Component } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { padding, positions, textAlign } from "@mui/system";
import fotojemiss from "./jemis.png";
import fotosonic from "./sonic.png";
import fotokino3 from "./kino3.png";
import fotokino4 from "./kino4.png";
import fotokino5 from "./kino5.png";
export default class Jemis extends Component {
  render() {
    return (
      <div>
        <Box
          width={"100%"}
          height={"100%"}
          paddingBottom={"50px"}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "60px 0",
            }}
          >
            <Typography variant="h1" color={"#FFFFFF"} fontSize={"50px"}>
              Последние новости
            </Typography>
            <Typography
              color={"#FFFFFF"}
              fontSize={"20px"}
              sx={{ display: "flex", alignItems: "center" }}
            >
              Все новости <i class="bx bx-right-arrow-alt"></i>
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }} gap={"15px"}>
            <Box
              width={"80%"}
              height={"710px"}
              borderRadius={"10px"}
              padding={"25px"}
              position={"relative"}
              sx={{
                backgroundImage: `url(${fotojemiss})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Box
                sx={{ display: "flex" }}
                gap={"15px"}
                color={"#FFFFFF"}
                position={"absolute"}
                top={"25px"}
                left={"25px"}
              >
                <Typography sx={{ display: "flex", alignItems: "center" }}>
                  15 Апр 2020
                </Typography>
                <Typography sx={{ display: "flex", alignItems: "center" }}>
                  <i class="bx bx-show"></i>242
                </Typography>
                <Typography sx={{ display: "flex", alignItems: "center" }}>
                  <i class="bx bx-message-rounded"></i>14
                </Typography>
              </Box>
              <Box
                maxWidth={"850px"}
                color={"#FFFFFF"}
                position={"absolute"}
                bottom={"25px"}
              >
                <Typography variant="h1" fontSize={"35px"}>
                  Не время умирать. Перенос релиза фильма{" "}
                </Typography>
                <Typography fontSize={"15px"}>
                  Но действия представителей оппозиции в равной степени
                  предоставлены сами себе. В рамках <br /> спецификации
                  современных стандартов, стремящиеся вытеснить традиционное
                  производство, <br /> нанотехнологии указаны как претенденты на
                  роль ключевых факторов.{" "}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{ display: "flex", gap: "15px", flexDirection: "column" }}
              width={"20%"}
              height={"100%"}
            >
              <Box
                height={"165px"}
                borderRadius={"10px"}
                position={"relative"}
                sx={{
                  backgroundImage: `url(${fotosonic})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Box padding={"10px"} color={"#FFFFFF"}>
                  <Typography fontSize={"15px"}>15 Апр 2020</Typography>
                  <Typography
                    position={"absolute"}
                    bottom={"15px"}
                    fontSize={"18px"}
                  >
                    Как изменили Соника с последнего анонса{" "}
                  </Typography>
                </Box>
              </Box>
              <Box
                height={"165px"}
                borderRadius={"10px"}
                position={"relative"}
                sx={{
                  backgroundImage: `url(${fotokino3})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Box padding={"10px"} color={"#FFFFFF"}>
                  <Typography fontSize={"15px"}>15 Апр 2020</Typography>
                  <Typography
                    position={"absolute"}
                    bottom={"15px"}
                    fontSize={"18px"}
                  >
                    Как изменили Соника с последнего анонса{" "}
                  </Typography>
                </Box>
              </Box>
              <Box
                height={"165px"}
                borderRadius={"10px"} 
                position={'relative'}
                sx={{
                  backgroundImage: `url(${fotokino4})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {" "}
                <Box padding={"10px"} color={"#FFFFFF"}>
                  <Typography fontSize={"15px"}>15 Апр 2020</Typography>
                  <Typography
                    position={"absolute"}
                    bottom={"15px"}
                    fontSize={"18px"}
                  >
                    Как изменили Соника с последнего анонса{" "}
                  </Typography>
                </Box>
              </Box>
              <Box
                height={"165px"}
                borderRadius={"10px"}
                position={"relative"}
                sx={{
                  backgroundImage: `url(${fotokino5})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {" "}
                <Box padding={"10px"} color={"#FFFFFF"}>
                  <Typography fontSize={"15px"}>15 Апр 2020</Typography>
                  <Typography
                    position={"absolute"}
                    bottom={"15px"}
                    fontSize={"18px"}
                  >
                    Как изменили Соника с последнего анонса
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </div>
    );
  }
}
