import React from 'react';

import Gallery from './Gallery.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import pictures from './data.json';

class App extends React.Component {


  render() {
    return (
      <>
        <Header title="Gallery of Horns" />
        <Gallery pictures={pictures} />
        <Footer />
      </>
    );
  }
}

export default App;
