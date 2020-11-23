import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Typography, Button } from "@material-ui/core";

import PhoneNum from "./phoneNum";
import Verification from "./verification";
import logo from "../pagsmile.png";

const useStyles = makeStyles(theme => ({
  wrapper: {
    marginTop: "3em"
  },
  formContainer: {
    margin: theme.spacing(0, "auto"),
    padding: theme.spacing(5)
  },
  item1: {
    paddingBottom: theme.spacing(5)
  },
  item2: {
    paddingBottom: theme.spacing(1)
  },
  button: {
    width: "18em"
  }
}));

const Body = ({ language, chineseAndPortuguese }) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Grid
        container
        direction="column"
        alignItems="center"
        className={classes.formContainer}
      >
        <Grid item className={classes.item1} xs={12} md={9}>
          <img src={logo} alt="logo" />
        </Grid>
        <Grid item className={classes.item2} xs={12} md={9}>
          <PhoneNum language={language} chineseAndPortuguese={chineseAndPortuguese} />
        </Grid>
        <Grid item className={classes.item2} xs={12} md={9}>
          <Verification language={language} />
        </Grid>
        <Grid item className={classes.item2} xs={12} md={9}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            {language.logInButton}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Body;
