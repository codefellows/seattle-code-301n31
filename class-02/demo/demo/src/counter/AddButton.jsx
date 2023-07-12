import React from 'react';

class AddButton extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button onClick={this.props.handleClick}>Add a Number</button>
    );
  }
}

export default AddButton;
