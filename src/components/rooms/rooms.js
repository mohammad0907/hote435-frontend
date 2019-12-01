import React, { useEffect } from "react"
import "../../App.css"
import RoomIntro from "./roomIntro.js"
import DateForm from "./dateForm.js"
import Filters from "./filters.js"
import RoomGrid from "./roomGrid/roomGrid.js"
import moment from "moment"
import axios from 'axios'



//end-constructor


function Rooms() {


    const [startDate, setStartDate] = React.useState("")
    const [endDate, setEndDate] = React.useState("")
    let showItems = false
    const [filters, setFilters] = React.useState({
        price: 0,
        guestsAllowed: 0,
        beds: 0,
        type: "all"
    })
    const [rooms, setRooms] = React.useState([])
    const [reservations, setReservations] = React.useState([])



    // gets the dates from the date form component
    const getDate = (e) => {

        e.preventDefault()
        setStartDate(moment(e.target.elements.startDate.value).format())
        setEndDate(moment(e.target.elements.endDate.value).format())



    }
    // gets the filters from the filters component 
    const getFilters = (filtersVal) => {

        setFilters(filtersVal)
    }
    //to check when a user inputed dates
    if (startDate !== "" && endDate !== "") {
        console.log(startDate)

        if (moment(startDate).isBefore(moment().format(), 'day') || moment(endDate).isBefore(moment().format(), 'day')) {
            alert("Invalid Date Range")
        } else if (moment(endDate).isAfter(startDate)) {
            showItems = true;
        } else {
            alert("Invalid Date Range")
        }
    }


    

    useEffect(() => {
        axios.get('https://hotel435.azurewebsites.net/rooms')
            .then(res => {
                const data = res.data
                setRooms(data)


            })


         axios.get('https://hotel435.azurewebsites.net/reservations')
            .then(res => {
                const resData = res.data
           setReservations(resData)

        })


        window.scrollTo(0, 0);
        
    }, [])







    console.log(rooms)
    console.log(reservations)



    return (

        <div>
            <div className="roomContainer">

                <div className="roomIntroContainer">
                    <RoomIntro />
                </div>
                <div>
                    <h1>Search Rooms</h1>
                </div>

                <DateForm getDate={getDate} />

                <Filters getFilters={getFilters} disp={showItems} />

                <RoomGrid roomData={rooms} reservationsData={reservations} startDate={startDate} endDate={endDate} filters={filters} disp={showItems} />


            </div>

        </div>

    ) // end-return
    //end-render


}; //end-class
export default Rooms