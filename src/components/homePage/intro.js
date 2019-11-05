import React from "react"
import IntroImg from "./images/homePic.jpg"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import "../../App.css"
import {NavLink} from 'react-router-dom'

const mainDiv = {
    width: "100%",
    height: window.innerHeight - 75.8,
   
    backgroundImage: IntroImg,
}

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(4),
    },
    input: {
      display: 'none',
    },
  }));

export default function Intro(){
    const classes = useStyles();
    return (
        <div style = {mainDiv} className= "introMain">
            <div className = "titleContainer">
                <div>
                    <h1 style = {{fontSize : "75px"}}>Luxurious Rooms</h1>
                </div>
                <div>
                    <h3>Deluxe Rooms Starting At $300</h3>
                </div>
                <div>
                    <Button size = "large" variant="contained" className={classes.button}>
                    <NavLink to = "/rooms">Our Rooms</NavLink>
                    </Button>
                </div>

            </div>
        </div>

    )//end-return
} //end-function