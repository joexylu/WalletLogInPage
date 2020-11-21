import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  formControl: {
    minWidth: 50,
  },
  selectEmpty: {
    border: "none"
  }
}));

const PhoneNumSelect = () => {
  const classes = useStyles();

  const [countryCode, SetCountryCode] = useState(`🇨🇳 +86`);

  const handleChange = event => {
    SetCountryCode(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select
          value={countryCode}
          onChange={handleChange}
          className={classes.selectEmpty}
        >
          <MenuItem value={`🇨🇳 +86`}>🇨🇳 +86</MenuItem>
          <MenuItem value={`🇧🇷 +55`}>🇧🇷 +55</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default PhoneNumSelect;
