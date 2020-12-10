import './App.css';
import React from 'react';

//formas  de criar componete react


function AppFuncional() {
  return (
    <h1>My name is Renan moura</h1>
  );
}

class App extends React.Component {

  state = {
    name: 'Renan moura'
  }

  changeName = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  createComboBox = () => {

    const options = ["one", "two", "three", "four"];
    const comboBox = options.map(option => <option>{option}</option>);

    return (
      <select>
        {comboBox}
      </select>
    )
  }
  
  componentDidMount(){
    console.log("didMount")
  }


  render() {   
     console.log("render...")

    const MyComboBox = () => this.createComboBox();
    return (
      <>
        <input type="text" value={this.state.nome} onChange={this.changeName} />
        <h1>What is your name?{this.state.name}</h1>
        <h2>{this.props.name}</h2>
        
        <MyComboBox />
        {this.createComboBox()}
      </>
    )
  }
}

export default App;
