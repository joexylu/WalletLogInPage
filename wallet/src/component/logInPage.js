import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Typography, Button } from "@material-ui/core"
import LanguageSelect from "./languageSelect"
import PhoneNum from './phoneNum'

const useStyles = makeStyles(theme => ({
  LogInPage: {
    background: "#ffea00",
    paddingTop: 40,
    margin: "auto",
    display: "flex",
    width: "75vw",
    height: "80vh",
    minWidth: 300,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center"
  }
}));

function LogInPage() {
  const classes = useStyles();

  const chineseAndPortuguese = {
    cn: {
      phoneNum: "手机号码",
      verification: "请输入验证码",
      logInButton: "登录",
      code: "CN",
      flag: `🇨🇳`
    },
    pt: {
      phoneNum: "número de telefone",
      verification: "código de verificação",
      logInButton: "Conecte-se",
      code: "PT",
      flag: `🇧🇷`
    }
  };

  const [language, setLanguage] = useState(chineseAndPortuguese.cn);

  return (
    <div className={classes.LogInPage}>
      <LanguageSelect
        chineseAndPortuguese={chineseAndPortuguese}
        language={language}
        setLanguage={setLanguage}
      />
      <Typography variant="h2">
        Pagsmile wallet
      </Typography>

      <PhoneNum language={language}/>
    </div>
  );
}

export default LogInPage;
