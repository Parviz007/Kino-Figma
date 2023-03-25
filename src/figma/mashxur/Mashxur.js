import React, { Component } from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import fotojocera from "./jocercer.png";
import fotojocera2 from "./bas.png";
import fotojocera3 from "./juro.png";
import fotojocera4 from "./girakaysugiduxtar.png";
class Mashxur extends Component {
  render() {
    return (
      <Box padding={"50px 0"} height={"100%"}>
        <Box
          sx={{ display: "flex" }}
          justifyContent={"space-between"}
          alignItems={"center"}
          padding={"15px"}
          color={"#FFFFFF"}
        >
          <Box>
            <Typography fontSize={"45px"}>Популярные фильмы</Typography>
          </Box>
          <Box
            sx={{ display: "flex" }}
            gap={"20px"}
            color={"rgba(255, 255, 255, 0.35);"}
          >
            {" "}
            <Typography>Всё время </Typography>
            <Typography>2020 </Typography>
            <Typography>2019</Typography>
            <Typography>2018</Typography>
            <Typography>2017</Typography>
            <Typography>2016</Typography>
            <Typography>2015</Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex" }} gap={"15px"}>
          <Box width={"25%"} height={"400px"} flexDirection={"column"}>
            <Box
              width={"100%"}
              height={"90%"}
              borderRadius={"10px"}
              position={"relative"}
              sx={{
                backgroundImage: `url(${fotojocera})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                bgcolor: "#1e2538",
              }}
            >
              <Box
                width={"62px"}
                height={"33px"}
                position={"absolute"}
                top={"10px"}
                right={"10px"}
                bgcolor={"#89CB36"}
                color={"#FFFFFF"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                borderRadius={"5px"}
              >
                6.7{" "}
              </Box>
            </Box>
            <Box>
              {" "}
              <Box textAlign={"left"} color={"#FFFFFF"}>
                <Typography fontSize={"14px"}>Джокер</Typography>
                <Typography fontSize={"14px"} color={"#F2F60F"}>
                  Триллер, драма, криминал
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box width={"25%"} height={"400px"} flexDirection={"column"}>
            <Box
              width={"100%"}
              height={"90%"}
              borderRadius={"10px"}
              position={"relative"}
              sx={{
                backgroundImage: `url(${fotojocera2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                bgcolor: "#1e2538",
              }}
            >
              <Box
                width={"62px"}
                height={"33px"}
                position={"absolute"}
                top={"10px"}
                right={"10px"}
                bgcolor={"#89CB36"}
                color={"#FFFFFF"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                borderRadius={"5px"}
              >
                6.7{" "}
              </Box>
            </Box>
            <Box>
              {" "}
              <Box textAlign={"left"} color={"#FFFFFF"}>
                <Typography fontSize={"14px"}>История игрушек 4</Typography>
                <Typography fontSize={"14px"} color={"#F2F60F"}>
                  Мультфильм, приключения ...
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box width={"25%"} height={"400px"} flexDirection={"column"}>
            <Box
              width={"100%"}
              height={"90%"}
              borderRadius={"10px"}
              position={"relative"}
              sx={{
                backgroundImage: `url(${fotojocera3})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                bgcolor: "#1e2538",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Box
                width={"62px"}
                height={"33px"}
                position={"absolute"}
                top={"10px"}
                right={"10px"}
                bgcolor={"#89CB36"}
                color={"#FFFFFF"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                borderRadius={"5px"}
              >
                6.7{" "}
              </Box>
            </Box>
            <Box>
              {" "}
              <Box textAlign={"left"} color={"#FFFFFF"}>
                <Typography fontSize={"14px"}>Однажды в… Голливуде</Typography>
                <Typography fontSize={"14px"} color={"#F2F60F"}>
                  Драма, комедия
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box width={"25%"} height={"400px"} flexDirection={"column"}>
            <Box
              width={"100%"}
              height={"90%"}
              borderRadius={"10px"}
              position={"relative"}
              sx={{
                backgroundImage: `url(${fotojocera4})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                bgcolor: "#1e2538",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Box
                width={"62px"}
                height={"33px"}
                position={"absolute"}
                top={"10px"}
                right={"10px"}
                bgcolor={"#89CB36"}
                color={"#FFFFFF"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                borderRadius={"5px"}
              >
                6.7{" "}
              </Box>
            </Box>
            <Box>
              {" "}
              <Box textAlign={"left"} color={"#FFFFFF"}>
                <Typography fontSize={"14px"}>Солнцестояние</Typography>
                <Typography fontSize={"14px"} color={"#F2F60F"}>
                  Ужасы, триллер, драма
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          display={"flex"}
          padding={"30px 45%"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography fontSize={"25px"} color={"#FFFFFF"}>
            <i class="bx bx-left-arrow-alt"></i>
          </Typography>
          <Typography fontSize={"18px"} color={"#FFFFFF"}>
            4/15
          </Typography>
          <Typography fontSize={"25px"} color={"#FFFFFF"}>
            <i class="bx bx-right-arrow-alt"></i>
          </Typography>
        </Box>
      </Box>
    );
  }
}

export default Mashxur;
