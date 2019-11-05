import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import RoomImg from './images/room2.jpg';

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

  let reservationData = [
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
                confirmationNumber: 6,
                firstName: "",
                lastName: ""
            },
            {
                checkIn : "10-14-2019",
                checkOut : "10-20-2019" ,
                confirmationNumber: 5,
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
                confirmationNumber: 4,
                firstName: "",
                lastName: ""
            },
            {
                checkIn :"10-20-2019",
                checkOut :"10-23-2019",
                confirmationNumber: 3,
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
                confirmationNumber: 2,
                firstName: "",
                lastName: ""
            },
            {
                checkIn : "10-16-2019",
                checkOut : "10-20-2019" ,
                confirmationNumber: 1,
                firstName: "",
                lastName: ""
            }

        ]
    }
  ]

  let getConfirmationNum = (e) => {
    value = parseInt(e.target.value);
  }

  let checkConfirmationNum = () => {
    let valid = false;
    document.querySelector('.invalidConfirmationNum').style.display = 'none';
    document.querySelector('.reservedRoom').style.display = "none";
    
    reservationData.forEach((i) => {
      i.reservations.forEach((j) => {
        if (j.confirmationNumber === value) {
          document.querySelector('.reservedRoom').style.display = "block";
          document.getElementById('guests').innerText = i.guestsAllowed;
          document.getElementById('beds').innerText = i.beds;
          document.getElementById('type').innerText = i.type;
          document.getElementById('price').innerText = i.price;
          valid = true;
        }
      });
    });
    
    if (!valid) {
      document.querySelector('.invalidConfirmationNum').style.display = 'block';
    }
  }

  let cancelReservation = () => {
    alert('Reservation Cancelled');
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

          <Button variant="contained" className={classes.button} onClick={checkConfirmationNum} >
          Submit
          </Button>
        </form>  
      </div>

      <div className="invalidConfirmationNum">
        <h2>Invalid Confimation Number</h2>
      </div>

      <div className="reservedRoom">
        <img src={RoomImg} />
        <h2>Room Title</h2>
        <ul>
          <div className="listHeadings">
            <li>Max Guests</li>
            <li>Beds</li>
            <li>Room Type</li>
          </div>
          <div className='listValues'>
            <li id="guests"></li>
            <li id="beds"></li>
            <li id="type"></li>
          </div>
        </ul>
        <div className="priceAndCancel">
          <h2>Price: $<span id='price'></span></h2>
          <Button variant="contained" color="primary" size = "medium" onClick={cancelReservation} >Cancel Reservation
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TextFields
