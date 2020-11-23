import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"

const useStyles = makeStyles(theme => ({
  formControl: {
    minWidth: 50,
  },
  select: {
    "&:before": {
      border: "none"
    },
    "&:hover:not(.Mui-disabled):before": {
      border: "none"
    },
    "&:after": {
      border: "none"
    }
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
          className={classes.select}
        >
          <MenuItem value={chineseAndPortuguese.cn.code}>
            <img src={chineseAndPortuguese.cn.flag} alt="cnFlag" />
            CN
          </MenuItem>
          <MenuItem value={chineseAndPortuguese.pt.code}>
            <img src={chineseAndPortuguese.pt.flag} alt="ptFlag" />
            PT
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default LanguageSelect;
