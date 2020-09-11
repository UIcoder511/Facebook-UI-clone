import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core';


const darkTheme = createMuiTheme({
  palette:{
    type: 'dark',
    action:{
      //hoverOpacity:0.6
    },
    primary:{
      main:'#2d88ff'
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
  ,
  document.getElementById('root')
);


serviceWorker.unregister();
