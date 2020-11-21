import logo from './logo.svg';
import './App.css';

import React, { useState }from 'react';
import { makeStyles } from '@material-ui/core/styles';

function App() {
  const chineseAndPortuguese = {
    cn: {
      phoneNum: "手机号码",
      verification: "请输入验证码",
      logInButton: "登录",
      flag: `🇨🇳`,
    },
    pt: {
      phoneNum: "número de telefone",
      verification: "código de verificação",
      logInButton: "Conecte-se",
      flag: `🇧🇷`,
    },
  }

  const [language, setLanguage] = useState(chineseAndPortuguese.cn)

  return (
    <div className="App">
      here is the sign in page

      {language.flag}
    </div>
  );
}

export default App;
