import logo from './logo.svg';
import './App.scss';
import Nav from './view/Nav';
import { useState, useEffect } from 'react';
import Todo from './view/Todo';
import Covid from './view/Covid';
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

  return (

    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {name}!
        </p>
        {/* <Todo todo={todo} title={'All todo'} handleClickDelete={handleClickDelete} />
        <input type='text' value={name} onChange={(event) => handleOnChange(event)} />
        <button type='button' onClick={() => handleClick()}>Click me</button> */}
        <Covid />
      </header>
    </div>
  );
}

export default App;
