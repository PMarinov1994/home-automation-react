import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import LivingRoom from './pages/LivingRoom';
import BedRoom from './pages/BedRoom';
import './App.css';
import Outside from './pages/Outside';
import KidsRoom from './pages/KidsRoom';

import io from 'socket.io-client';

import { useDispatch } from 'react-redux';
import { initData, appendData } from './redux/actions';
import { AppDispatch } from './redux/store';

function App() {
  const dispatch = useDispatch<AppDispatch>();

  const onNewConnection = (data: string) => {
    console.log("Socket -> onNewConnection");

    const args = JSON.parse(data);
    console.log(args);
    dispatch(initData(args));
  }

  const onNewData = (data: string) => {
    console.log("Socket -> onNewData");

    const args = JSON.parse(data);
    console.log(args);
    dispatch(appendData(args));
  };

  useEffect(() => {
    console.log("Setting socket.");
    const socket = io('https://marinovi-home-varna.eu', {});

    socket.on("onNewConnection", (data: string) => onNewConnection(data));
    socket.on("onNewData", (data: string) => onNewData(data));
  }, [dispatch]);

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/outside' component={Outside} />
          <Route path='/living-room' component={LivingRoom} />
          <Route path='/bed-room' component={BedRoom} />
          <Route path='/bed-room-2' component={KidsRoom} />
        </Switch>
      </Router>
    </>
  );
}

export default App;


