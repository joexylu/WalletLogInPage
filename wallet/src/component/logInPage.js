import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "@material-ui/core";

import Header from "./header";
import Body from './body'
import PhoneNum from "./phoneNum";

const useStyles = makeStyles(theme => ({
  LogInPage: {
    margin: "0 auto",
    minWidth: 300,
  }
}));

function LogInPage() {
  const classes = useStyles();

  const chineseAndPortuguese = {
    cn: {
      phoneNum: "手机号码",
      verification: "请输入验证码",
      submit: "提交",
      logInButton: "登录",
      code: "CN",
      flag: `🇨🇳`
    },
    pt: {
      phoneNum: "número de telefone",
      verification: "código de verificação",
      submit: "Enviar",
      logInButton: "Conecte-se",
      code: "PT",
      flag: `🇧🇷`
    }
  };

  const [language, setLanguage] = useState(chineseAndPortuguese.cn);

  return (
    <div className={classes.LogInPage}>
      <Header
        chineseAndPortuguese={chineseAndPortuguese}
        language={language}
        setLanguage={setLanguage}
      />

      <Body language={language} />

    </div>
  );
}

export default LogInPage;
