import React from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      shoppingList: []
    }
  }

  // create method showList to make request
  showList = async () => {
    const res = await axios.get(`${import.meta.env.VITE_SERVER}/shoppingList?type=supplies`);
    console.log(res)
    this.setState({shoppingList: res.data})
  }

  render(){
    return(
    <>
      <p>Hello World!</p>
      <Button onClick={this.showList}>Show me my Lists</Button>

      {this.state.shoppingList.length > 0 && 
        this.state.shoppingList.map(item => 
          <>
            <p>{item.name}</p>
            <p>{item.description}</p>
          </>
          )
      }
    </>
    )

  }
}

export default App;