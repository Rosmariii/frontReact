import React from 'react';
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {
  console.log(searchValue);
  return (
    <input className= "TodoSearch" placeholder="Buscar tarea" 
    value= {searchValue}
    onChange= {(event) => { setSearchValue(event.target.value) }}
    />
  )
}

export { TodoSearch };