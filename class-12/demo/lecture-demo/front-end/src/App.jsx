import axios from "axios";
import React from "react";
import AddForm from "./AddForm";
import { Button, Card, Col, Row } from "react-bootstrap";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: []
    }
  }

  componentDidMount() { 
    axios.get(`${import.meta.env.VITE_SERVER}/dogs`)
      .then(res => this.setState({ dogs: res.data }))
  }

  postDog = (newDog) => {
    const url = `${import.meta.env.VITE_SERVER}/dogs`
    axios.post(url, newDog)
      .then(res => this.setState({ dogs: [...this.state.dogs, res.data] }))
  }

  deleteDog = (id) => {
    const url = `${import.meta.env.VITE_SERVER}/dogs/${id}`
    axios.delete(url)
    const updatedDogs = this.state.dogs.filter(dog => dog._id !== id);
    this.setState({dogs: updatedDogs});
  }

  render() {
    return (

      <>
        <AddForm postDog={this.postDog} />
        <Row>
          {this.state.dogs.length > 0 && this.state.dogs.map((dog) => (
            <Col key={dog._id}>
              <Card  style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>{dog.name}</Card.Title>
                  <Card.Text>Color: {dog.color}</Card.Text>
                  <Card.Text>Location: {dog.location}</Card.Text>
                  <Button variant="danger" onClick={() => this.deleteDog(dog._id)}>Delete</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </>
    )
  }
}

export default App;