import React, { Component } from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import fotofarsash from "./farsashh.png";
import fotofarsash2 from "./mulanna.png";
import fotofarsash3 from "./farsashhs.png";
import fotofarsash4 from "./chornivdava.png";
import fotofarsash5 from "./pistalet.png";
class Farsash extends Component {
  render() {
    return (
      <Box >
        <Box
          display={"flex"}
          padding={"20px 0"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box>
            <Typography fontSize={"50px"} color={"#FFFFFF"}>
              Новые трейлеры
            </Typography>
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={"15px"}>
            <Typography fontSize={"18px"} color={"#FFFFFF"}>
              {" "}
              Все трейлеры
            </Typography>
            <Typography fontSize={"26px"} color={"#FFFFFF"}>
              <i class="bx bx-right-arrow-alt"></i>
            </Typography>
          </Box>
        </Box>
        <Box
          width={"100%"}
          height={"100%"}
          display={"felx"}
          flexDirection={"column"}
        >
          <Box
            height={"90vh"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"10px"}
            sx={{
              backgroundImage: `url(${fotofarsash})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              display: "flex",
            }}
          >
            <Typography fontSize={"73px"} color={"#FFFFFF"}>
              <i class="bx bx-play"></i>
            </Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            padding={"20px 0"}
          >
            <Box
              display={"felx"}
              gap={"15px"}
              sx={{ display: "flex" }}
              alignItems={"center"}
            >
              <Typography color={"#FFFFFF"} fontSize={"30px"}>
                Форсаж 9
              </Typography>
              <Box display={"flex"} gap={"15px"}>
                <Typography color={"#6D7792"} fontSize={"17px"}>
                  <i class="bx bxl-vk"></i>
                </Typography>
                <Typography color={"#6D7792"} fontSize={"17px"}>
                  <i class="bx bxl-instagram"></i>
                </Typography>
                <Typography color={"#6D7792"} fontSize={"17px"}>
                  <i class="bx bxl-facebook"></i>
                </Typography>
                <Typography color={"#6D7792"} fontSize={"17px"}>
                  <i class="bx bxl-twitter"></i>
                </Typography>
              </Box>
            </Box>
            <Box display={"flex"} gap={"15px"}>
              <Box display={"flex"} flexDirection={"column"} textAlign="center">
                {" "}
                <Typography
                  fontSize={"25px"}
                  padding={"10px"}
                  color={"#FFFFFF"}
                  borderRadius={"10px"}
                  bgcolor={"#1B2133"}
                >
                  <i class="bx bxs-like"></i>
                </Typography>
                <Typography fontSize={"15px"} color={"#FFFFFF"}>
                  3245
                </Typography>
              </Box>
              <Box display={"flex"} flexDirection={"column"} textAlign="center">
                <Typography
                  fontSize={"25px"}
                  padding={"10px"}
                  color={"#FFFFFF"}
                  borderRadius={"10px"}
                  bgcolor={"#1B2133"}
                >
                  <i class="bx bxs-dislike"></i>
                </Typography>
                <Typography fontSize={"15px"} color={"#FFFFFF"}>
                  420
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
        padding={'50px 0'}
          height={"100%"}
          
          sx={{ display: "flex" }}
          gap={"15px"}
        >
          <Box width={"25%"} height={"220px"} >
            <Box
              width={"100%"}
              height={"100%"}
              borderRadius={"10px"}
              sx={{
                backgroundImage: `url(${fotofarsash2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {" "}
              <Typography fontSize={"50px"} color={"#FFFFFF"}>
                <i class="bx bx-play"></i>
              </Typography>{" "}
            </Box>
            <Box>
              {" "}
              <Typography fontSize={"50px"} color={"#FFFFFF"}></Typography>{" "}
            </Box>

            <Typography padding={"10px 0"} fontSize={"20px"} color={"#FFFFFF"}>
              Мулан{" "}
            </Typography>
          </Box>
          <Box
            width={"25%"}
            height={"220px"}
  
            
          >
            <Box
              width={"100%"}
              height={"100%"}
              borderRadius={"10px"}
              sx={{
                backgroundImage: `url(${fotofarsash3})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {" "}
              <Typography fontSize={"50px"} color={"#FFFFFF"}>
                <i class="bx bx-play"></i>
              </Typography>{" "}
            </Box>
            <Box>
              {" "}
              <Typography fontSize={"50px"} color={"#FFFFFF"}></Typography>{" "}
            </Box>

            <Typography padding={'10px 0'} fontSize={'20px'} color={'#FFFFFF'}>Форсаж 9 </Typography>
          </Box>
          <Box
            width={"25%"}
            height={"220px"}
           
            
          >
            <Box
              width={"100%"}
              height={"100%"}
              borderRadius={"10px"}
              sx={{
                backgroundImage: `url(${fotofarsash4})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {" "}
              <Typography fontSize={"50px"} color={"#FFFFFF"}>
                <i class="bx bx-play"></i>
              </Typography>{" "}
            </Box>
            <Box>
              {" "}
              <Typography fontSize={"50px"} color={"#FFFFFF"}></Typography>{" "}
            </Box>

            <Typography padding={'10px 0'} fontSize={'20px'} color={'#FFFFFF'}>Чёрная Вдова </Typography>
          </Box>
          <Box
            width={"25%"}
            height={"220px"}
  
            
          >
            <Box
              width={"100%"}
              height={"100%"}
              borderRadius={"10px"}
              sx={{
                backgroundImage: `url(${fotofarsash5})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {" "}
              <Typography fontSize={"50px"} color={"#FFFFFF"}>
                <i class="bx bx-play"></i>
              </Typography>{" "}
            </Box>
            <Box>
              {" "}
              <Typography fontSize={"50px"} color={"#FFFFFF"}></Typography>{" "}
            </Box>

            <Typography padding={'10px 0'} fontSize={'20px'} color={'#FFFFFF'}>Тихое место 2 </Typography>
          </Box>
          
        </Box>
      </Box>
    );
  }
}

export default Farsash;
