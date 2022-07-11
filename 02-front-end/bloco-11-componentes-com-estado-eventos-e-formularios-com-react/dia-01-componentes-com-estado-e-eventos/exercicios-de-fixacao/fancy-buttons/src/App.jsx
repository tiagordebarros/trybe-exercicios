import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)
    console.log(this);
    this.handleClickOne = this.handleClickOne.bind(this)
    this.handleClickTwo = this.handleClickTwo.bind(this)
    this.handleClickThree = this.handleClickThree.bind(this)

    this.state={
      clicksCounterOne: 0,
      clicksCounterTwo: 0,
      clicksCounterThree: 0,
    }
  }

  handleClickThree(){
    this.setState(({clicksCounterThree}, _props) => ({
      clicksCounterThree: clicksCounterThree + 3,
    })
  )}

  handleClickTwo(){
    this.setState(({clicksCounterTwo}, _props) => ({
      clicksCounterTwo: clicksCounterTwo + 2,
    })
  )}

  handleClickOne(){
    this.setState(({clicksCounterOne}, _props) => ({
      clicksCounterOne: clicksCounterOne + 1,
    })
  )}
  render(){
    console.log(this);
    return (
      <div className="App">
        <button onClick={this.handleClickOne}>{this.state.clicksCounterOne}</button>
        <button onClick={this.handleClickTwo}>{this.state.clicksCounterTwo}</button>
        <button onClick={this.handleClickThree}>{this.state.clicksCounterThree}</button>
      </div>
    );
  }
}

export default App;
