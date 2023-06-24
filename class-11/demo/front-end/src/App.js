import React from 'react';
import axios from 'axios';
import Cats from './Cats';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

const SERVER = process.env.REACT_APP_SERVER;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: [],
    }
  }

  componentDidMount() {
    this.fetchCats();
  }

  async fetchCats(location = null) {
    let apiUrl = `${SERVER}/cats`;

    if (location) {
      apiUrl += `?location=${location}`;
    }

    try {
      const response = await axios.get(apiUrl);
      this.setState({ cats: response.data });

    } catch (error) {
      console.log(error);
    }
  }

  handleLocationSubmit = (event) => {
    event.preventDefault();
    const location = event.target.location.value;
    console.log({ location });
    this.fetchCats(location);
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <nav>
            <h1>World of Cats</h1>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
          <Routes>
            <Route exact path="/" element={
              <div>
                <Cats cats={this.state.cats} />
                <h2>Filter by location</h2>
                <form onSubmit={this.handleLocationSubmit}>
                  <input name="location" />
                  <button>ok</button>
                </form>
              </div>
            }/>
            <Route path="/about" element={
              <h1>About Page Here</h1>
            }/>
          </Routes>
        </BrowserRouter>
      </>
    )
  }
}

export default App;
