import React from 'react';
import axios from 'axios';

export default class ListUser extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            listOfUser : [],
        }
    }

    getListUser(){
        /*const header = {
            'Access-Control-Allow-Origin': '*'
        }*/

        axios.get("https://localhost:8080/users")
        .then(res => {
                // console.log(res);
                // let data = res.data;
                // this.setState(
                //     {
                //         listOfUser : data,
                //     }
                // )
            }
        )
        // return this.state.listOfUser
    }


    render() {
        return (
        <div>
            <p>ListUser</p>
            <p>{this.getListUser()}</p>
        </div>
        )
    }
}

