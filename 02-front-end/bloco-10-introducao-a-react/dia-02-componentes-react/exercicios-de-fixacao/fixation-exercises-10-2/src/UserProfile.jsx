import React, { Component } from "react";

class UserProfile extends Component{
    render(){
        const {id, name, email, avatar} = this.props.user;
        return(
            <div>
                <h1>{name}</h1>
                <img src={avatar} alt={name} width="65px"/>
                <ul>
                    <li>ID: {id}</li>
                    <li>E-mail: {email}</li>
                </ul>
            </div>
        )
    }
}

export default UserProfile;
