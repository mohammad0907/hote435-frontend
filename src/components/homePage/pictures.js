import React from "react"
import bedOne from "./images/bed.jpg"
import pool from "./images/pool.jpg"
import spa from "./images/spa.jpg"
import "../../App.css"




export default function Pictures(){
    return(
        <div className = "picCardsCotainer">
            <div className = "bedRoom"> 
                <img src ={bedOne} alt = "bed" width = "100%"/>
                <h3>Unwind In Our State Of the Art Bedrooms</h3>
                <p>With rooms that are designed to provide the most comfort, you'll never want to get out of bed. Select from a variety of rooms that fit your specific needs. </p> 
            </div>

            <div className = "pool">
                <img src ={pool} alt = "bed" width = "100%"/>
                <h3>Soak In the Sun At Our Amazing Pool</h3>
                <p>What's better on a hot day than lazing by a pool and an occasional dip? Come see for yourself why our guests can't help but fall in love with our amazing pool.</p> 

            </div>

            <div className = "spa">
                <img src ={spa} alt = "bed" width = "100%"/>  
                <h3>Forget the World At Our Blissful Spa</h3> 
                <p>Experience our Spa treatments that are therapeutic, relaxing, and a great opportunity to alleviate the stresses of work life.</p> 

            </div>
            
        </div>
    )
}