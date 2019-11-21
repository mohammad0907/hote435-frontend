import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Logo from "./icons/logo.jpg"

import "../App.css"
import { NavLink} from "react-router-dom"
import { classes } from 'istanbul-lib-coverage';

let display = false;
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
   
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  navButtons:{
      display: 'block',
      '@media only screen and (max-width: 600px)':{
        display: 'none',
    }
    
  },
  hamburgerMenu : {
    marginRight: theme.spacing(0),
    display: 'none',
    '@media only screen and (max-width: 600px)':{
        display: 'block',
    }
  },
  hamburgerMenuItems :{

    
    '@media only screen and (min-width: 600px)':{
      display: 'none',
  }
  
  },
  title: {
    flexGrow: 1,
  },

  background :{
      backgroundColor: "whitesmoke",
      
  },
  logoImg :{
    paddingTop : "7px", 
    position: "relative" , 
    left: "100px",
    '@media only screen and (max-width: 600px)' : {
      left : "0px",
    }
  }
}));








export default function ButtonAppBar() {
  const classes = useStyles();
  let check = true;
  const [browser, setBrowser] = React.useState(window.innerWidth)
 // console.log(browser)
  const [styles, setStyles] = React.useState({
    display : 'none',
    flexDirection: 'column',
    '@media only screen and (min-width: 600px)':{
      display: 'none',
    }
  })

  function menuToggle(){
    display = !display
    setStyles({
      display: display ? 'flex' : 'none',
      flexDirection: 'column',
      '@media only screen and (min-width: 600px)':{
        display: 'none',
     }

    })
   console.log(styles)
}

  window.addEventListener('resize', handleSize)
  function handleSize() {
    console.log(window.innerWidth)
    if(window.innerWidth > 600 && !check){
       setStyles({
         display : 'none',
         flexDirection: 'column',
       })
       check = true;
    }else if(window.innerWidth <= 600){
      check = false;
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className = {classes.background}>
        <Toolbar>
          
          <Typography variant="h6" className={classes.title}>
            <img src = {Logo} alt = "logo" width = "180px" height = "60px" className = {classes.logoImg} />
          </Typography>
          <div className = {classes.navButtons}>
            <Button color="black" ><NavLink to = "/">Home</NavLink></Button>
            <Button color="black"><NavLink to = "/rooms">Rooms</NavLink></Button>
            <Button color="black"><NavLink to = "/reservation">Reservation</NavLink></Button>
            
          </div>

          <IconButton
            edge="start"
            className={classes.hamburgerMenu}
            color="primary"
            aria-label="open drawer"
            onClick = {menuToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <div style = {styles} >
            <Button color="black" ><NavLink to = "/">Home</NavLink></Button>
            <Button color="black"><NavLink to = "/rooms">Rooms</NavLink></Button>
            <Button color="black"><NavLink to = "/reservation">Reservation</NavLink></Button>
            
          </div>
      </AppBar>
    </div>
  );
}
