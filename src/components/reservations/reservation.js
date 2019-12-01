import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import RoomImg from './images/room2.jpg';
import axios from 'axios'

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

  let getConfirmationNum = (e) => {
    value = e.target.value;
  }

  let  submitted = () => {
    axios.get('https://hotel435.azurewebsites.net/reservations')
      .then(res => {
        const resData = res.data
        checkConfirmationNum(resData);
    })
  }

  let checkConfirmationNum = (resData) => {
    let valid = false;
    document.querySelector('.invalidConfirmationNum').style.display = 'none';
    document.querySelector('.reservedRoom').style.display = "none";
    
    console.log(resData);
    console.log(resData[0].confirmationNumber);
    console.log(value);

    for (let i = 0, j = resData.length; i < j; i++) {
      if (resData[i].confirmationNumber === value) {
        const roomId = resData[i].roomId;
        let checkInDate = resData[i].checkIn;
        let checkOutDate = resData[i].checkOut;
        let checkedIn;
        let checkedOut;
        
        if (resData[i].isCheckedIn) {
          checkedIn = 'Yes';
        }
        else {
          checkedIn = "No";
        }

        if (resData[i].isCheckedOut) {
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
        document.getElementById('guestName').innerText = resData[i].firstName;
        document.getElementById('guestName').innerText += ` ${resData[i].lastName}`;
        document.getElementById('guestEmail').innerText = resData[i].email;
        document.getElementById('zip').innerText = resData[i].zip;
        document.getElementById('checkedIn').innerText = checkedIn;
        document.getElementById('checkedOut').innerText = checkedOut;

        axios.get('https://hotel435.azurewebsites.net/rooms')
          .then(res => {
            const roomData = res.data
            getRoomData(roomData, roomId)
        })

        valid = true;
        break;
      }
    }
    
    if (!valid) {
      document.querySelector('.invalidConfirmationNum').style.display = 'block';
    }
  }

  function getRoomData(roomData, roomId) {
    for (let i = 0, j = roomData.length; i < j; i++) {
      if (roomData[i].id === roomId) {
        document.getElementById('guests').innerText = roomData[i].guestsAllowed;
        document.getElementById('beds').innerText = roomData[i].beds;
        document.getElementById('type').innerText = roomData[i].type;
        document.getElementById('price').innerText = roomData[i].price;
      }
    }
  }

  let openModal = () => {
    document.getElementById('modal').style.display = "block";
  }

  let closeModal = () => {
    document.getElementById('modal').style.display = "none";
  }

  let cancelReservation = () => {
    console.log(value);
    axios.delete(`https://hotel435.azurewebsites.net/reservations/${value}`)
      .then(res => {
        console.log(res.data)
    });
    window.location.reload();
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
            onChange={getConfirmationNum}
          />

          <Button variant="contained" className={classes.button} onClick={submitted} >
          Submit
          </Button>
        </form>  
      </div>

      <div className="invalidConfirmationNum">
        <h2>Invalid Confimation Number</h2>
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
