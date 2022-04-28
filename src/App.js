import { useState } from 'react';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        Magenta Finance.
      </header>
    </div>
  );
}

export default App;
