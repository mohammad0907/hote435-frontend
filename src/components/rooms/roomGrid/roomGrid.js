import React ,{useState} from "react"
import moment from "moment";
import '../../../App.css'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TestImg from "./images/testImage.jpg";
import { NavLink} from "react-router-dom"



const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(2),
    },
    input: {
      display: 'none',
    },
    roomImage : {
        backgroundImage : `url("${TestImg}")`,
        backgroundSize: "cover",
        width: "100%",
        height: "200px"
    }
  }));

export default function RoomsGrid(props) {
    const classes = useStyles();
    let roomData = props.roomData
    
    let disp = {
        display : "none"
     }
    
    /*console.log(props.startDate)
    console.log(props.endDate)
    console.log(props.filters)*/
  
 
    
    
let roomsAvail = false
console.log(props.startDate)
console.log(props.endDate)

if(props.disp){
    disp.display = "flex"
}

  

     
    return(
        

            


            <div className = "roomGridMainCont" style = {disp} >
                
                {roomData.map((items, idx) => {
                    // first checks for room availability on the gived data range by the user
                    for (let i = 0; i < items.reservations.length; i++){
                        if(
                        (!moment(props.startDate).isBetween(items.reservations[i].checkIn, items.reservations[i].checkOut)) && 
                        (!moment(props.endDate).isBetween(items.reservations[i].checkIn, items.reservations[i].checkOut)) && 
                        (!moment(items.reservations[i].checkIn).isBetween(props.startDate, props.endDate)) && 
                        (!moment(items.reservations[i].checkOut).isBetween(props.startDate, props.endDate )) && 
                        (!moment(props.startDate).isSame(items.reservations[i].checkIn)) && 
                        (!moment(props.endDate).isSame(items.reservations[i].checkOut)) 
                        
                        
                        ) {
                            roomsAvail = true;
                        }else {
                            roomsAvail = false;
                            break;
                        }
                    }


                    
                    // then checks for the filters
                    if(roomsAvail){
                        if (
                        (items.price <= props.filters.price || props.filters.price ==="") &&
                        (items.guestsAllowed >= props.filters.guestsAllowed || props.filters.guestsAllowed === "") &&
                        (items.beds >= props.filters.beds || props.filters.beds === "")  &&
                        (items.type === props.filters.type || props.filters.type === "all")
                        
                         ){
                             let roomInfo = {
                                 id : items.id,
                                 price: items.price,
                                 beds: items.beds,
                                 guestsAllowed: items.guestsAllowed,
                                 type : items.type
                                 
                             }
                            return (
                            <div key = {items.id} className = "rooms" > 
                                <div className = "roomInfo">
                                    <div className ={classes.roomImage}>
                                        
                                    </div>

                                    <div className = "roomDesc">
                                        <h2> {items.type} Room </h2>
                                        <div className = "specificDesc">
                                            <div>
                                              <span style = {{fontSize : "12px", color: "gray"}}>Max Guests</span>
                                              <h4>{items.guestsAllowed}</h4>
                                            </div>
                                            <div>
                                                <span style = {{fontSize : "12px", color: "gray"}}>Beds</span>
                                                <h4>{items.beds}</h4>
                                            </div>
                                            <div>
                                                <span style = {{fontSize : "12px", color: "gray"}}>Room Type</span>
                                                <h4>{items.type}</h4>
                                            </div>
                                        </div>   
                                    </div>    
                                </div>

                                <div className = "roomPrice">
                                    <div>
                                        <h3>Starting Price: ${items.price}</h3>
                                    </div>
                                    <Button variant="contained" color="defualt" size = "medium" className={classes.button}>
                                    <NavLink to = {"/roomdetails/" + JSON.stringify(roomInfo) + "/" + props.startDate + "/" + props.endDate}>Select</NavLink>
                                     </Button>
                                </div>
                            </div>   
                        )

                        }
                        
                        
                    }
                })}
            </div>
          
        
    )
};