import React from 'react';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sliderValue: 0
    };

    this.handleSlider = this.handleSlider.bind(this);
  }

  handleSlider(event) {
    const slider = document.getElementById('myRange');
    const output = document.getElementById('visualRef');
    output.innerHTML = slider.value; // Display the default slider value
    const newSliderValue = parseInt(event.target.value);
    this.updateState(newSliderValue);
    
    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function () {
      output.innerHTML = this.value;
      // console.log(output.innerHTML);
      
    };

    this.liftSliderValue(newSliderValue);
    return newSliderValue;
  }

  updateState(newSliderValue) {
    this.setState({
        sliderValue: newSliderValue
    });
  }

  liftSliderValue(newSliderValue){
    this.props.newValue(newSliderValue);
  }

  componentDidMount() {
    if (this.state.sliderValue === 0) {
      document.getElementById('visualRef').innerHTML = 0;
    }
  }

  componentDidUpdate() {
    // console.log(this.slider.value);
    
    
  }
  render() {
    return (
      <div>
        <input type="range" min="1" max="100" className="slider" id="myRange" onChange={this.handleSlider} />
        <p><span id="visualRef"></span></p>
      </div>
    );
  }
}

export default ProgressBar;