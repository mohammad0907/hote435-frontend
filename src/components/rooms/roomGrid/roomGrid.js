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
    let reservationsData = props.reservationsData
    
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
                    for (let i = 0; i < reservationsData.length; i++){
                        
                        if(items.id === reservationsData[i].roomId){
                        
                        
                            if(
                            (!moment(props.startDate).isBetween(reservationsData[i].checkIn, reservationsData[i].checkOut)) && 
                            (!moment(props.endDate).isBetween(reservationsData[i].checkIn, reservationsData[i].checkOut)) && 
                            (!moment(reservationsData[i].checkIn).isBetween(props.startDate, props.endDate)) && 
                            (!moment(reservationsData[i].checkOut).isBetween(props.startDate, props.endDate )) && 
                            (!moment(props.startDate).isSame(reservationsData[i].checkIn)) && 
                            (!moment(props.endDate).isSame(reservationsData[i].checkOut)) 
                            
                            
                            ) {
                                roomsAvail = true;
                            }else {
                                roomsAvail = false;
                                break;
                            }
                        }else{
                           roomsAvail = true 
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
                    return null;
                })}
            </div>
          
        
    )
};