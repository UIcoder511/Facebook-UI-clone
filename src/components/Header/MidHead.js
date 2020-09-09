import React, { useState } from 'react'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import OndemandVideoOutlinedIcon from '@material-ui/icons/OndemandVideoOutlined';
import HomeWorkOutlinedIcon from '@material-ui/icons/HomeWorkOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import SportsEsportsOutlinedIcon from '@material-ui/icons/SportsEsportsOutlined';

import Home from '@material-ui/icons/Home';
import OndemandVideo from '@material-ui/icons/OndemandVideo';
import HomeWork from '@material-ui/icons/HomeWork';
import PeopleAlt from '@material-ui/icons/PeopleAlt';
import SportsEsports from '@material-ui/icons/SportsEsports';

import { Grid } from '@material-ui/core';
import MidHeadSingleBtn from './MidHeadSingleBtn';

const btns=[
    {
        Btn:HomeOutlinedIcon,
        BtnAc:Home,
        datakey:'Home',
    },
    {
        Btn:OndemandVideoOutlinedIcon,
        BtnAc:OndemandVideo,
        datakey:'Videos'
    },
    {
        Btn:HomeWorkOutlinedIcon,
         BtnAc:HomeWork,
        datakey:'Work'
    },
    {
        Btn:PeopleAltOutlinedIcon,
         BtnAc:PeopleAlt,
        datakey:'Groups'
    },
    {
        Btn:SportsEsportsOutlinedIcon,
         BtnAc:SportsEsports,
        datakey:'Games'
    }

]

function MidHead() {

    const [navActive, setnavActive] = useState('Home')


    const changeNavActive=(key)=>{
        console.log(key);
        setnavActive(key)
    }



    return (
        <>
        
          {
              btns.map(btn=>
                (
                // <Grid item container>
                    <MidHeadSingleBtn Btn={navActive===btn.datakey?btn.BtnAc:btn.Btn} datakey={btn.datakey} changeNavActive={changeNavActive} active={navActive===btn.datakey?true:false}/>
                   
                // </Grid>
                ))
          }
            
        </>
    )
}

export default MidHead
