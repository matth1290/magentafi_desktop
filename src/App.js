import {} from 'dotenv/config'
import { useState } from 'react';
import OpenLogin from "@toruslabs/openlogin";
import './App.css';
import Login from './screens/Login';
import Landing from './screens/Landing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Payroll from './screens/Payroll';
import Sandbox from './screens/Sandbox';
import Funds from './screens/DisplayFunds/Funds';

function App() {
  const [openlogin, setOpenLogin] = useState(new OpenLogin({ clientId: process.env.REACT_APP_OL_UID, network: "mainnet"}));
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  const [key, setKey] = useState(null);
  if (loggedIn) {
    return (
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Landing setLoggedIn={setLoggedIn} openlogin={openlogin} setToken={setToken} token={token} setKey={setKey} />} />
        <Route exact path='/payroll' element={<Payroll />} />
        {/* <Route exact path='/sandbox' element={<Sandbox keyprop={key} />} /> */}
        <Route exact path='/funds' element={<Funds privKey={openlogin.privKey}/>} />
      </Routes>
      </BrowserRouter>
      
      // <Payroll />
    )
  } else {
    return (
      <div>
        <Login setLoggedIn={setLoggedIn} openlogin={openlogin} />
      </div>
    )
  }
}

export default App;
