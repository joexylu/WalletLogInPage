import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Typography,
  InputAdornment,
  MenuItem,
  FormControl,
  Select
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing(1),
    borderRadius: "35px"
  },
  withoutLabel: {
    marginTop: theme.spacing(3)
  },
  textField: {
    width: "25ch"
  },
  formControl: {
    minWidth: 50
  },
  select: {
    "&:before": {
      border: "none"
    },
    "&:hover:not(.Mui-disabled):before": {
      border: "none"
    },
    "&:after": {
      border: "none"
    }
  }
}));

const PhoneNum = ({ language, chineseAndPortuguese }) => {
  const classes = useStyles();

  const [phoneNum, setPhoneNum] = useState("");
  const [error, setError] = useState(false);
  const [countryCode, SetCountryCode] = useState(`+86`);

  const handleSelectChange = event => {
    SetCountryCode(event.target.value);
    setPhoneNum("")
  };

  const handleChange = event => {
    const re = /^[0-9\b]+$/;
    if (event.target.value === "" || re.test(event.target.value)) {
      setPhoneNum(event.target.value);
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <TextField
        label={language.phoneNum}
        id="outlined-start-adornment"
        onChange={handleChange}
        value={phoneNum}
        required
        type="tel"
        error={error}
        className={clsx(classes.margin, classes.textField)}
        inputProps={{
          maxLength: 11
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FormControl className={classes.formControl}>
                <Select
                  value={countryCode}
                  onChange={handleSelectChange}
                  className={classes.select}
                >
                  <MenuItem value={`+86`}>
                    <img src={chineseAndPortuguese.cn.flag} alt="cnFlag" />
                    +86
                  </MenuItem>
                  <MenuItem value={`+55`}>
                    <img src={chineseAndPortuguese.pt.flag} alt="ptFlag" />
                    +55
                  </MenuItem>
                </Select>
              </FormControl>
            </InputAdornment>
          )
        }}
        variant="outlined"
      />
    </div>
  );
};

export default PhoneNum;
