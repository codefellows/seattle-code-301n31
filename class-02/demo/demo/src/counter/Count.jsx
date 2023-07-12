import React from 'react';

class Count extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {this.props.currentCount}
      </>
    );
  }
}

export default Count;
