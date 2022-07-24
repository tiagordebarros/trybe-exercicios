import { Component } from "react";
import Loading from "./Loading";
import UserCard from "./UserCard";

class RandomUsers extends Component{
    constructor(props) {
        super(props);
        this.state={
            randomUser: [],
            loading: true,
        }
    }

    componentDidMount = async () => {
    const url = 'https://api.randomuser.me/';
    const response = await fetch(url);
    const data = await response.json();
    const { results } = data;
    this.setState({
        randomUser: results,
        loading: false,
    });
    }

    shouldComponentUpdate = (_nextProps, nextState) => {
      if(nextState.randomUser[0].dob.age > 50){
        return false;
      } else {
        return true;
      }
    }

    currentPerson = (person) => {
        const { name: {first, last}, dob: { age }, email, picture: { large }  } = person;
        return {
            name: `${first} ${last}`,
            age,
            email,
            profilePicture: large,
        }
    }

    render(){
        const { randomUser, loading } = this.state;
        return(
            <div>
                { loading ? <Loading/> : 
                randomUser.map((user) => 
                <UserCard
                    key={user.login.uuid}
                    userData={this.currentPerson(user)}
                />
                ) }
            </div>
        );
    }
}

export default RandomUsers;
