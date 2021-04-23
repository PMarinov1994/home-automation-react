import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import LivingRoom from './pages/LivingRoom.jsx';
import BedRoom from './pages/BedRoom.jsx';
import './App.css';
import Outside from './pages/Outside.jsx';
import KidsRoom from './pages/KidsRoom.jsx';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/living-room' component={LivingRoom} />
          <Route path='/bed-room' component={BedRoom} />
          <Route path='/kids-room' component={KidsRoom} />
          <Route path='/outside' component={Outside} />
        </Switch>
      </Router>
    </>
  );
}

export default App;


