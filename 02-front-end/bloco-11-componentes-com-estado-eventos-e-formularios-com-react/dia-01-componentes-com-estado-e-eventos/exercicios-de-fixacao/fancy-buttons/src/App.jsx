import './App.css';
import { Component } from 'react';

const handleClickThree = () => {
  console.log('Clicou no 3!!!');
}
const handleClickTwo = () => {
  console.log('Clicou no 2!!!');
}

const handleClickOne = () => {
  console.log('Clicou no 1!!!');
}

class App extends Component {
  render(){
    return (
      <div className="App">
        <button onClick={handleClickOne}>Clique</button>
        <button onClick={handleClickTwo}>Clique</button>
        <button onClick={handleClickThree}>Clique</button>
      </div>
    );
  }
}

export default App;
