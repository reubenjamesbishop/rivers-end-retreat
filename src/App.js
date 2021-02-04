import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Bookings from './components/pages/Bookings';
import Gallery from './components/pages/Gallery';
import Weddings from './components/pages/Weddings';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/bookings" component={Bookings} />
          <Route path="/weddings" component={Weddings} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
