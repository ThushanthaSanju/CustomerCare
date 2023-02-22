import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const FirstStep = () => {
  return (
    <div>
      {" "}
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="First Name" variant="outlined" />
        <TextField id="outlined-basic" label="Last Name" variant="outlined" />
        <TextField id="outlined-basic" label="NIC" variant="outlined" />
      </Box>
    </div>
  );
};

export default FirstStep;
