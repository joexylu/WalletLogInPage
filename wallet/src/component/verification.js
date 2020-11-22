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
  }
}));

const Verification = ({ language }) => {
  const classes = useStyles();

  const [time, setTime] = useState(60);
  const [countdown, setCountdown] = useState(false);
  const [newCode, setNewCode] = useState("Get Code");

  useEffect(() => {
      console.log(countdown)
    if (countdown) {
      if (!time) {
        setTime(60);
        setCountdown(false);
        return
      }
      const timeInterval = setInterval(() => {
        setTime(time - 1);
      }, 1000);
      return () => clearInterval(timeInterval);
    }
  }, [countdown,time]);

  const handleClick = () => {
    setCountdown(true);
  };

  return (
    <div>
      <TextField
        label={language.verification}
        id="outlined-end-adornment"
        required
        className={clsx(classes.margin, classes.textField)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="end">
              <Button onClick={handleClick}>
                {!countdown ? "Get Code" : `${time}s`}
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
