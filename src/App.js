import React , {Component} from 'react';
import Nav from "./components/nav.js"
import HomePage from "./components/homePage/homePage.js"
import Rooms from "./components/rooms/rooms.js"
import Reservation from "./components/reservations/reservation.js"
import Checkout from "./components/checkout/checkout.js"
import {BrowserRouter, Route} from "react-router-dom"

class App extends Component{
    
  constructor(props){
    super(props);
    this.state = {

    }

  }
  

  render(){
    return(
      <BrowserRouter>
        <div>
          <Nav />
           <Route exact path = "/" component = {HomePage} />
           <Route  path = "/rooms" component = {Rooms} />
           <Route  path = "/reservation" component = {Reservation} />
           <Route  path = "/checkout" component = {Checkout} />
        </div>
      </BrowserRouter>
    
    
      ) //end-return 
  }// end-render




} //end-class

export default App;
