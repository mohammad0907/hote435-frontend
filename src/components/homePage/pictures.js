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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
            </div>

            <div className = "pool">
                <img src ={pool} alt = "bed" width = "100%"/>
                <h3>Soak In the Sun At Our Amazing Pool</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 

            </div>

            <div className = "spa">
                <img src ={spa} alt = "bed" width = "100%"/>  
                <h3>Forget the World At Our Blissful Spa</h3> 
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 

            </div>
            
        </div>
    )
}