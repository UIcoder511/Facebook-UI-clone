import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core';


const darkTheme = createMuiTheme({
  palette: {
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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
