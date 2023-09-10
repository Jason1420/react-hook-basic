import logo from './logo.svg';
import './App.scss';
import Nav from './view/Nav';
import { useState, useEffect } from 'react';
import Todo from './view/Todo';
import Data from './view/Data';
import { Countdown, NewCountdown } from './view/Countdown';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom/cjs/react-router-dom.min';




const App = () => {



  const handleClick = () => {
    if (!name) {
      alert("Missing name");
      return;
    }
    let newTodo = { id: Math.floor(Math.random() * 1001), title: name, type: 'Hai' }
    setTodo([...todo, newTodo])
    setName('')
  }
  const handleOnChange = (event) => {
    setName(event.target.value)
  }
  let [name, setName] = useState('Hai');
  let [todo, setTodo] = useState([
    { id: 1, title: 'Playing game', type: 'Hai' },
    { id: 2, title: 'Doing homework1', type: 'Hai' },
    { id: 3, title: 'Doing homework2', type: 'Ehbu' },
    { id: 4, title: 'Doing homework3', type: 'Ehbu' }
  ])
  const handleClickDelete = (id) => {
    let todoNew = todo.filter(item => item.id !== id)
    setTodo(todoNew)
  }
  useEffect(() => {
    console.log('useEffect')
  }, [name]);
  const onTimeUp = () => {

  }
  return (
    <Router>
      <div className="App">
        <Nav />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <Countdown onTimeUp={onTimeUp} />
          <span>-------------</span>
          <NewCountdown onTimeUp={onTimeUp} />
          <p>
            Hello {name}!
          </p>
          <Todo todo={todo} title={'All todo'} handleClickDelete={handleClickDelete} />
          <input type='text' value={name} onChange={(event) => handleOnChange(event)} />
          <button type='button' onClick={() => handleClick()}>Click me</button>
          <Data /> */}


          <Switch>
            <Route exact path="/">
              <div>Hello world from Homepage</div>
            </Route>
            <Route exact path="/timer">
              <Countdown onTimeUp={onTimeUp} />
              <span>-------------</span>
              <NewCountdown onTimeUp={onTimeUp} />
            </Route>
            <Route path="/todo">
              <Todo todo={todo} title={'All todo'} handleClickDelete={handleClickDelete} />
              <input type='text' value={name} onChange={(event) => handleOnChange(event)} />
              <button type='button' onClick={() => handleClick()}>Click me</button>
            </Route>
            <Route path="/data">
              <Data />
            </Route>

          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
