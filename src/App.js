import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
//import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import Home from './Home';
import Service from './Services';
import About from './About';
import Contact from './Contact';
import Default from './Default';
import Navbar from './Navbar';
import Footer from './Footer';
import {Switch, Route, Redirect} from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/service' component={Service} /> 
      <Route path='/contact' component={Contact} />
      <Route path='/error' component={Default} />
      <Redirect to ='/'  />
    </Switch>
    <Footer />
    </>
  );
}

export default App;
