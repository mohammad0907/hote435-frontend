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
        const [roomId, setRoomID] = React.useState(0)
        const [startDate, setStartDate] = React.useState("")
        const [endDate, setEndDate] = React.useState("")
      
        let start = moment(startDate, "MM-DD-YYYY")
        let end = moment(endDate, "MM-DD-YYYY")
        let diff = moment.duration(end.diff(start)).asDays()

        console.log(start)
        console.log(end)
        console.log(diff)
        useEffect(() => {
            setRoomID(props.match.params.room_id)
            setStartDate(props.match.params.start_date)
            setEndDate(props.match.params.end_date)
            
            
        }, [])
       
  


        
        
        
        return(
            <div className = "roomDetailsMain">
                <h1>Room Name </h1>
                <div className = "roomDetsPics">
                    <img src = {roomPic} alt = "roomPic" width = "450px"  />
                    <img src = {kitchenPic} alt = "Kitchenic" width = "450px"  />
                    <img src = {bathroomPic} alt = "bathroomPic" width = "450px"  />

                </div>
                <div className = "mainDetails">
                    <div>
                        <h3>Beds: {roomData[roomId].beds} </h3>
                        <h3 style = {{marginLeft : "70px", marginRight: "50px"}}>Max Guests Allowed: {roomData[roomId].guestsAllowed} </h3>
                        <h3>Room Type: {roomData[roomId].type} </h3>
                        
                    </div>
                    <div>
                        <h3>Check-In: {startDate}</h3>
                        <h3 style = {{marginLeft : "50px", marginRight: "50px"}}>Check-Out: {endDate}</h3>
                        <h3>Price: ${roomData[roomId].price} X {diff} Days = ${roomData[roomId].price * diff} </h3>

                    </div>
                    
                </div>
                <Button variant="contained" color="defualt" size = "medium">
                    <NavLink to = {"/checkout/" + roomId + "/" + startDate + "/" + endDate + "/" + (roomData[roomId].price * diff)+ "/"+ diff}>Book Now</NavLink>
                </Button>
                <br></br>
                <div className= "roomDetsdesc">
                    <p>cto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
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