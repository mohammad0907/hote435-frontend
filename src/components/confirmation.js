import React from "react"
import moment from "moment"
import Logo from "./icons/logo.jpg"










export default function Confirmation(props){

    let getFullScreen = {
        width: "100%",
        height : window.innerHeight - 77,
      
    }
    const[info, setInfo] = React.useState(JSON.parse(props.match.params.info))
    
    console.log(info)

    return(
        <div className= "confirmationCont" style = {getFullScreen}>
                <img src = {Logo} alt = "logo" width = "360px" /> 
                <div className = "confirmBox" style = {{marginTop : "30px"}}>
                    <h2>{info.fName}, Here is your Confirmation</h2>
                    <h4>Email: {info.email}</h4>
                    <h4>Check-In: {moment(info.checkIn).format("dddd, MMMM, Do, YYYY")}</h4>
                    <h4>Check-Out: {moment(info.checkOut).format("dddd, MMMM, Do, YYYY")}</h4>
                   
                </div>
                <div className = "confirmPrice">
                    <h2>Total Price: ${info.price}</h2>
                </div>

        </div>
    )
}