import React from "react"
import Restaurant from "./icons/dish.png"
import Gym from "./icons/gym.png"
import Shuttle from "./icons/bus.png"
import Pool from "./icons/pool.png"
import More from "./icons/add.png"




export default function Services (){
    return (
        <div className = "serviceContainer">
            <div className = "serviceTitle">
                <h1>Services</h1>
            </div>
            <div className = "serviceItems">
                <div>
                    <img src = {Restaurant} alt = "restaurant" width = "50px" />
                    <h4>Fiver Star Restaurant</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div>
                    <img src = {Gym} alt = "Gym" width = "50px" />
                    <h4>Gym</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                </div>

                <div>
                    <img src = {Shuttle} alt = "Shuttle" width = "50px" />
                    <h4>Free Shuttle Service</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                </div>

                <div>
                    <img src = {Pool} alt = "Pool" width = "50px" />
                    <h4>Pool</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                </div>
                <div>
                    <img src = {More} alt = "More" width = "50px" />
                    <h4>And Much More...</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                </div>

            </div>
        </div>
    )
}