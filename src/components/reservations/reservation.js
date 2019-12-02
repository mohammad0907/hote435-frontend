import React, {useRef} from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import RoomImg from './images/room2.jpg';
import axios from 'axios'
import loading from './images/Rolling-1s-200px.gif'

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "38%",
    '@media only screen and (max-width: 700px)' : {
      width: "90%",
    }
  },
  button: {
    width: '15%'
  }
}));

function TextFields() {
  const classes = useStyles();
  let value = 0;
  let textInput = useRef(null);

  const [loadStyles, setLoadStyes] = React.useState({
    display: 'none'
  })

  let submitted = () => {
    value = textInput.current.value;

    setLoadStyes({
      display : "block"
    })
    
    axios.get(`https://hotel435.azurewebsites.net/reservations/${value}`)
      .then(res => {
        document.querySelector('.invalidConfirmationNum').style.display = 'none';
        const resData = res.data;
        checkConfirmationNum(resData);
        setLoadStyes({
          display : "none"
        })
      })
      .catch(() => {
        document.querySelector('.invalidConfirmationNum').style.display = 'block';
        document.querySelector('.reservedRoom').style.display = "none";
        setLoadStyes({
          display : "none"
        })
      })
  }

  let checkConfirmationNum = (resData) => {
    let checkInDate = resData.checkIn;
    let checkOutDate = resData.checkOut;
    let checkedIn;
    let checkedOut;
    
    if (resData.isCheckedIn) {
      checkedIn = 'Yes';
    }
    else {
      checkedIn = "No";
    }

    if (resData.isCheckedOut) {
      checkedOut = 'Yes';
    }
    else {
      checkedOut = "No";
    }

    checkInDate = `${checkInDate.substring(5, 10)}-${checkInDate.substring(0, 4)}`;
    checkOutDate = `${checkOutDate.substring(5, 10)}-${checkOutDate.substring(0, 4)}`;

    document.querySelector('.reservedRoom').style.display = "block";
    document.getElementById('checkIn').innerText = checkInDate;
    document.getElementById('checkOut').innerText = checkOutDate;
    document.getElementById('guestName').innerText = resData.firstName;
    document.getElementById('guestName').innerText += ` ${resData.lastName}`;
    document.getElementById('guestEmail').innerText = resData.email;
    document.getElementById('zip').innerText = resData.zip;
    document.getElementById('checkedIn').innerText = checkedIn;
    document.getElementById('checkedOut').innerText = checkedOut;
    document.getElementById('price').innerText = resData.price;

    axios.get(`https://hotel435.azurewebsites.net/rooms/${resData.roomId}`)
      .then(res => {
        const roomData = res.data
        getRoomData(roomData)
    })    
  }

  function getRoomData(roomData) {
    document.getElementById('guests').innerText = roomData.guestsAllowed;
    document.getElementById('beds').innerText = roomData.beds;
    document.getElementById('type').innerText = roomData.type;
  }

  let openModal = () => {
    document.getElementById('modal').style.display = "block";
  }

  let closeModal = () => {
    document.getElementById('modal').style.display = "none";
  }

  let cancelReservation = () => {
   
    axios.delete(`https://hotel435.azurewebsites.net/reservations/${value}`)
      .then(res => {
        
    });
    document.getElementById('modal').style.display = "none";
    document.querySelector('.reservedRoom').style.display = "none";
  }

  return (
    <div className="reservationContainer">
      <div className="reservationIntro">
        <h1 className="titleContainer">View Reservation</h1>
      </div>
      
      <div className="reservForm">
        <form className={classes.container} noValidate autoComplete="off">
          
          <TextField
            id="standard-with-placeholder"
            label="Enter Confirmation Number"
            className={classes.textField}
            margin="normal"
            inputRef={textInput}
          />

          <Button variant="contained" className={classes.button} onClick={submitted} >
          Submit
          </Button>
        </form>  
      </div>

      <div className="invalidConfirmationNum">
        <h2>Invalid Confimation Number</h2>
      </div>

      <div style = {{width: "100%", display :'flex', justifyContent: "center", marginTop: "40px" }}>
        <img src = {loading} style = {loadStyles} height = "40px" alt = "loader" />
      </div>

      <div className="reservedRoom">
        <img src={RoomImg} />
        <h2>Room Information</h2>
        <ul>
          <div className='listValues'>
            <li>Max Guests</li>
            <li id="guests"></li>
          </div>
          <div className='listValues'>
            <li>Beds</li>
            <li id="beds"></li>
          </div>
          <div className='listValues'>
            <li>Room Type</li>
            <li id="type"></li>
          </div>
          <div className='listValues'>
            <li>Check In Date</li>
            <li id="checkIn"></li>
          </div>
          <div className='listValues'>
            <li>Check Out Date</li>
            <li id="checkOut"></li>
          </div>          
        </ul>

        <hr />

        <div className="guestInfo">
          <h2>Guest Information</h2>
          <ul>
            <div className="listValues">
              <li>Name</li>
              <li id="guestName"></li>
            </div>
            <div className='listValues'>
              <li>Email</li>
              <li id="guestEmail"></li>
            </div>
            <div className='listValues'>
              <li>Zip</li>
              <li id="zip"></li>
            </div>
            <div className='listValues'>
              <li>Checked In</li>
              <li id="checkedIn"></li>
            </div>
            <div className='listValues'>
              <li>Checked Out</li>
              <li id="checkedOut"></li>
            </div>
            
          </ul>
        </div>

        <hr />

        <div className="priceAndCancel">
          <h2>Price: $<span id='price'></span></h2>
          <Button variant="contained" color="secondary" size = "medium" onClick={openModal} >Cancel Reservation
          </Button>
        </div>

        <div id="modal">
          <div className="cancelConfm">
            <h2>Are you sure you want to cancel your reservation?</h2>
            <div className="cancelBtns">
              <Button variant="contained" color="secondary" size = "medium" onClick={cancelReservation} >Yes
              </Button>
              <Button variant="contained" color="primary" size = "medium" onClick={closeModal} >Go Back
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextFields
