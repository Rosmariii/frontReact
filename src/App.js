import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';
import React from 'react';

const defaultTodos = [
  { text: 'Cortar cebolla', complited: true },
  { text: 'Tomar el curso de intro a React', complited: false },
  { text: 'Crear video', complited: false },
  { text: 'Tomar clases ingles', complited: true },
]

function App() {

  const [ todos, setTodos ] = React.useState(defaultTodos);
  const [ searchValue, setSearchValue ] = React.useState('');

  const allComplited = todos.every(todo => todo.complited);

  const complitedTodos = todos.filter(todo => !!todo.complited).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => { 
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText)
  });

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text)
    newTodos[todoIndex].complited = !newTodos[todoIndex].complited;
    setTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text)
    delete newTodos[todoIndex];
    setTodos(newTodos);
  }

  return (
    <React.Fragment>

      <TodoCounter complited={complitedTodos} total={totalTodos} allComplited= {allComplited}/>
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList >
        {searchedTodos.map(todo => ( 
        <TodoItem 
        key={todo.text} 
        text={todo.text}
        complited={todo.complited}
        onComplete= { () => completeTodo(todo.text)}
        onDelete= { () => deleteTodo(todo.text)}
        />
        ))}
      </TodoList>

      <CreateTodoButton />

    </React.Fragment>

  );
}

export default App;
