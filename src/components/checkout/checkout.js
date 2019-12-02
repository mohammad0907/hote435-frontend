import React, {useEffect} from "react"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import moment from "moment";
import Button from '@material-ui/core/Button';
import axios from 'axios';

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
    useEffect(() => {
      window.scrollTo(0, 0);
    },[])
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
    price : parseFloat(props.match.params.price),
    roomId: props.match.params.room_id
   

   
   
  });
  const [disableButton, setDisableButton] = React.useState(false)
  const [message, setMessage] = React.useState([])

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  const submit = event => {
    event.preventDefault();
  
    setDisableButton(true)
    axios.post('https://hotel435.azurewebsites.net/reservations' , {
            
            address: values.address,
            checkIn: values.checkIn,
            checkOut: values.checkOut,
            city:values.city,
            creditCardNum: values.creditCardNum,
            cvv: values.cvv,
            email: values.email,
            expMonth: values.expMonth,
            expYear: values.expYear,
            firstName: values.fName,
            lastName: values.lName,
            price: values.price,
            roomId:values.roomId,
            state: values.state,
            zip: values.zip


            
        }).then(res => {
            
            props.history.push("/confirmation/" + JSON.stringify(values) + "/" + res.data.confirmationNumber)
        }).catch(err => {
         
            if(err.response){
              setMessage(Object.values(err.response.data.errors))
              setDisableButton(false)
            }
        })
        
    
  };

 
    
      

   
        return(
            <div className = "checkoutMain">
                <h1>Check Out</h1>
                <div className = "errorMessage">
                  <ul>
                    {message.map(items => {
                      
                      return(
                        
                          <li style = {{color : "red"}}>{items}</li>
                        
                      )
                      
                      
                      })}

                      </ul>
                </div>
                <form
                onSubmit={submit}
                style = {{display : 'flex', flexDirection: 'column', alignItems: 'center',}}
                >
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
                        required
                        
                     />

                     <TextField
                        id="standard-with-placeholder"
                        label="Last Name"
                        placeholder="Last Name"
                        className={classes.textField}
                        margin="normal"
                        value = {values.lName}
                        onChange = {handleChange('lName')}
                        required
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
                        required
                        
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
                        required
                        
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
                        required
                        
                        
                     />

                     <FormControl required className={classes.formControl}>
                            <InputLabel htmlFor="age-native-required">State</InputLabel>
                            
                            <Select
                            native
                            value={values.state}
                            onChange={handleChange('state')}
                            
                            
                            >
                           <option value = ""></option> 
                           <option value = {"Alabama"}> Alabama</option>
                           <option value = {"Alaska"}> Alaska</option>
                           <option value = {"Arizona"}> Arizona</option>
                           <option value = {"Arkansas"}> Arkansas</option>
                           <option value = {"Californa"}> California</option>
                           <option value = {"Colorado"}> Colorado</option>
                           <option value = {"Connecticut"}> Connecticut</option>
                           <option value = {"Delaware"}> Delaware</option>
                           <option value = {"Florida"}> Florida</option>
                           <option value = {"Georgia"}> Georgia</option>
                           <option value = {"Hawaii"}> Hawaii</option>
                           <option value = {"Idaho"}> Idaho</option>
                           <option value = {"Illinois"}> Illinois</option>
                           <option value = {"Indiana"}> Indiana</option>
                           <option value = {"Iowa"}> Iowa</option>
                           <option value = {"Kansas"}> Kansas</option>
                           <option value = {"Kentucky"}> Kentucky</option>
                           <option value = {"Louisiana"}> Louisiana</option>
                           <option value = {"Maine"}> Maine</option>
                           <option value = {"Maryland"}> Maryland</option>
                           <option value = {"Massachusetts"}> Massachusetts</option>
                           <option value = {"Michigan"}> Michigan</option>
                           <option value = {"Minnesota"}> Minnesota</option>
                           <option value = {"Mississippi"}> Mississippi</option>
                           <option value = {"Missouri"}> Missouri</option>
                           <option value = {"Montana"}> Montana</option>
                           <option value = {"Nebreska"}> Nebraska</option>
                           <option value = {"Neveda"}> Nevada</option>
                           <option value = {"New Hampshire"}> New Hampshire</option>
                           <option value = {"New Jersey"}> New Jersey</option>
                           <option value = {"New Mexico"}> New Mexico</option>
                           <option value = {"New York"}> New York</option>
                           <option value = {"North Carolina"}> North Carolina</option>
                           <option value = {"North Dakota"}> North Dakota</option>
                           <option value = {"Ohio"}> Ohio</option>
                           <option value = {"Oklahoma"}> Oklahoma</option>
                           <option value = {"Oregon"}> Oregon</option>
                           <option value = {"Pennsylvania"}> Pennsylvania</option>
                           <option value = {"Rhode Island"}> Rhode Island</option>
                           <option value = {"South Carolina"}> South Carolina</option>
                           <option value = {"South Dakota"}> South Dakota</option>
                           <option value = {"Tennessee"}> Tennessee</option>
                           <option value = {"Texas"}> Texas</option>
                           <option value = {"Utah"}>  Utah</option>
                           <option value = {"Vermont"}> Vermont</option>
                           <option value = {"Virginia"}> Virginia</option>
                           <option value = {"Washington"}> Washington</option>
                           <option value = {"West Virginia"}> West Virginia</option>
                           <option value = {"Wisconsin"}> Wisconsin</option>
                           <option value = {"Wyoming"}> Wyoming</option>
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
                        required
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
                        required
                        
                     />

                     <FormControl required className={classes.formControl}>
                            <InputLabel htmlFor="age-simple">Expiration Month</InputLabel>
                            <Select
                            value={values.expMonth}
                            onChange={handleChange('expMonth')}
                            native
                            >
                          <option value = ""></option>
                           <option value = {1}>01</option>
                           <option value = {2}>02</option>
                           <option value = {3}>03</option>
                           <option value = {4}>04</option>
                           <option value = {5}>05</option>
                           <option value = {6}>06</option>
                           <option value = {7}>07</option>
                           <option value = {8}>08</option>
                           <option value = {9}>09</option>
                           <option value = {10}>10</option>
                           <option value = {11}>11</option>
                           <option value = {12}>12</option>

                           
                            </Select>
                     </FormControl>

                     <FormControl required className={classes.formControl}>
                            <InputLabel htmlFor="age-simple">Expiration Year</InputLabel>
                            <Select
                            value={values.expYear}
                            onChange={handleChange('expYear')}
                            native
                            
                            >
                            <option value = ""></option>
                           <option value = {2019}>2019</option>
                           <option value = {2020}>2020</option>
                           <option value = {2021}>2021</option>
                           <option value = {2022}>2022</option>
                           <option value = {2023}>2023</option>
                           <option value = {2024}>2024</option>
                           <option value = {2025}>2025</option>
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
                        required
                        
                     />


                     <div className = "checkOutInfo">
                        <h4>Check In: {moment(props.match.params.start_date).format('dddd, MMMM, Do, YYYY')}</h4>
                        <h4>Check Out: {moment(props.match.params.end_date).format('dddd, MMMM, Do, YYYY')}</h4>
                        <h4>Days: {props.match.params.days}</h4>
                        <h4>Price: ${props.match.params.price}</h4>
                     </div>

                    
                <Button type = "submit" disabled = {disableButton} className = "bookNow" variant="contained" color="primary"> BOOK NOW </Button>
                </div>
                </form>



                
            </div>
        ) // end-return



} //end-class

