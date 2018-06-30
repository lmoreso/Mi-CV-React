
import React, { Component } from 'react';
import CvCabecera from './CvCabecera';
import CvContenido from './CvContenido';


class App extends Component {

  render() {
    return (
      <div className="App">
        <div id="home" class="carousel">
          <CvCabecera/>
          <CvContenido/>
        </div>
      </div>
    );
  }
}

export default App;


