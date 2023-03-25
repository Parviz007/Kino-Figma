import React, { Component } from "react";

import { Box } from "@mui/material";
export default class Jemis extends Component {
  render() {
    return (
      <div>
        <Box sx={{display:"felx"}}>
          <Box width={"80%"} height={"50px"} border={"solid blue"}></Box>
          <Box width={"20%"} height={"50px"} border={"solid red"} ></Box>

        </Box>
      </div>
    );
  }
}

