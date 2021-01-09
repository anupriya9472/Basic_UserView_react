import React, { Component } from 'react';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';




class GetUsers extends Component{

    constructor(props){
        super(props) 
        this.state={
            data:[],
            errorMsg:''
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
            console.log(response)
            this.setState({data: response.data})
        })
        .catch(error =>{
            console.log(error)
            this.setState({errorMsg:'No data found'})
        })
    }

    render(){

        const {data , errorMsg} = this.state


        return(
            <>
            <Container maxWidth="md" style={{backgroundColor:'#cfe8fc'}}>
            <h1>Users</h1>
            <TableContainer component={Paper}>
      <Table style={{minWidth: 650}} aria-label="caption table">
        <caption>A basic table example with a caption</caption>
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="right">Update</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
                data.length ?
                data.map(post =>
                    <TableRow key={post.id}>
                        <TableCell component="th" scope="row">
                            {post.id}
                        </TableCell>
                        <TableCell align="left">
                        <Button variant="contained">{post.name}</Button>
                        </TableCell>
                        <TableCell align="right">    
                          <Button variant="contained" color="primary">
                            Update
                            </Button>
                        </TableCell>
                        <TableCell align="right">
                        <Button variant="contained" color="secondary">
                            Delete
                        </Button>
                        </TableCell>
                    </TableRow>
                    ) :
                null
            }
        
        </TableBody> 
      </Table>
    </TableContainer>
    </Container>
            </>
        )
    }
}

export default GetUsers