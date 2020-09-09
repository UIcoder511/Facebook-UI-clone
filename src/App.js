import React from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Paper, Typography, Box } from '@material-ui/core';
import s  from "./components/Header/fb.png";

import LeftHead from "./components/Header/LeftHead";
import MidHead from './components/Header/MidHead';
import RightHead from './components/Header/RightHead';


const useStyles=makeStyles(theme=>({
  rootHeader:{
    flexGrow:1,
    boxShadow:theme.shadows[3],
    padding:theme.spacing(0,2),
     height:60,
    lineHeight:0
  },
  LeftHead:{
    //  padding:theme.spacing(1,0)
    // height:'100%'
  },
  MidHead:{
       gridGap:theme.spacing(1),
        // flexGrow:1,
        // height:'inherit',
        display:'flex'
        // position:'relative'
      // maxWidth:''
  }


}))


function App() {

  const classes=useStyles();
  
  
  return (
   
        <div className="App">
          <Grid container 
           
            className={classes.rootHeader}
            direction="row"
            justify="space-between"
            alignItems='center'
            >

              <Grid item container xs={3}  className={classes.LeftHead} spacing={1} alignItems='center' wrap='nowrap'   >
                <LeftHead />
              </Grid>
              <Grid item  xs={5}  alignItems='center' justify='center'   spacing={1}  >
                <Box className={classes.MidHead} >
                  <MidHead />
                </Box>
              </Grid>
              <Grid item container xs={3} spacing={1} alignItems='center' justify='flex-end' wrap='nowrap'>
                <RightHead />
              </Grid>
      
          </Grid>



        </div>
   
  );
}

export default App;
