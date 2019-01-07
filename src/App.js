import React, { Component } from 'react';
import './App.css';


import InputField from './Components/inputField';
import CheckBox from './Components/checkBox';
import ProgressBar from './Components/progressBar';
import InputDate from './Components/inputDate';
import InputRadio from './Components/inputRadio';
import InputFile from './Components/inputFile';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      titleValue: '',
      checked: null,
      sliderValue: null,
      date: new Date(),
      radioState: null
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleNewSliderValue = this.handleNewSliderValue.bind(this);
    this.handleNewDate = this.handleNewDate.bind(this);
    this.handleNewRadioState = this.handleNewRadioState.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      titleValue: event.target.value
    })    
  }

  handleCheckboxChange(event) {
    this.setState({
      checked: event.target.checked
    })
  }

  handleNewSliderValue(event) {
    this.setState({
      sliderValue: event
    })    
  }

  handleNewDate(event) {
    this.setState({
      date: event
    })
  }

  handleNewRadioState(event) {
    this.setState({
      radioState: event
    })
  }

  componentDidUpdate() {
    // console.log('state -' + this.state.titleValue);
    // console.log('props -' + this.props);
  }

  render() {
    
    return (
      <div className="App">
        <h3>{this.state.titleValue}</h3>
        <InputField
          handleInputChange={this.handleInputChange}
          inputUpdate={this.state.titleValue}
          checkedState={this.state.checked}
        />
        <CheckBox
          handleCheckboxChange={this.handleCheckboxChange}
          checkBoxUpdate={this.state.checked ? 'on' : 'off'}
        />

        <ProgressBar newValue={this.handleNewSliderValue} />

        <InputDate 
          checkedRadioState={this.state.radioState}
          newDate={this.handleNewDate}
        />

        <InputRadio
          radioState={this.handleNewRadioState}
          checkedRadioState={this.state.radioState}
        />

        <InputFile />

      </div>
    );
  }
}

export default App;