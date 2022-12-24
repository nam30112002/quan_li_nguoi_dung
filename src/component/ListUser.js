import React from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import InputForm from './InputForm';
import ChangeForm from './ChangeForm';

export default class ListUser extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            listOfUser : [],
        }
    }

    getListUser() {
        axios.get("http://localhost:8080/users")
            .then(res => {
                //console.log(res.data);
                this.setState({
                    listOfUser : res.data,
                })
            })
        /*let listItems = this.state.listOfUser.map((user) =>
            <li>{user.name}</li>
          );*/
         
    }

    showTable(){
        this.getListUser();
        return (
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell align="center">ID</TableCell>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">Email</TableCell>
                    <TableCell align="center">Phone</TableCell>
                    <TableCell align="center">Avatar</TableCell>
                    <TableCell align="center"></TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {this.state.listOfUser.map((row) => (
                    <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell align="center">{row.id}</TableCell>
                    <TableCell align="center">{row.name}</TableCell>
                    <TableCell align="center">{row.email}</TableCell>
                    <TableCell align="center">{row.phone}</TableCell>
                    <TableCell align="center">{row.avatar}</TableCell>
                    <TableCell align="right">
                    <Button variant="contained" component="label" color="success" size="small" 
                    onClick = {(e) => this.deleteRow(e)} id={row.id}>Xóa</Button>
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        )
    }

    deleteRow(e){
        e.preventDefault();
        console.log(e.currentTarget.id);
        let urlToCall = "http://localhost:8080/users/delete/" + e.currentTarget.id;
        console.log(urlToCall);
        axios.delete(urlToCall);
    }


    render() {
        return (
        <div>
            <InputForm/>
            <ChangeForm/>
            <p>ListUser</p>
            <p>{this.getListUser()}</p>
            <p>{this.showTable()}</p>
        </div>
        )
    }
}

