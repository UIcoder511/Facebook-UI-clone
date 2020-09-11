import React, { useState } from 'react'
import { Box, IconButton, makeStyles, Grid, ButtonBase } from '@material-ui/core'
import TouchRipple from '@material-ui/core/ButtonBase/TouchRipple';


const useStyles=makeStyles(theme=>({
    
    
    btn:{
        opacity:0.7,

    },
    gridNavBtn:{
        cursor:'pointer',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:theme.spacing(1),
        height:60,
            '&:hover':{
                backgroundColor:theme.palette.action.hover
                
            }
       
        },
        activeBtn:{
            color:theme.palette.primary.main
        },
        activebtnback:{
            borderBottom:`solid 3px ${theme.palette.primary.main}`,
            cursor:'pointer',
            alignItems:'center',
            justifyContent:'center'
        }
    
}))

function MidHeadSingleBtn({Btn,datakey,changeNavActive,active}) {
    const classes=useStyles();

   


    const change=(e)=>{
        changeNavActive(e.target.dataset.key)
    }


    return (
       
  
            <Box display='flex'  className={active?classes.activebtnback:classes.gridNavBtn} width='200px'  onClick={change} data-key={datakey}>
                {/* <IconButton className={classes.iconButton} > */}
                
                    <Btn  className={active?classes.activeBtn:classes.btn} fontSize='medium'  />
                
                {/* </IconButton> */}
            </Box>
        
       
    )
}

export default MidHeadSingleBtn
