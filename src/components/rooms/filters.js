import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: "center"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: window.innerWidth * .20,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export default function SimpleSelect(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    price: "",
    guestsAllowed: "",
    beds : "",
    type: "all"
  });
  let disp = {
     display : "none"
  }

  // to check for filter changes so room component can get the data 
  useEffect(() => {
    props.getFilters(values)
  }, [values]);


  const handleChange = e => {
   
    setValues(oldValues => ({
      ...oldValues,
      [e.target.name]: e.target.value,  
    }));

   
  };

  const handleResetFilters = (e) => {
      setValues (oldValues => ({
        ...oldValues, 
        price: "",
        guestsAllowed: "",
        beds : "",
        type: "all"
      }))

      
  }

  if(props.disp){
    disp.display = "block"
}
  

  return (
      <div style = {disp}> 
        <form className={classes.root} autoComplete="off"  >
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="price-simple">Price</InputLabel>
                <Select
                value={values.price}
                onChange={handleChange}
                inputProps={{
                    name: 'price',
                    id: 'price-simple',
                }}
                >
                <MenuItem value={100}>$100</MenuItem>
                <MenuItem value={200}>$200</MenuItem>
                <MenuItem value={300}>$300</MenuItem>
                <MenuItem value={400}>$400</MenuItem>
                <MenuItem value={500}>$500</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="guests-simple">Number of Guests</InputLabel>
                <Select
                value={values.guestsAllowed}
                onChange={handleChange}
                inputProps={{
                    name: 'guestsAllowed',
                    id: 'guests-simple',
                }}
                >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="beds-simple">Number of Beds</InputLabel>
                <Select
                value={values.beds}
                onChange={handleChange}
                inputProps={{
                    name: 'beds',
                    id: 'beds-simple',
                }}
                >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="type-simple">Hotel Type</InputLabel>
                <Select
                value={values.type}
                onChange={handleChange}
                inputProps={{
                    name: 'type',
                    id: 'type-simple',
                }}
                >
                <MenuItem value = {"all"}>All</MenuItem>
                <MenuItem value={"Regular"}>Regular</MenuItem>
                <MenuItem value={"Family"}>Family</MenuItem>
                <MenuItem value={"Deluxe"}>Deluxe</MenuItem>
                </Select>
            </FormControl>
             
                
        </form>
        <Button color="secondary" className={classes.button} onClick = {handleResetFilters}>
              Reset
          </Button>

        
    </div>
  );
}
