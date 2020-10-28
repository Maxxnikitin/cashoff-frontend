import React from 'react';
import './Main.css';
import Table from '../Table/Table';
import AddForm from '../AddForm/AddForm';
import { Route, Switch } from 'react-router-dom';
import api from '../../utils/Api';

function Main(props) {
  const [banks, setBanks] = React.useState([]);
  // создаём втрой массив с банками на основе предыдущего, чтобы рендерить его. Это нужно для того, чтобы при фильтрации перезаписывать не основной массив, а этот, тогда, когда пользователь будет очищать строку поиска, список отфильтрованных банков будет снова расширяться
  const [banksForRender, setBanksForRender] = React.useState([]);
  const [searchByBik, setSearchByBik] = React.useState('');
  const [searchByName, setSearchByName] = React.useState('');

  React.useEffect(() => {
    Promise.all([api.getAllBanks()])
      .then(([banks]) => {
        setBanks(banks);
        // записываем во второй массив данные из первого
        setBanksForRender(banks);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleAddBankSubmit(date) {
    api.addNewBank(date.bik, date.name, date.corrAccount, date.address)
      .then((newBank) => {
        setBanksForRender([...banksForRender, newBank]);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleUpdateBankSubmit(date) {
    api.setBankInfo(date.bik, date.name, date.corrAccount, date.address)
    .then((newBank) => {
      const update = banks.map((b) => (b._id === newBank._id) ? newBank : b);
      setBanksForRender(update);
    })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleSearchByBik(e) {
    setSearchByBik(e.target.value);
    setBanksForRender(banks.filter(x => x.bik.includes(searchByBik)));
  }

  function handleSearchByName(e) {
    setSearchByName(e.target.value);
    setBanksForRender(banks.filter(x => x.name.toLowerCase().includes(searchByName.toLowerCase())));
  }

  return (
    <>
      <section className='page'>
        <h1 className='page__title'>Банки России</h1>
        {props.children}
        <Switch>
          <Route exact path='/'>
            <Table onChangeBik={handleSearchByBik}
            onChangeName={handleSearchByName} banks={banksForRender} />
          </Route>
          <Route path='/add'>
            <AddForm title='Введите данные для добавления нового банка' onUpdateBank={handleAddBankSubmit} buttonText='Добавить' />
            <AddForm title='Введите новые данные банка для редактирования' onUpdateBank={handleUpdateBankSubmit} buttonText='Сохранить' />
          </Route>
        </Switch>
      </section>
  </>
  )
}

export default Main;
