import { Component } from "react";

class UserCard extends Component{
    render(){
        const { userData } = this.props;
        const { name, age, email, profilePicture } = userData;
        return(
            <div>
                <img src={profilePicture} alt={name} />
                <p>{name}</p>
                <p>{age}</p>
                <p>{email}</p>
            </div>
        );
    }
}

export default UserCard;
