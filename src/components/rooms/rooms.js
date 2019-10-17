import React, {Component} from "react"
import "../../App.css"
import RoomIntro from "./roomIntro.js"
import DateForm from "./dateForm.js"
import Filters from "./filters.js"
import RoomGrid from "./roomGrid/roomGrid.js"


//end-constructor

    
function Rooms(){
    

        const [startDate, setStartDate] = React.useState("")
        const [endDate, setEndDate] = React.useState("")
        let showItems = false
        let roomData = [
            {
                id: 1,
                price : 100,
                beds: 2,
                guestsAllowed : 3,
                type : "Regular",
                reservations: [
                    {
                        checkIn : "10-08-2019",
                        checkOut :"10-10-2019",
                        confirmationNumber: 0,
                        firstName: "",
                        lastName: ""
                    },
                    {
                        checkIn : "10-14-2019",
                        checkOut : "10-20-2019" ,
                        confirmationNumber: 0,
                        firstName: "",
                        lastName: ""
                    }

                ]
            },
            {
                id: 2,
                price : 300,
                beds: 2,
                guestsAllowed : 3,
                type : "Deluxe",
                reservations: [
                    {
                        checkIn :"10-09-2019",
                        checkOut :"10-11-2019" ,
                        confirmationNumber: 0,
                        firstName: "",
                        lastName: ""
                    },
                    {
                        checkIn :"10-20-2019",
                        checkOut :"10-23-2019",
                        confirmationNumber: 0,
                        firstName: "",
                        lastName: ""
                    }

                ]
            },

            {
                id: 3,
                price : 400,
                beds: 3,
                guestsAllowed : 6,
                type : "Family",
                reservations: [
                    {
                        checkIn : "10-09-2019",
                        checkOut :"10-15-2019" ,
                        confirmationNumber: 0,
                        firstName: "",
                        lastName: ""
                    },
                    {
                        checkIn : "10-16-2019",
                        checkOut : "10-20-2019" ,
                        confirmationNumber: 0,
                        firstName: "",
                        lastName: ""
                    }

                ]
            }
    ]

    const [filters, setFilters] = React.useState({
        price: 0,
        guestsAllowed : 0,
        beds : 0,
        type : "all"
    })

       // gets the dates from the date form component
       const getDate = (e) => {
           
            e.preventDefault()
           setStartDate(e.target.elements.startDate.value)
            setEndDate(e.target.elements.endDate.value)
            
        
         }

        

         
        
 // gets the filters from the filters component 
         const getFilters = (filtersVal) => {
          
            setFilters(filtersVal)
         }

         console.log(filters)

        
        

         
         
         //to check when a user inputed dates
         if (startDate !== "" && endDate !== ""){
                showItems = true
         }

        
         

        
      

         
       
        return(
            
            <div>
                <div className = "roomContainer">
                    
                    <div className = "roomIntroContainer">
                         <RoomIntro /> 
                    </div>
                    <div>
                        <h1>Search Rooms</h1>
                    </div>
                    
                    <DateForm getDate = {getDate}  />

                    <Filters getFilters = {getFilters} disp = {showItems}  />
                    
                    <RoomGrid roomData = {roomData} startDate = {startDate} endDate = {endDate} filters = {filters} disp = {showItems}/>
                    
                  
                </div>
              
            </div>
        ) // end-return
    //end-render


}; //end-class
export default Rooms