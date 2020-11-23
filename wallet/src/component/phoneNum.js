import React from "react";
import clsx from 'clsx';
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from '@material-ui/core/InputAdornment';

import PhoneNumSelect from './phoneNumSelect'

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing(1),
    borderRadius: '35px',
  },
  withoutLabel: {
    marginTop: theme.spacing(3)
  },
  textField: {
    width: "25ch",
  }
}));

const PhoneNum = ({ language, chineseAndPortuguese }) => {
  const classes = useStyles();
  return (
    <div>
      <TextField
        label={language.phoneNum}
        id="outlined-start-adornment"
        required
        type="tel"
        className={clsx(classes.margin, classes.textField)}
        InputProps={{
        startAdornment: <InputAdornment position="start">
            <PhoneNumSelect chineseAndPortuguese={chineseAndPortuguese} />
        </InputAdornment>
        }}
        variant="outlined"
      />
    </div>
  );
};

export default PhoneNum;
