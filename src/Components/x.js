import React from 'react';


class X extends React.Component {

  render() {
    console.log(this.props);
    
    return(
      <button
        className={this.props.visibleState == null ? 'clear-hidden' : ''}
        onClick={this.props.handleClearImage}
      >X</button>
    );
  }
}

export default X;