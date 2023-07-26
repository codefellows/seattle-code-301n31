import React from "react";
import Header from './Header.jsx'
import CitySearch from './CitySearch.jsx'
import Footer from './Footer.jsx'

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <CitySearch />
        <Footer />
      </>
    )
  }
}

export default App;