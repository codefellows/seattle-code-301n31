import axios from "axios";
import React from "react";
import { Container, Form, Button } from "react-bootstrap";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchQuery: '',
      photoData: []
    }
  }

  handleSearchPhoto = async (e) => {
    e.preventDefault();
    const url = `${import.meta.env.VITE_SERVER}/photos?searchQuery=${this.state.searchQuery}`;
    const response = await axios.get(url);
    // console.log(response.data);
    this.setState({photoData: response.data});
  }

  render(){
    return (
      <>
        <h1>Unsplash API</h1>
        <Container>
          <Form onSubmit={this.handleSearchPhoto}>
            <Form.Group controlId="formUnsplash">
              <Form.Label>Search any image from the unsplash Database</Form.Label>
              <Form.Control type="text" onChange={(e) => this.setState({searchQuery: e.target.value})} />
            </Form.Group>
            <Button type="submit">Search</Button>
          </Form>
        </Container>

        {this.state.photoData.length > 0 && 
          this.state.photoData.map((photo,idx) => (
            <img key={idx} src={photo.imgURL} alt={photo.author} width={250}/>
          ))
        }

      </>
    )
  }
}

export default App