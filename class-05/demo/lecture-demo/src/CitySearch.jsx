import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import cityMap from './assets/map.png'
import restaurantData from './restaurantData.json'

class CitySearch extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            displayContent: false
        }
    }




  render(){
    return(
      <Container>
        <Form>
            <Form.Control type="text" placeholder="Enter city...."/> 
            <Button onClick={() => this.setState({displayContent: true})}>Explore!</Button>
        </Form>

        {/* WTF - WHAT? TRUE : FALSE */}
        {this.state.displayContent ? <p>Hello World</p> : null}
        {this.state.displayContent && <p>Hello World2.0</p>}
        {this.state.displayContent && <img src={cityMap} alt="mapOfSeattle" width={200}/>}

        {this.state.displayContent && 
            restaurantData.map((element,idx) => (
                <div key={idx}>
                    <p>{element.restaurant}</p>
                    <p>Servers {element.cuisines} food at {element.locality}</p>
                </div>
            ))
        }

      </Container>
    )
  }
}

export default CitySearch;