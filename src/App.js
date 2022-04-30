import {} from 'dotenv/config'
import { useState } from 'react';
import OpenLogin from "@toruslabs/openlogin";
import './App.css';
import Login from './screens/Login';
import Landing from './screens/Landing';

function App() {
  console.log(process.env)
  const [loggedIn, setLoggedIn] = useState(false);
  const openlogin = new OpenLogin({ clientId: process.env.REACT_APP_OL_UID, network: "mainnet"});
  if (loggedIn) {
    return (
      <Landing setLoggedIn={setLoggedIn} openlogin={openlogin} />
    )
  } else {
    return (
      <Login setLoggedIn={setLoggedIn} openlogin={openlogin} />
    )
  }
}

export default App;
