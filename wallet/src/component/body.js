import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Typography, Button } from "@material-ui/core";

import PhoneNum from "./phoneNum";
import Verification from "./verification";
const useStyles = makeStyles(() => ({}));

const Body = ({ language }) => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h2">Pagsmile wallet</Typography>

      <PhoneNum language={language} />

      <Verification language={language} />

      <Button variant="contained" color="primary">
        {language.logInButton}
      </Button>
    </div>
  );
};

export default Body;
