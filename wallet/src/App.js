import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import LogInPage from './component/logInPage'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    padding: 0,
    margin: 0,
    width: '100vw',
    height: '100vh',
    textAlign: 'center',
    background: '#009688',
  },
}));

function App() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <LogInPage className={classes.LogInPage}/>
    </div>
  );
}

export default App;
