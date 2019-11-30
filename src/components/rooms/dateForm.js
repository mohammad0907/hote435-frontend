import 'date-fns';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DateFnsUtils from "@date-io/date-fns"
import moment from "moment"
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import "../../App.css"

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(3),

    },
    input: {
      display: 'none',
    },
  }));

export default function MaterialUIPickers(props) {
  // The first commit of Material-UI
  const classes = useStyles();

  let dates;
  const [startSelectedDate, setStartSelectedDate] = React.useState(moment());
  const [endSelectedDate, setEndSelectedDate] = React.useState (moment(moment()).add(1, 'days'))
 

  const handleStartDateChange = date => {
    setStartSelectedDate(date);
   
    
  };
  const handleEndDateChange = date => {
      setEndSelectedDate(date);
  }


  return (
    <form onSubmit = {props.getDate}> 
        <div className = "datePicker">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                
                    <div>
                        <KeyboardDatePicker
                            name = "startDate"
                            margin="normal"
                            id="date-picker-dialog"
                            label="Check-In"
                            format="MM/dd/yyyy"
                            value={startSelectedDate}
                            onChange={handleStartDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                            />
                            <p>{dates}</p>
                    </div>

                    <div>
                        
                        <KeyboardDatePicker
                            name = "endDate"
                            margin="normal"
                            id="date-picker-dialog"
                            label="Check-Out"
                            format="MM/dd/yyyy"
                            value={endSelectedDate}
                            onChange={handleEndDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                            />
                    </div>
                
                
                
            
                </MuiPickersUtilsProvider>
                <Button type = "submit" variant="contained" size="medium" className={classes.button}>
                    Search
                </Button>

        </div>
    </form>
  );
}
