import React from "react";
import Student from './Student'

class App extends React.Component {
  render() {
    return (
      <>
        <p>Hello World!</p>
        <Student
          name={'Josh'}
          fruit={'Blueberries'}
        />
        
        <Student name={'Kyle'} />
        <Student name={'Peter'} />
        <Student name={'Roger'} />

      </>
    )
  }
}

export default App;