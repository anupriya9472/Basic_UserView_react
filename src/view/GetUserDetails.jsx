import React,{Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

  const imgsrc='./image/flower.jpg';  

const GetUserDetails = () => {


        const classes = useStyles();

        return (
            <>
            <Container maxWidth="md">

            <h1>User Details</h1>
            
    <div className={classes.root}>
    <Grid container spacing={4}>
            <Grid item xs={12}>
          <Paper className={classes.paper}>
            <img src={imgsrc} alt="image"/><br/><br/>
              <label>Name : Anu Priya</label><br/><br/>
              <label>Email : jhgdsfjhgljhg</label><br/><br/>
              <label>Mobile No : 1111111111</label><br/><br/>
              <label>Date of Birth : 0:1:0000</label><br/>
          </Paper>
        </Grid>
        </Grid>
        </div>
        </Container>
        </>
        );
    
}

export default GetUserDetails