import React, { Component } from "react";
import { Box } from "@mui/material";
import kinoEmblema from "./kinoEmblema.svg";
import { Typography } from "@mui/material";
import { Link, Routes } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <Box
        width={"100%"}
        padding={"20px 0"}
        // border={"5px solid"}
        bgcolor="transparent"
        justifyContent={"space-between"}
        alignItems={"center"}
        display={"flex"}
      >
        <Box>
          <Routes>
            <Box gap={"5px"} display={"flex"} alignItems={"center"}>
              <img src={kinoEmblema} alt="" />
              <Link to={"/"}>
                <Typography variant="p" color="#3657CB" fontSize={"25px"}>
                  Kino
                </Typography>
              </Link>
              <Typography variant="p" color="#FFFFFF" fontSize={"25px"}>
                area
              </Typography>
            </Box>
          </Routes>

          <Box
            display={"flex"}
            justifyContent={"space-between"}
            color={"#686868"}
          >
            <Box>
              <i class="bx bxl-vk"></i>
            </Box>
            <Box>
              <i class="bx bxl-instagram"></i>
            </Box>
            <Box>
              <i class="bx bxl-facebook"></i>
            </Box>
            <Box>
              <i class="bx bxl-twitter"></i>
            </Box>
          </Box>
        </Box>
        <Box>
          {" "}
          <Typography
            variant="p"
            color="#FFFFFF"
            fontSize={"17px"}
            display={"flex"}
            gap={"20px"}
          >
            <Link to="/Figmaikki">
              <li>Афиша</li>
            </Link>
            <li>Медиа</li>
            <li>Фильмы</li>
            <li>Актёры </li>
            <li>Новости</li>
            <li>Подборки</li>
            <li>Категории</li>
          </Typography>
        </Box>
        <Box display={"flex"} gap={"15px"}>
          <Box
            width={"55px"}
            height={"52px"}
            bgcolor={"#FFFFFF"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"10px"}
            fontSize={"15px"}
            color={"#3657CB"}
          >
            <i class="bx bx-search"></i>
          </Box>
          <Box
            width={"138px"}
            height={"53px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            bgcolor={"#3657CB"}
            borderRadius={"10px"}
            color={"#FFFFFF"}
            boxShadow={"0px 0px 15px rgba(72, 113, 255, 0.8)"}
          >
            Войти
          </Box>
        </Box>
      </Box>
    );
  }
}

export default Navbar;
