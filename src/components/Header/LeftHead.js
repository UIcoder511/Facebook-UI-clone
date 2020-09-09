import React from 'react'
import { CardMedia, TextField, InputAdornment, makeStyles, InputBase, Box, Grid } from '@material-ui/core'
import s  from "./fb.png";
import SearchIcon from '@material-ui/icons/Search';


const useStyles=makeStyles(theme=>({
    
    Input:{
          backgroundColor:theme.palette.background.paper,
          borderRadius: '999px',
          padding:theme.spacing(1),
          height:40,
          '& input::placeholder':{
              fontWeight:theme.typography.fontWeightLight
          }
        
         
    },
    searchicon:{
        color:theme.palette.primary,
        opacity:0.5,
        height:30
    }
}))

function LeftHead() {
    const classes=useStyles()
    return (
        <>
            <Grid item > 
                <img src={s} style={{width:40,height:40}}/>       
            </Grid>

            <Grid item >
                <InputBase
                
                className={classes.Input}
                //   id="outlined-search"
                onChange={(e)=>console.log(e.target.value)}
                type="search"
                
                placeholder="Search Facebook"
                
                startAdornment={
                    <InputAdornment position="start">
                        <SearchIcon className={classes.searchicon} />
                    </InputAdornment>
                }
                />

            </Grid>
            

            
           
        
        </>
    )
}

export default LeftHead
