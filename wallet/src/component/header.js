import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import LanguageSelect from "./languageSelect";

const useStyles = makeStyles(() => ({
  barStyles: {
    display: 'flex',
    justifyContent: 'space-between',
  }
}));

const Header = ({ chineseAndPortuguese, language, setLanguage }) => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.barStyles}>
        <Typography >
          Pagsmile Wallet
        </Typography>
        <LanguageSelect
          chineseAndPortuguese={chineseAndPortuguese}
          language={language}
          setLanguage={setLanguage}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
