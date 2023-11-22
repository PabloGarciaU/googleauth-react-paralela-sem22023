import logo from './logo.svg';
import './App.css';
import LogininButton from './components/login';
import LogoutButton from './components/logout';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';

const clientId = '32644728196-qs8nr857m20s5ornv5akv34v837gs6ge.apps.googleusercontent.com';

function App() {
  
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };

    gapi.load('client', start);
  });

  return (
    <div className="App">
      <LogininButton />
      <LogoutButton />
    </div>
  );
}

export default App;
