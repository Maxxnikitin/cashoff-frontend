import React from 'react';
import './App.css';
import Main from '../Main/Main';
import api from '../../utils/Api';

function App() {

const [banks, setBanks] = React.useState([]);
  //Промисы с информацией о банках
  React.useEffect(() => {
    Promise.all([api.getAllBank()])
      .then(([banks]) => {
        setBanks(banks);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="app">
      <Main banks={banks} />
    </main>
  );
}

export default App;
