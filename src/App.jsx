import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import LivingRoom from './pages/LivingRoom.jsx';
import BedRoom from './pages/BedRoom.jsx';
import './App.css';
import Outside from './pages/Outside.jsx';
import KidsRoom from './pages/KidsRoom.jsx';

import io from 'socket.io-client';

import { useDispatch } from 'react-redux';
import { initData, appendData } from './redux/actions.jsx';

function App() {
  const [socket, setSocket] = useState(null);
  const dispatch = useDispatch();

  const onNewConnection = (data) => {
    console.log("Socket -> onNewConnection");
    const args = JSON.parse(data);
    console.log(args);
    dispatch(initData(args));
  }

  const onNewData = (data) => {
    console.log("Socket -> onNewData");
    const args = JSON.parse(data);
    console.log(args);
    dispatch(appendData(args));
  };

  useEffect(() => {
    console.log("Setting socket.");
    const socket = io('http://192.168.200.145:6969', {});

    socket.on("onNewConnection", (data) => onNewConnection(data));
    socket.on("onNewData", (data) => onNewData(data));

    setSocket(socket);
  }, [dispatch]);

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


