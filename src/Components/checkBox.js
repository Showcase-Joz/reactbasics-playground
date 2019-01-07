import React from 'react';

class CheckBox extends React.Component {
  render() {  
    
    return (
      <label htmlFor="checkbox1" className="checkbox1">
        disable input
        <input type="checkbox" name="" id="checkbox1" onClick={this.props.handleCheckboxChange} />
        <h4>{this.props.checkBoxUpdate}</h4>
      </label>
    );
  }
}

export default CheckBox;