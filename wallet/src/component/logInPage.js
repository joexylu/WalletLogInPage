import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "@material-ui/core";

import Header from "./header";
import Body from "./body.jsx";
import PhoneNum from "./phoneNum";
import CNflag from "../CNFlag.png";
import PTflag from "../PTFlag.png";

const useStyles = makeStyles(theme => ({
  LogInPage: {
    margin: "0 auto",
    minWidth: 300
  }
}));

function LogInPage() {
  const classes = useStyles();

  const chineseAndPortuguese = {
    cn: {
      phoneNum: "手机号码",
      verification: "请输入验证码",
      getVerif: "获取",
      submit: "提交",
      logInButton: "登录",
      code: "CN",
      flag: CNflag
    },
    pt: {
      phoneNum: "número de telefone",
      verification: "código de verificação",
      getVerif: "Obtivermos",
      submit: "Enviar",
      logInButton: "Conecte-se",
      code: "PT",
      flag: PTflag
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

      <Body language={language} chineseAndPortuguese={chineseAndPortuguese} />
    </div>
  );
}

export default LogInPage;
