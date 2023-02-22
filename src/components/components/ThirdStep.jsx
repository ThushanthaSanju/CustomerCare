import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Grid, InputLabel, MenuItem, Select } from "@mui/material";

const ThirdStep = () => {
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Grid style={{ width: 800 }} ml={75} mt={10}>
      {" "}
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
            label="Mobile Number"
            variant="outlined"
            style={{ width: 400 }}
          />
        </Grid>
        <Grid item md={6}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            style={{ width: 400 }}
          />
        </Grid>
        <Grid item md={6}>
          <TextField
            id="outlined-basic"
            label="Remarks"
            variant="outlined"
            style={{ width: 800 }}
            multiline
            rows={6}
          />
        </Grid>
        {/* <Grid item md={6}>
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
        </Grid> */}
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

export default ThirdStep;
