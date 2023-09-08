import logo from './logo.svg';
import './App.scss';
import Nav from './view/Nav';
import { useState } from 'react';
import Todo from './view/Todo';
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
    { id: 2, title: 'Doing homework', type: 'Hai' },
    { id: 3, title: 'Doing homework', type: 'Ehbu' },
    { id: 4, title: 'Doing homework', type: 'Ehbu' }
  ])
  return (

    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {name}!
        </p>
        <Todo todo={todo} title={'All todo'} />
        <Todo todo={todo.filter(item => item.type === 'Hai')} title={"Hai's todo"} />
        <input type='text' value={name} onChange={(event) => handleOnChange(event)} />
        <button type='button' onClick={() => handleClick()}>Click me</button>

      </header>
    </div>
  );
}

export default App;
