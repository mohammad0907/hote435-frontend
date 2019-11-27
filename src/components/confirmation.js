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
        
        
        axios.post('http://localhost:54957/reservations' , {
            
            address: info.address,
            checkIn: info.checkIn,
            checkOut: info.checkOut,
            city:info.city,
            creditCardNum: info.creditCardNum,
            cvv: info.cvv,
            email: info.email,
            expMonth: info.expMonth,
            expYear: info.expYear,
            firstName: info.fName,
            lastName: info.lName,
            price: parseFloat(info.price),
            roomId:info.roomId,
            state: info.state,
            zip: info.zip


            
        })
    }, [])
    
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