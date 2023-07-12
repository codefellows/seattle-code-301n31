import React from 'react';

import Count from './Count.jsx';
import AddButton from './AddButton.jsx';

// A class renders what the render method returns
// let App = new App( {} );
class App extends React.Component {

  constructor(props) {
    // Because it extends from React.Component, we have to call React.Component.constructor()
    super(props);
    this.state = {
      count: 0
    };
  }

  // this.setState() is the only way to change state
  // It changes the value
  // It does some internal stuff
  // Then it calls the render() method

  increment = () => {
    this.setState( { count: this.state.count+1 });
  };

  // <Count number={this.state.count} />
  // Count(this.state.count);

  render() {

    return (
      <>
        <div>
          Current Count Is: <Count currentCount={this.state.count} />
        </div>
        <div>
          <AddButton handleClick={this.increment} />
          <button onClick = { this.increment }>Add One</button>
        </div>
      </>
    );
  }

}

// Function render what they return;
// function App() {

//   return (
//     <>
//       <div>
//         I Came from a function
//       </div>
//     </>
//   );
// }

export default App;
