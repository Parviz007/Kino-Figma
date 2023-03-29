import React, { Component } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import fotojocera5 from "./ftto1.png";
import fotojocera6 from "./fotto2.png";
import fotojocera7 from "./fotto3.png";
import fotojocera8 from "./fotto4.png";
import fotojocera13 from "./kinomini6.png";
import fotojocera9 from "./kinomini.png";
import fotojocera10 from "./kinomini2.png";
import fotojocera11 from "./kinomini3.png";
import fotojocera12 from "./kinomini4.png";
import fotoblue from "./bluefont.png";
import brend from "./brend.svg";
// eslint-disable-next-line import/no-anonymous-default-export
export default class extends Component {
  render() {
    return (
      <div>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "25px",

              alignItems: "center",
              color: "#FFFFFF",
              background: "#151A26",
            }}
          >
            <Typography fontSize={"50px"}>Ожидаемые новинки</Typography>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              fontSize={"20px"}
            >
              <i class="bx bx-left-arrow-alt"></i>2/5
              <i class="bx bx-right-arrow-alt"></i>
            </Typography>
          </Box>
          <Box>
            {" "}
            <Box height={"100%"}>
              <Box sx={{ display: "flex" }} gap={"15px"}>
                <Box width={"25%"} height={"400px"} flexDirection={"column"}>
                  <Box
                    width={"100%"}
                    height={"90%"}
                    borderRadius={"10px"}
                    position={"relative"}
                    sx={{
                      backgroundImage: `url(${fotojocera5})`,
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
                      backgroundImage: `url(${fotojocera6})`,
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
                      <Typography fontSize={"14px"}>
                        История игрушек 4
                      </Typography>
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
                      backgroundImage: `url(${fotojocera7})`,
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
                      <Typography fontSize={"14px"}>
                        Однажды в… Голливуде
                      </Typography>
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
                      backgroundImage: `url(${fotojocera8})`,
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
            </Box>
            <Box padding={"50px 0"}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography color={"#FFFFFF"} fontSize={"50px"}>
                  Кассовые сборы{" "}
                </Typography>
                <Typography color={"#FFFFFF"} fontSize={"15px"}>
                  13 марта — 15 марта
                </Typography>
                <Typography color={"#FFFFFF"}>-------</Typography>
                <Box
                  sx={{
                    display: "flex",
                    gap: "15px",
                  }}
                >
                  <Typography color={"#FFFFFF"} fontSize={"15px"}>
                    Россия{" "}
                  </Typography>
                  <Typography color={"#FFFFFF"} fontSize={"15px"}>
                    Весь мир{" "}
                  </Typography>
                  <Typography color={"#FFFFFF"} fontSize={"15px"}>
                    {" "}
                    США и Канада{" "}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{ display: "flex" }}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Box sx={{ display: "flex" }} alignItems={"center"}>
                  <Box
                    width={"100px"}
                    height={"141px"}
                    sx={{
                      backgroundImage: `url(${fotojocera9})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      bgcolor: "#1e2538",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></Box>
                  <Box padding={"10px"}>
                    <Typography color="#FFFFFF">1. Бладшот</Typography>
                    <Typography color="#F2F60F">$13 млн</Typography>
                    <Typography color="#75787F">
                      $15.1 млн за 4 недели
                    </Typography>
                  </Box>
                </Box>{" "}
                <Box
                  padding={"50px 0"}
                  sx={{ display: "flex" }}
                  alignItems={"center"}
                >
                  <Box
                    width={"100px"}
                    height={"141px"}
                    sx={{
                      backgroundImage: `url(${fotojocera13})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      bgcolor: "#1e2538",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></Box>
                  <Box padding={"10px"}>
                    <Typography color="#FFFFFF">1. Бладшот</Typography>
                    <Typography color="#F2F60F">$13 млн</Typography>
                    <Typography color="#75787F">
                      $15.1 млн за 4 недели
                    </Typography>
                  </Box>
                </Box>{" "}
                <Box sx={{ display: "flex" }} alignItems={"center"}>
                  <Box
                    width={"100px"}
                    height={"141px"}
                    borderRadius={"5px"}
                    sx={{
                      backgroundImage: `url(${fotojocera10})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      bgcolor: "#1e2538",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></Box>
                  <Box padding={"10px"}>
                    <Typography color="#FFFFFF">1. Бладшот</Typography>
                    <Typography color="#F2F60F">$13 млн</Typography>
                    <Typography color="#75787F">
                      $15.1 млн за 4 недели
                    </Typography>
                  </Box>
                </Box>{" "}
                <Box sx={{ display: "flex" }} alignItems={"center"}>
                  <Box
                    width={"100px"}
                    height={"141px"}
                    borderRadius={"5px"}
                    sx={{
                      backgroundImage: `url(${fotojocera11})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      bgcolor: "#1e2538",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></Box>
                  <Box padding={"10px"}>
                    <Typography color="#FFFFFF">1. Бладшот</Typography>
                    <Typography color="#F2F60F">$13 млн</Typography>
                    <Typography color="#75787F">
                      $15.1 млн за 4 недели
                    </Typography>
                  </Box>
                </Box>{" "}
                <Box sx={{ display: "flex" }} alignItems={"center"}>
                  <Box
                    width={"100px"}
                    height={"141px"}
                    borderRadius={"5px"}
                    sx={{
                      backgroundImage: `url(${fotojocera12})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      bgcolor: "#1e2538",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></Box>
                  <Box padding={"10px"}>
                    <Typography color="#FFFFFF">1. Бладшот</Typography>
                    <Typography color="#F2F60F">$13 млн</Typography>
                    <Typography color="#75787F">
                      $15.1 млн за 4 недели
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            width={"100%"}
            height={"548px"}
            borderRadius={"5px"}
            sx={{
              backgroundImage: `url(${fotoblue})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              bgcolor: "#1e2538",
              backgroundRepeat: "no-repeat",
              position: "relative",
            }}
          >
            {" "}
            <Box
              justifyContent={"center"}
              padding={"100px"}
              sx={{ display: "flex", alignItems: "center" }}
              color={"#FFFFFF"}
              gap={"10px"}
            >
              <img src={brend} alt="" />
              <Typography>Kinoarea</Typography>
            </Box>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"column"}
              textAlign={"center"}
              color={"#FFFFFF"}
            >
              <Typography fontSize={"40px"}>
                Подпишитесь на E-mail рассылку
              </Typography>
              <Typography>
                Если хотиет быть в курсе последних новостей и новинок кино -{" "}
                <br />
                заполните форму ниже и оформите бесплатную E-mail рассылку
              </Typography>
              <Box sx={{ display: "flex" }} gap={"10px"} padding={"15px 0"}>
                <Box
                  width={"450px"}
                  height={"71px"}
                  borderRadius={"10px"}
                  bgcolor={"#FFFFFF"}
                  border={"solid #FFFFFF"}
                  padding={"15px"}
                  textAlign={"left"}
                  color={"#151A2699"}
                >
                  Введите свой E-mail адрес
                </Box>
                <Box
                  width={"170px"}
                  height={"71px"}
                  borderRadius={"10px"}
                  bgcolor={"#F2F60F"}
                  color={"black"}
                  padding={"20px 0"}
                  textAlign={"center"}
                  border={"transparent"}
                >
                  Подписаться
                </Box>
                <Box>
                  <Typography>  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </div>
    );
  }
}
