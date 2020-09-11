import React from 'react'
import { Button, IconButton, makeStyles, Grid, Avatar } from '@material-ui/core'
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsIcon from '@material-ui/icons/Notifications';

const useStyles=makeStyles(theme=>({
    
    btn:{
         backgroundColor:theme.palette.background.paper,
         color:theme.palette.text.primary,
         textTransform:'initial',
         borderRadius:999,
         '&:hover':{
             backgroundColor:theme.palette.action.hover
         }
    },
    icon:{
        backgroundColor:theme.palette.background.paper,
        height:'40px',
        width:'40px',
        '&:hover':{

        }
    }
}))


function RightHead() {
    const classes=useStyles();
    
    return (
        <>
        <Grid item >
            <Button variant="contained" className={classes.btn} >
                Create
            </Button>
        </Grid>
        <Grid item >
            <IconButton className={classes.icon}>
                <ForumIcon fontSize='small' />
            </IconButton>
        </Grid>
        <Grid item >
            <IconButton className={classes.icon}>
                <NotificationsIcon fontSize='small' />
            </IconButton>
        </Grid>
        <Grid item>
            <Avatar>U</Avatar>
        </Grid>
        
        
        
        
        </>
    )
}

export default RightHead
