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
const app = new Clarifai.App({
  apiKey: '1ab8b4d945174635ab6d419d5680af6a'
 });

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }
onInputChange =  (event) =>{
  console.log(event.target.value);
}
onBtnChange = (event) => {
  console.log('click');
  app.models.predict(app.apiKey, "https://samples.clarifai.com/face-det.jpg").then(

      function(response) {
          console.log(response);
      },

      function(err) {
        // there was an error
      }

  );
}
  render() {
    return (
      <div className="App">
         <Particles className='particles'
          params={particlesOptions}
        />
        <Navigation  />
        <Logo /> 
        <ImageLinkForm onInputChange={this.onInputChange}
                       onBtnChange={this.onBtnChange}/>
        {/*  <Rank />
        
        <FaceRecognition />*/}
      </div>
          
    );
  }
}

export default App;
