import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"

const useStyles = makeStyles(theme => ({
  formControl: {
    minWidth: 50,
  },
  selectEmpty: {
    border: 'none',
  }
}));

function LanguageSelect({ chineseAndPortuguese, language, setLanguage }) {
  const classes = useStyles();

  const [whatLang, setWhatLang] = useState(language.code);

  const handleChange = event => {
      setWhatLang(event.target.value);
      if(event.target.value === chineseAndPortuguese.cn.code) {
        setLanguage(chineseAndPortuguese.cn)
      } else{
        setLanguage(chineseAndPortuguese.pt)
      }
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select
          value={whatLang}
          onChange={handleChange}
          className={classes.selectEmpty}
        >
          <MenuItem value={chineseAndPortuguese.cn.code}>🇨🇳 CN</MenuItem>
          <MenuItem value={chineseAndPortuguese.pt.code}>🇧🇷 PT</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default LanguageSelect;
