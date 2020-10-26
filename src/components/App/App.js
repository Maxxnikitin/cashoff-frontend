import React from 'react';
import './App.css';
import Main from '../Main/Main';
import api from '../../utils/Api';
import Navigation from '../Navigation/Navifation';

function App() {

  return (
    <main className="app">
      <Main>
        <Navigation />
      </Main>
    </main>
  );
}

export default App;
