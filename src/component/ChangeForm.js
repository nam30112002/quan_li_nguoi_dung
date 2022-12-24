import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import TableRow from '@mui/material/TableRow';
import { TableCell } from '@mui/material';
import axios from 'axios';

export default class ChangeForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            name : "",
            phone : "",
            avatar : "",
            password : "",
        }
    }

    changeRow(e){
        e.preventDefault();
        let url = "http://localhost:8080/users/update/" + this.state.email;
        let body = {
            name : this.state.name,
            phone : this.state.phone,
            avatar : this.state.avatar,
            password : this.state.password,
        }
        axios.put(url,body);
    }

    changeName(e){
        // eslint-disable-next-line
        this.state.name = e.target.value;
    }
    changePhone(e){
        // eslint-disable-next-line
        this.state.phone = e.target.value;
    }
    changeAvatar(e){
        // eslint-disable-next-line
        this.state.avatar = e.target.value;
    }
    changePassword(e){
        // eslint-disable-next-line
        this.state.password = e.target.value;
    }
    changeEmail(e){
        // eslint-disable-next-line
        this.state.email = e.target.value;
    }

    render() {
        return (
            <div>
                <p>ChangeForm</p>
                <p>Nhập email của tài khoản bạn muốn đổi: </p>
                <form>
                    <TableRow>
                        <TableCell><TextField  label="Email của bạn" variant="outlined" 
                            onChange={(e) => this.changeEmail(e)} /></TableCell>
                    </TableRow>
                </form>
                <form>
                    <p>Nhập thông tin mới: </p>
                    <TableRow>
                        <TableCell><TextField  label="Name" variant="outlined" onChange={(e) => this.changeName(e)} /></TableCell>
                        <TableCell><TextField  label="Phone" variant="outlined" onChange={(e) => this.changePhone(e)} /></TableCell>
                        <TableCell><TextField  label="Avatar" variant="outlined" onChange={(e) => this.changeAvatar(e)} /></TableCell>
                        <TableCell><TextField  label="Password" variant="outlined" onChange={(e) => this.changePassword(e)} 
                        type="password" defaultValue="" /></TableCell>
                        <TableCell><Button variant="contained" component="label" color="success" size="medium" 
                            onClick = {(e) => this.changeRow(e)} type="submit" >Đổi</Button></TableCell>
                            
                    </TableRow>
                </form>
            </div>
        )
    }
}
