import React, { Component } from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import kvent from "./kvent.png";
import jeson from "./jeyson.png";
class Akyiyori extends Component {
  render() {
    return (
       <Box>
        <Box
          sx={{ display: "flex" }}
          justifyContent={"space-between"}
          alignItems={"center"}
          color={"#FFFFFF"}
          padding={'40px'}
        >
          <Box>
            <Typography fontSize={"45px"}>Популярные персоны</Typography>
          </Box>
          <Box sx={{ display: "flex" }} gap={"25px"}>
            <Typography>За год </Typography>
            <Typography>За месяц</Typography>
            <Typography>За неделю</Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex" }} gap={"15px"}>
          <Box
            width={"444px"}
            height={"444px"}
            borderRadius={"10px"}
            position={"relative"}
            sx={{
              backgroundImage: `url(${kvent})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              bgcolor: "#1e2538",
            }}
          >
            {" "}
            <Box padding={"15px"}>
              <Box>
                {" "}
                <Typography color={"#F2F60F"}>1-е место </Typography>
              </Box>
              <Box position={"absolute"} bottom={"15px"} color={"red"}>
                {" "}
                <Typography fontSize={"22px"} color={"#FFFFFF"}>
                  Квентин Тарантино
                </Typography>
                <Typography
                  fontSize={"18px"}
                  color={"rgba(255, 255, 255, 0.35)"}
                >
                  Quentin Tarantino{" "}
                </Typography>
                <Typography color={"#F2F60F"} fontSize={"13px"}>
                  57 лет{" "}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            width={"444px"}
            height={"444px"}
            borderRadius={"10px"}
            position={"relative"}
            padding={"15px"}
            sx={{
              backgroundImage: `url(${jeson})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              bgcolor: "#1e2538",
            }}
          >
            {" "}
            <Box position={"absolute"} bottom={"15px"} color={"red"}>
              {" "}
              <Typography fontSize={"22px"} color={"#FFFFFF"}>
                Джейсон Стейтем
              </Typography>
              <Typography fontSize={"18px"} color={"rgba(255, 255, 255, 0.35)"}>
                Jason Statham{" "}
              </Typography>
              <Typography color={"#F2F60F"} fontSize={"13px"}>
                52 года
              </Typography>
            </Box>
            <Typography color={"#F2F60F"}>2-е место</Typography>
          </Box>
          <Box
            width={"444px"}
            height={"444px"}
            borderRadius={"10px"}
            sx={{ background: "#1B2133" }}
          >
            <Box
              borderRadius={"10px"}
              flexDirection={"column"}
              display={"flex"}
            >
              <Box
                width={"100%"}
                sx={{ display: "flex" }}
                alignItems={"center"}
                justifyContent={"space-between"}
                padding={"15px"}
              >
                <Box
                  sx={{ display: "flex" }}
                  flexDirection={"column"}
                  gap={"4px"}
                >
                  <Typography fontSize={"18px"} color={"#FFFFFF"}>
                    Тинто Брасс
                  </Typography>
                  <Typography fontSize={"15px"} color={"#3B486B"}>
                    Tinto Brass
                  </Typography>
                  <Typography fontSize={"15px"} color={"#F2F60F"}>
                    {" "}
                    87 лет
                  </Typography>
                </Box>
                <Box>
                  <Typography fontSize={"15px"} color={"#F2F60F"}>
                    3-е место
                  </Typography>
                </Box>
              </Box>
              <Box
                width={"100%"}
                sx={{ display: "flex" }}
                alignItems={"center"}
                justifyContent={"space-between"}
                padding={"15px"}
              >
                <Box
                  sx={{ display: "flex" }}
                  flexDirection={"column"}
                  gap={"4px"}
                >
                  <Typography fontSize={"18px"} color={"#FFFFFF"}>
                    Тинто Брасс
                  </Typography>
                  <Typography fontSize={"15px"} color={"#3B486B"}>
                    Tinto Brass
                  </Typography>
                  <Typography fontSize={"15px"} color={"#F2F60F"}>
                    {" "}
                    87 лет
                  </Typography>
                </Box>
                <Box>
                  <Typography fontSize={"15px"} color={"#F2F60F"}>
                    3-е место
                  </Typography>
                </Box>
              </Box>
              <Box
                width={"100%"}
                sx={{ display: "flex" }}
                alignItems={"center"}
                justifyContent={"space-between"}
                padding={"15px"}
              >
                <Box
                  sx={{ display: "flex" }}
                  flexDirection={"column"}
                  gap={"4px"}
                >
                  <Typography fontSize={"18px"} color={"#FFFFFF"}>
                    Тинто Брасс
                  </Typography>
                  <Typography fontSize={"15px"} color={"#3B486B"}>
                    Tinto Brass
                  </Typography>
                  <Typography fontSize={"15px"} color={"#F2F60F"}>
                    {" "}
                    87 лет
                  </Typography>
                </Box>
                <Box>
                  <Typography fontSize={"15px"} color={"#F2F60F"}>
                    3-е место
                  </Typography>
                </Box>
              </Box>
              <Box
                width={"100%"}
                sx={{ display: "flex" }}
                alignItems={"center"}
                justifyContent={"space-between"}
                padding={"15px"}
              >
                {" "}
                <Box
                  sx={{ display: "flex" }}
                  flexDirection={"column"}
                  gap={"4px"}
                >
                  <Typography fontSize={"18px"} color={"#FFFFFF"}>
                    Тинто Брасс
                  </Typography>
                  <Typography fontSize={"15px"} color={"#3B486B"}>
                    Tinto Brass
                  </Typography>
                  <Typography fontSize={"15px"} color={"#F2F60F"}>
                    {" "}
                    87 лет
                  </Typography>
                </Box>
                <Box>
                  <Typography fontSize={"15px"} color={"#F2F60F"}>
                    3-е место
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default Akyiyori;
