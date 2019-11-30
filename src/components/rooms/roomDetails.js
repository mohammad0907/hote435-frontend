import React, {Component,useEffect} from "react"
import roomPic from "./images/deluxe/roomImgOne.jpg"
import kitchenPic from "./images/deluxe/roomImgTwo.jpg"
import bathroomPic from "./images/deluxe/roomImageThree.jpg"
import Button from '@material-ui/core/Button';
import { NavLink} from "react-router-dom"
import wifi from "./images/icons/wifi.png"
import tv from  "./images/icons/tv.png"
import safe from "./images/icons/safebox.png"
import phone from "./images/icons/phone.png"
import hairDrier from "./images/icons/hair-dryer.png"
import moment from  "moment"

let roomData = JSON.parse(localStorage.getItem("roomStorage"))




console.log(roomData)

function RoomsDetails (props) {
        const [roomInfo, setRoomInfo] = React.useState({})
        const [startDate, setStartDate] = React.useState("")
        const [endDate, setEndDate] = React.useState("")
      
        let start = moment(startDate)
        let end = moment(endDate)
        let diff = moment.duration(end.diff(start)).asDays()

        useEffect(() => {
            setRoomInfo(JSON.parse(props.match.params.items))
            setStartDate(props.match.params.start_date)
            setEndDate(props.match.params.end_date)
            window.scrollTo(0, 0);
            
            
        }, [])
       
  


        
        
        
        return(
            <div className = "roomDetailsMain">
                <h1> {roomInfo.type} Room </h1>
                <div className = "roomDetsPics">
                    <img src = {roomPic} alt = "roomPic" width = "450px"  />
                    <img src = {kitchenPic} alt = "Kitchenic" width = "450px"  />
                    <img src = {bathroomPic} alt = "bathroomPic" width = "450px"  />

                </div>
                <div className = "mainDetails">
                    <div>
                        <h3>Beds: {roomInfo.beds} </h3>
                        <h3 style = {{marginLeft : "70px", marginRight: "50px"}}>Max Guests Allowed: {roomInfo.guestsAllowed}  </h3>
                        <h3>Room Type: {roomInfo.type}  </h3>
                        
                    </div>
                    <div>
                        <h3>Check-In: {moment(startDate).format("MM-DD-YYYY")} </h3>
                        <h3 style = {{marginLeft : "50px", marginRight: "50px"}}>Check-Out: {moment(endDate).format("MM-DD-YYYY")} </h3>
                        <h3>Price: ${roomInfo.price} X {diff} Days = ${ roomInfo.price * diff} </h3>

                    </div>
                    
                </div>
                <Button variant="contained" color="defualt" size = "medium">
                    <NavLink to = {"/checkout/" + roomInfo.id + "/" + startDate + "/" + endDate + "/" + (roomInfo.price * diff)+ "/"+ diff}>Book Now</NavLink>
                </Button>
                <br></br>
                <div className= "roomDetsdesc">
                    <p>With state of the art bedrooms, an amazing pool, a blissful spa, a five star resturant, and numerous awesome amenities, our hotel will give you an experience to remember. Are you ready to relax? Select book now to create your reservation. </p>
                </div>

                <div className = "serviceContainer">
                    <div className = "serviceTitle">
                        <h1>Featured Amenities </h1>
                    </div>
                    <div className = "serviceItems">
                        <div>
                            <img src = {wifi} alt = "restaurant" width = "50px" />
                            <h4>Wifi</h4>
                            
                        </div>

                        <div>
                            <img src = {tv} alt = "Gym" width = "50px" />
                            <h4>Television</h4>

                        </div>

                        <div>
                            <img src = {safe} alt = "Shuttle" width = "50px" />
                            <h4>Safe</h4>

                        </div>

                        <div>
                            <img src = {phone} alt = "Pool" width = "50px" />
                            <h4>Phone</h4>

                        </div>
                        <div>
                            <img src = {hairDrier} alt = "More" width = "50px" />
                            <h4>Hair Dryer</h4>

                        </div>

                    </div>
                </div>


            </div>
        ) // end-return
    }//end-render


 //end-class
export default RoomsDetails