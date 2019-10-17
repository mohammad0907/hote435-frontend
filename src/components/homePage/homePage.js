import React , {Component} from 'react';

import Intro from "./intro.js"
import Services from "./services.js"
import Pictures from "./pictures.js"




class HomePage extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    } // end-constructor


    render(){
        return(
            
            <div>
               
                <Intro />
                <Services />
                <Pictures />
            </div>
        )//end-return
    }//end-render


}//end-class

export default HomePage;