import React, {useState} from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';



const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    
    input: {
        display: 'none',
      },
  }));



const UpdateUser =() =>{

    const [value, setValue] = useState('female');
    const [fname, setFname] =useState('Anu');
    const [lname,setLname] =useState('Priya');
    const [email,setEmail] = useState('example@gmail.com');
    const [mobile,setMobileNo] = useState('1111111111');
  
    const classes = useStyles();

    const handleChange = (event) => {
        setValue(event.target.value);
      };
      const handleChangeFname = (event) => {
        setFname(event.target.value);
      };
      const handleChangeLname = (event) => {
        setLname(event.target.value);
      };
      const handleChangeEmail = (event) => {
        setEmail(event.target.value);
      };
      const handleChangeMobile = (event) => {
        setMobileNo(event.target.value);
      };

      const submit = () =>{
        console.log("submit")
        console.log(`${fname} ${lname}`)
        console.log(`${mobile} ${value}`)
      }


    return(
        <>
        <Container maxWidth="sm" style={{backgroundColor:'#cfe8fc'}}>
            <h1>Update User</h1><hr/>
            <img src="./image/flower.jpg" alt="image"/><br/><br/>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={submit}>
            
            <TextField id="standard-basic" label="First Name" name="fname"
                value={fname} onChange={handleChangeFname}/>
            <TextField id="standard-basic" label="Last Name" name="lname"
                value={lname} onChange={handleChangeLname}/>

            <TextField id="standard-basic" label="Email" name="email"
                 value={email} onChange={handleChangeEmail}
            />

            <TextField id="standard-basic" label="Mobile" name="mobile"
                 value={mobile} onChange={handleChangeMobile}
            />
            <TextField
                id="date"
                label="Date of Birth"
                type="date"
                defaultValue="2021-01-01"
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <div>
            <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
            </FormControl>
            </div>
            <div>
                <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                <label htmlFor="icon-button-file">
                <IconButton color="primary" aria-label="upload picture" component="span">
                <PhotoCamera />
                </IconButton>
                </label>
            </div>

            <Button variant="contained" color="secondary" type="submit">
                Update
            </Button>



            </form>
        </Container>
        </>
    );
}

export default UpdateUser;