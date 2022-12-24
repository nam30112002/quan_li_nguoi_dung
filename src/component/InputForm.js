import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import TableRow from '@mui/material/TableRow';
import { TableCell } from '@mui/material';
import axios from 'axios';

export default class InputForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputRow : {
                
            },
            isChanged : 0
        }
    }

    createRow(e){
        e.preventDefault();
        console.log("da an");
        console.log(this.state);
        if (this.state.inputRow.isChanged === 0) return;
        axios.post("http://localhost:8080/users/create",this.state.inputRow);
        // eslint-disable-next-line
        this.state.inputRow.isChanged = 0;
        e.target.reset();
    }

    changeName(e){
        let changedName = e.target.value;
        // eslint-disable-next-line
        this.state.inputRow.name = changedName;
        // eslint-disable-next-line
        this.state.inputRow.isChanged = 1;
    }

    changeEmail(e){
        // eslint-disable-next-line
        this.state.inputRow.email = e.target.value;
        // eslint-disable-next-line
        this.state.inputRow.isChanged = 1;
    }
    changePhone(e){
        // eslint-disable-next-line
        this.state.inputRow.phone = e.target.value;
        // eslint-disable-next-line
        this.state.inputRow.isChanged = 1;
    }
    changeAvatar(e){
        // eslint-disable-next-line
        this.state.inputRow.avatar = e.target.value;
        // eslint-disable-next-line
        this.state.inputRow.isChanged = 1;
    }
    changePassword(e){
        // eslint-disable-next-line
        this.state.inputRow.password = e.target.value;
    }

    render() {
        return (
        <div>
            <p>InputForm</p>
            <form>
            <TableRow>
                <TableCell><TextField  label="Name" variant="outlined" onChange={(e) => this.changeName(e)} /></TableCell>
                <TableCell><TextField  label="Email" variant="outlined" onChange={(e) => this.changeEmail(e)} /></TableCell>
                <TableCell><TextField  label="Phone" variant="outlined" onChange={(e) => this.changePhone(e)} /></TableCell>
                <TableCell><TextField  label="Avatar" variant="outlined" onChange={(e) => this.changeAvatar(e)} /></TableCell>
                <TableCell><TextField  label="Password" variant="outlined" onChange={(e) => this.changePassword(e)} 
                type="password" defaultValue="" /></TableCell>
                <TableCell><Button variant="contained" component="label" color="success" size="medium" 
                    onClick = {(e) => this.createRow(e)} type="submit" >Thêm</Button></TableCell>
                
                
                
            </TableRow>
            </form>
        </div>
        )
    }
}
