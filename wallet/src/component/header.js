import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import LanguageSelect from "./languageSelect";

const useStyles = makeStyles(() => ({
  appStyles: {
    boxShadow: "none",
  },
  barStyles: {
    background: '#fff',
  }
}));

const Header = ({ chineseAndPortuguese, language, setLanguage }) => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.appStyles}>
      <Toolbar className={classes.barStyles}>
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
