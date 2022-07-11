import './App.css';
import { Component } from 'react';

const handleClick = () => {
  console.log('Clicou!!!');
}

class App extends Component {
  render(){
    return (
      <div className="App">
        <button onClick={handleClick}>Clique</button>
      </div>
    );
  }
}

export default App;
