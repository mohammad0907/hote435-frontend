import React, {Component} from "react"






class Rooms extends Component {
    constructor(props){
        super(props)

        this.state = {

        } //end-state

    } //end-constructor

    

    render(){
        let room = localStorage.getItem("room")

        console.log(room)
        return(
            <div>
                <h1>checkout</h1>
                <p>{room}</p>
            </div>
        ) // end-return
    }//end-render


} //end-class
export default Rooms