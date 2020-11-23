import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField, InputAdornment } from "@material-ui/core";

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
  button: {
    boxShadow: "none",
    textTransform: "none",
    color: theme.palette.primary.main,
    marginRight: theme.spacing(2),
  }
}));

const Verification = ({ language }) => {
  const classes = useStyles();

  const [time, setTime] = useState(60);
  const [countdown, setCountdown] = useState(false);
  const [newCode, setNewCode] = useState("Get Code");

  useEffect(() => {
    if (countdown) {
      if (!time) {
        setTime(60);
        setCountdown(false);
        return;
      }
      const timeInterval = setInterval(() => {
        setTime(time - 1);
      }, 1000);
      return () => clearInterval(timeInterval);
    }
  }, [countdown, time]);

  const handleClick = () => {
    setCountdown(true);
  };

  return (
    <div>
      <TextField
        label={language.verification}
        id="outlined-end-adornment"
        required
        type="tel"
        className={clsx(classes.margin, classes.textField)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="end">
              <Button variant="contained" size="small" className={classes.button} onClick={handleClick}>
                {!countdown ? language.getVerif : `${time}s`}
              </Button>
            </InputAdornment>
          )
        }}
        variant="outlined"
      />
    </div>
  );
};

export default Verification;
