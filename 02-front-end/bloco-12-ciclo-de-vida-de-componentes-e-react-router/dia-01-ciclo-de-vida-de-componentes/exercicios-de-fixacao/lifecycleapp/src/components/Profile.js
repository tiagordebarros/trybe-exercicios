import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      api: '',
    };

    this.changeDataJson = this.changeDataJson.bind(this);
  }

  async componentDidMount() {
    const myUser = 'tiagordebarros';
    const url = `https://api.github.com/users/${myUser}`;
    try {
        const response = await fetch(url);
        console.log(response);
        const data = await response.json();
        console.log(data);
        this.setState({
            api: data,
        })
    } catch (error) {
        console.log(error);
    }
  }

  componentWillUnmount() {
    alert('Você ocultou seu perfil');
  }

  changeDataJson(dataJson) {
    this.setState({ api: dataJson });
  }

  render() {
    const { api: { name, email, bio } = '', api } = this.state;

    if (!api) return <p>Loading...</p>;

    const card = (
      <div className="d-flex h-100 flex-column justify-content-center align-items-center">
        <h1>{ name }</h1>
        <span>{ email }</span>
        <img className="myPicture" src={ api.avatar_url } alt="Avatar" />
        <p>{ bio }</p>
      </div>
    );

    return (
      <div className="git d-flex flex-column justify-content-center align-items-center">
        { card }
      </div>
    );
  }
}

export default Profile;
