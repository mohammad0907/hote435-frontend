import React, {useEffect} from "react"
import moment from "moment"
import Logo from "./icons/logo.jpg"
import axios from 'axios'
import { isFor } from "@babel/types"









export default function Confirmation(props){

    let getFullScreen = {
        width: "100%",
        height : window.innerHeight - 77,
      
    }
    const[info, setInfo] = React.useState(JSON.parse(props.match.params.info))
    
    
    useEffect(() => {
        
        
        window.scrollTo(0,0)
        setTimeout(() => {
           
            props.history.push("/")
        }, 60000 )
    }, [])
    


    return(
        <div className= "confirmationCont" style = {getFullScreen}>
                <img src = {Logo} alt = "logo" width = "360px" /> 
                <div className = "confirmBox" style = {{marginTop : "30px"}}>
                    <h2>{info.fName}, Here is your Confirmation</h2>
                    <h4>Confirmation Number: {props.match.params.confirmation}</h4>
                    <h4>Email: {info.email}</h4>
                    <h4>Check-In: {moment(info.checkIn).format("dddd, MMMM, Do, YYYY")}</h4>
                    <h4>Check-Out: {moment(info.checkOut).format("dddd, MMMM, Do, YYYY")}</h4>
                   
                </div>
                <div className = "confirmPrice" style = {{textAlign: 'center'}}>
                    <h2>Total Price: ${info.price}</h2>
                    <h5>Note: Please save this information for your record. You will be sent a confirmation email regarding your reservation. You will be automatically directed to the homepage after 1 minute. Thank You.</h5>

                </div>

        </div>
    )
}