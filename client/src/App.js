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
      <header>
        <h1>Computación Paralela y Distribuida 2 Sem 2023</h1>
        <h2>Proyecto REST</h2>
        <h3>Integrantes:- Pablo Garcia Urzua - Victor Toledo Cerna - Fabian Rojas Gamboa</h3>
        <h4>Enlace a la API: http://127.0.0.1:5000</h4>
      </header>
      <LogininButton />
      <LogoutButton />
    </div>
  );
}

export default App;
