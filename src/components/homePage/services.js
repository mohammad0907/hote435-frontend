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
                    <h4>Five Star Restaurant</h4>
                    <p>We welcome you to dine at our prestigious restaurant, where you can select from nearly a hundred different menu items. </p>
                </div>

                <div>
                    <img src = {Gym} alt = "Gym" width = "50px" />
                    <h4>Gym</h4>
                    <p>Strive for healthiness and excellence by utilizing our gym, where we provide you with the newest workout equipement so you can stay up to date with current fitness trends.</p>

                </div>

                <div>
                    <img src = {Shuttle} alt = "Shuttle" width = "50px" />
                    <h4>Free Shuttle Service</h4>
                    <p>Take advantage of our awesome shuttles to get where you need to be.</p>

                </div>

                <div>
                    <img src = {Pool} alt = "Pool" width = "50px" />
                    <h4>Pool</h4>
                    <p>Come cool down in our crystal clear pool, enjoy a refreshing cocktail, and laze in the sun.</p>

                </div>
                <div>
                    <img src = {More} alt = "More" width = "50px" />
                    <h4>And Much More...</h4>
                    <p>Are you ready to relax? Make your reservation now!</p>

                </div>

            </div>
        </div>
    )
}