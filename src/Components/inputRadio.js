import React from 'react';

class InputRadio extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      radio: false
    }
    this.setDisabled = this.setDisabled.bind(this);
  }
   
  setDisabled(event) {

    const radioState = event.target.value;
    let newRadioState = null
    if (radioState === 'disabled') {
      this.setState({
        radio: true
      })
    } else {
      this.setState({
        radio: false
      })
    }
    newRadioState = this.state.radio
    this.handleNewRadioState(!newRadioState);
  }

  handleNewRadioState(event) {
    this.props.radioState(event);
  }

  render() {
    return (
      <div onChange={this.setDisabled}>
        <label htmlFor="radio-abled" className="radioselect">
          <input type="radio" id="radio-abled" name="disabled" value="active" defaultChecked />active
        </label>
        <label htmlFor="radio-disabled" className="radioselect">
          <input type="radio" id="radio-disabled" name="disabled" value="disabled" />disabled
        </label>
      </div>
    );
  }
}

export default InputRadio;