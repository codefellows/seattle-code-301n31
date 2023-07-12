import React from 'react';

class Footer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pets: [ 'Rosie', 'Rocky', 'Thor' ]
    };
  }

  shuffle = () => {
    let pets = ['Rosie', 'Venus', 'Thor'];
    this.setState({pets});
  };

  render() {
    return (
      <>
        <h2>Brought to you by ...</h2>
        <ul onClick={this.shuffle}>
          {
            this.state.pets.map( pet =>
              <li key={pet}>{pet}</li>
            )
          }
        </ul>
      </>
    );
  }

}

export default Footer;
