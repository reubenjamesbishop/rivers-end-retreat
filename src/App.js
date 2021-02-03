import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Bookings from './components/pages/Bookings';
import SignUp from './components/pages/SignUp';
import Gallery from './components/pages/Gallery';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/bookings" component={Bookings} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
