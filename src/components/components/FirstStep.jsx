import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Grid } from "@mui/material";

const FirstStep = () => {
  const [value, setValue] = React.useState({
    first: "",
    second: "",
    nic: "",
    gender: "",
  });
  console.log("value", value);

  const handleChange = (event) => {
    // setValue(event.target.value);
    setValue({ gender: event.target.value });
  };
  return (
    <Grid style={{ width: 800 }} ml={75} mt={10}>
      {/* <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      > */}
      <Grid container spacing={2}>
        <Grid item md={6}>
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            style={{ width: 400 }}
            onChange={(e) => setValue({ first: e.target.value })}
          />
        </Grid>
        <Grid item md={6}>
          <TextField
            id="outlined-basic"
            label="Second Name"
            variant="outlined"
            style={{ width: 400 }}
            onChange={(e) => setValue({ second: e.target.value })}
          />
        </Grid>
        <Grid item md={6}>
          <TextField
            id="outlined-basic"
            label="NIC"
            variant="outlined"
            style={{ width: 400 }}
            onChange={(e) => setValue({ nic: e.target.value })}
          />
        </Grid>
        <Grid item md={6}>
          <FormControl row>
            <FormLabel id="demo-controlled-radio-buttons-group" row>
              Gender
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
              row
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
      {/* <TextField id="outlined-basic" label="First Name" variant="outlined" />
        <TextField id="outlined-basic" label="Last Name" variant="outlined" />
        <TextField id="outlined-basic" label="NIC" variant="outlined" />

        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </FormControl> */}
      {/* </Box> */}
    </Grid>
  );
};

export default FirstStep;
