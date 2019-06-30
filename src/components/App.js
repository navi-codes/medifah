//dependencies import
import React, { Component } from 'react';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

//components import
import fire from '../config/Fire';
import Test from './Test';
import Map from './Map/Map';
import Medifah from './Chatbot/Medifah';
import MediFaH from './Chatbot/MediFaH';
import Login from './Login/Login';
import DoctorSignup from './DoctorSignup/DoctorSignup';
import Navbar from './Navbar/Navbar';
import Navigator from './Map/Navigator';

class App extends Component {
  constructor() {
    super();
    this.state = ({
      user: null
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }
  render() {
    return (
      <div>
        {this.state.user ?  ( <Navbar />) : null}
        {this.state.user ?
          <BrowserRouter>
            <Route exact path="/medifah" component={Medifah} />
            <Route exact path="/voice" component={MediFaH} />
            <Route exact path="/map" component={Map} />

            <Route exact path="/navigator" component={Navigator} />
            <Route exact path="/signup" component={DoctorSignup} />

          </BrowserRouter>:<Login />}

      </div>
    );
  }
}

 export default App;
