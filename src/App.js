import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';
import Tilt from 'react-tilt';

//You must add your own API key here from Clarifai.


const particlesOptions = {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
 

  render() {
    return (
      <div className="App">
         <Particles className='particles'
          params={particlesOptions}
        />
        <Navigation  />
        <Logo /> 
        <ImageLinkForm/>
        {/*  <Rank />
        
        <FaceRecognition />*/}
      </div>
          
    );
  }
}

export default App;
