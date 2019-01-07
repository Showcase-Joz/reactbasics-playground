import React from 'react';

class InputField extends React.Component {
    
  render() {    
    return(
      <input
        type="text"
        autoFocus
        placeholder="Enter a heading"
        disabled={this.props.checkedState ? true : false}
        onChange={this.props.handleInputChange}
        value={this.props.inputUpdate}
      />
    )
  }
}

export default InputField;