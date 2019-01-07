import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class InputDate extends React.Component {
  constructor(props) {
    super(props);

    // create date offset option
    const initOffSet = 12
    const initDate = new Date().getTime() + 24 * 60 * 60 * 1000 * initOffSet

    // set local state, remove 'initDate' parameter for today
    this.state = {
      startDate: new Date(initDate)
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });

    this.liftDateValue(date);
  }

  liftDateValue(date) {
    this.props.newDate(date)
  }

  render() {
    
    return (
      <DatePicker        
        selected={this.state.startDate}
        onChange={this.handleChange}
        disabled = {
          this.props.checkedRadioState
        }
      />
    );
  }
}

// validate propTypes
InputDate.propTypes = {
  startDate: PropTypes.func,
}

export default InputDate;