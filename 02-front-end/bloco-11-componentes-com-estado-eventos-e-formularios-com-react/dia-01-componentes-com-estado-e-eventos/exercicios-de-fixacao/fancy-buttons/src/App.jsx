import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)
    console.log(this);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    console.log(this);
    console.log('Clicou');
  }
  render(){
    console.log(this);
    return (
      <div className="App">
        <button onClick={this.handleClick}>Clique</button>
      </div>
    );
  }
}

export default App;
