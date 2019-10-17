import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Logo from "./icons/logo.jpg"

import "../App.css"
import { NavLink} from "react-router-dom"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
   
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  title: {
    flexGrow: 1,
  },

  background :{
      backgroundColor: "whitesmoke",
      
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className = {classes.background}>
        <Toolbar>
          
          <Typography variant="h6" className={classes.title}>
            <img src = {Logo} alt = "logo" width = "180px" height = "60px" style = {{paddingTop : "7px", position: "relative" , left: "100px"}}/>
          </Typography>
          <div className = "navButtons">
            <Button color="black" ><NavLink to = "/">Home</NavLink></Button>
            <Button color="black"><NavLink to = "/rooms">Rooms</NavLink></Button>
            <Button color="black"><NavLink to = "/reservation">Reservation</NavLink></Button>
            <Button color="black"><NavLink to = "/checkout">Checkout</NavLink> </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
