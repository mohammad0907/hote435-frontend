import React, {Component} from "react"
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { NavLink} from "react-router-dom"
import moment from "moment";


const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(5),
      width: "40%",
      '@media only screen and (max-width: 700px)' : {
        width: "100%",
      }
    },
    crediCardTextField :{
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(5),
      width: "60%",
      '@media only screen and (max-width: 700px)' : {
        width: "100%",
      }
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },

    root: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      formControl: {
        marginTop: theme.spacing(2),
        marginRight: theme.spacing(4),
        marginLeft: theme.spacing(1),
        minWidth: "40%",
        '@media only screen and (max-width: 700px)' : {
          width: "100%",
        }
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
  }));


export default function Checkout(props) {
    //end-constructor

    const classes = useStyles();
  const [values, setValues] = React.useState({
    fName: '',
    lName: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    state: '',
    creditCardNum: '',
    expMonth: '',
    expYear: '',
    cvv: '',
    checkIn : props.match.params.start_date,
    checkOut: props.match.params.end_date,
    price : props.match.params.price,
    confirmationNum: Math.floor(Math.random() * (9999999999 - 1000000000)) + 1000000000

   
   
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  console.log(values)
    
        let room = localStorage.getItem("room")

        console.log(room)
        return(
            <div className = "checkoutMain">
                <h1>Check Out</h1>
                <div className = "nameCont">
                    <h2>Name</h2>
                    <div className = "nameForms">
                    <TextField
                        id="standard-with-placeholder"
                        label="First Name"
                        placeholder="First Name"
                        className={classes.textField}
                        margin="normal"
                        value = {values.fName}
                        onChange = {handleChange('fName')}
                        
                     />

                     <TextField
                        id="standard-with-placeholder"
                        label="Last Name"
                        placeholder="Last Name"
                        className={classes.textField}
                        margin="normal"
                        value = {values.lName}
                        onChange = {handleChange('lName')}
                    />
                    </div>
                    <div className = "emailForm" style = {{width: "100%"}}>
                    <TextField
                        id="standard-with-placeholder"
                        label="Email Address"
                        style={{ margin: 8 }}
                        placeholder="Email Address"
                        fullWidth
                        InputLabelProps={{
                        shrink: true,
                        }}
                        margin="normal"
                        value = {values.email}
                        onChange = {handleChange('email')}
                        
                     />
                    </div>
                </div>

                <div className = "addressCont" >
                    <h2>Address</h2>
                    <TextField
                        id="standard-with-placeholder"
                        label="Address"
                        style={{ margin: 8 }}
                        placeholder="Address"
                        fullWidth
                        InputLabelProps={{
                        shrink: true,
                        }}
                        margin="normal"
                        value = {values.address}
                        onChange = {handleChange('address')}
                        
                     />


                     <TextField
                        id="standard-with-placeholder"
                        label="City"
                        style={{ margin: 8 }}
                        placeholder="City"
                        fullWidth
                        InputLabelProps={{
                        shrink: true,
                        }}
                        margin="normal"
                        value = {values.city}
                        onChange = {handleChange('city')}
                        
                        
                     />

                     <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-simple">State</InputLabel>
                            <Select
                            value={values.state}
                            onChange={handleChange('state')}
                            >
                           <MenuItem value = {"Alabama"}> Alabama</MenuItem>
                           <MenuItem value = {"Alaska"}> Alaska</MenuItem>
                           <MenuItem value = {"Arizona"}> Arizona</MenuItem>
                           <MenuItem value = {"Arkansas"}> Arkansas</MenuItem>
                           <MenuItem value = {"Californa"}> California</MenuItem>
                           <MenuItem value = {"Colorado"}> Colorado</MenuItem>
                           <MenuItem value = {"Connecticut"}> Connecticut</MenuItem>
                           <MenuItem value = {"Delaware"}> Delaware</MenuItem>
                           <MenuItem value = {"Florida"}> Florida</MenuItem>
                           <MenuItem value = {"Georgia"}> Georgia</MenuItem>
                           <MenuItem value = {"Hawaii"}> Hawaii</MenuItem>
                           <MenuItem value = {"Idaho"}> Idaho</MenuItem>
                           <MenuItem value = {"Illinois"}> Illinois</MenuItem>
                           <MenuItem value = {"Indiana"}> Indiana</MenuItem>
                           <MenuItem value = {"Iowa"}> Iowa</MenuItem>
                           <MenuItem value = {"Kansas"}> Kansas</MenuItem>
                           <MenuItem value = {"Kentucky"}> Kentucky</MenuItem>
                           <MenuItem value = {"Louisiana"}> Louisiana</MenuItem>
                           <MenuItem value = {"Maine"}> Maine</MenuItem>
                           <MenuItem value = {"Maryland"}> Maryland</MenuItem>
                           <MenuItem value = {"Massachusetts"}> Massachusetts</MenuItem>
                           <MenuItem value = {"Michigan"}> Michigan</MenuItem>
                           <MenuItem value = {"Minnesota"}> Minnesota</MenuItem>
                           <MenuItem value = {"Mississippi"}> Mississippi</MenuItem>
                           <MenuItem value = {"Missouri"}> Missouri</MenuItem>
                           <MenuItem value = {"Montana"}> Montana</MenuItem>
                           <MenuItem value = {"Nebreska"}> Nebraska</MenuItem>
                           <MenuItem value = {"Neveda"}> Nevada</MenuItem>
                           <MenuItem value = {"New Hampshire"}> New Hampshire</MenuItem>
                           <MenuItem value = {"New Jersey"}> New Jersey</MenuItem>
                           <MenuItem value = {"New Mexico"}> New Mexico</MenuItem>
                           <MenuItem value = {"New York"}> New York</MenuItem>
                           <MenuItem value = {"North Carolina"}> North Carolina</MenuItem>
                           <MenuItem value = {"North Dakota"}> North Dakota</MenuItem>
                           <MenuItem value = {"Ohio"}> Ohio</MenuItem>
                           <MenuItem value = {"Oklahoma"}> Oklahoma</MenuItem>
                           <MenuItem value = {"Oregon"}> Oregon</MenuItem>
                           <MenuItem value = {"Pennsylvania"}> Pennsylvania</MenuItem>
                           <MenuItem value = {"Rhode Island"}> Rhode Island</MenuItem>
                           <MenuItem value = {"South Carolina"}> South Carolina</MenuItem>
                           <MenuItem value = {"South Dakota"}> South Dakota</MenuItem>
                           <MenuItem value = {"Tennessee"}> Tennessee</MenuItem>
                           <MenuItem value = {"Texas"}> Texas</MenuItem>
                           <MenuItem value = {"Utah"}>  Utah</MenuItem>
                           <MenuItem value = {"Vermont"}> Vermont</MenuItem>
                           <MenuItem value = {"Virginia"}> Virginia</MenuItem>
                           <MenuItem value = {"Washington"}> Washington</MenuItem>
                           <MenuItem value = {"West Virginia"}> West Virginia</MenuItem>
                           <MenuItem value = {"Wisconsin"}> Wisconsin</MenuItem>
                           <MenuItem value = {"Wyoming"}> Wyoming</MenuItem>
                            </Select>
                     </FormControl>

                     <TextField
                        id="standard-with-placeholder"
                        label="Zip Code"
                        placeholder="Zip Code"
                        className={classes.textField}
                        margin="normal"
                        value = {values.zip}
                        onChange = {handleChange('zip')}
                        
                     />



                </div>

                <div className = "paymentCont" >
                    <h2>Payment Information</h2>
                    <TextField
                        id="standard-with-placeholder"
                        label="Credit / Debit Card Number"
                        placeholder="Credit / Debit Card Number"
                        className={classes.crediCardTextField}
                        margin="normal"
                        value = {values.creditCardNum}
                        onChange = {handleChange('creditCardNum')}
                        
                     />

                     <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-simple">Expiration Month</InputLabel>
                            <Select
                            value={values.expMonth}
                            onChange={handleChange('expMonth')}
                            >
                           <MenuItem value = {1}>01</MenuItem>
                           <MenuItem value = {2}>02</MenuItem>
                           <MenuItem value = {3}>03</MenuItem>
                           <MenuItem value = {4}>04</MenuItem>
                           <MenuItem value = {5}>05</MenuItem>
                           <MenuItem value = {6}>06</MenuItem>
                           <MenuItem value = {7}>07</MenuItem>
                           <MenuItem value = {8}>08</MenuItem>
                           <MenuItem value = {9}>09</MenuItem>
                           <MenuItem value = {10}>10</MenuItem>
                           <MenuItem value = {11}>11</MenuItem>
                           <MenuItem value = {12}>12</MenuItem>

                           
                            </Select>
                     </FormControl>

                     <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-simple">Expiration Year</InputLabel>
                            <Select
                            value={values.expYear}
                            onChange={handleChange('expYear')}
                            >
                           <MenuItem value = {2019}>2019</MenuItem>
                           <MenuItem value = {2020}>2020</MenuItem>
                           <MenuItem value = {2021}>2021</MenuItem>
                           <MenuItem value = {2022}>2022</MenuItem>
                           <MenuItem value = {2023}>2023</MenuItem>
                           <MenuItem value = {2024}>2024</MenuItem>
                           <MenuItem value = {2025}>2025</MenuItem>
                            </Select>
                     </FormControl>


                     <TextField
                        id="standard-with-placeholder"
                        label="CVV"
                        placeholder="CVV"
                        className={classes.textField}
                        margin="normal"
                        value = {values.cvv}
                        onChange = {handleChange('cvv')}
                        
                     />


                     <div className = "checkOutInfo">
                        <h4>Check In: {moment(props.match.params.start_date).format('dddd, MMMM, Do, YYYY')}</h4>
                        <h4>Check Out: {moment(props.match.params.end_date).format('dddd, MMMM, Do, YYYY')}</h4>
                        <h4>Days: {props.match.params.days}</h4>
                        <h4>Price: ${props.match.params.price}</h4>
                     </div>

                    
                <NavLink to = {"/confirmation/" + JSON.stringify(values)}><div className = "bookNow">
                    <h3>Book Now</h3>

                 </div> </NavLink>
                </div>



                
            </div>
        ) // end-return



} //end-class
