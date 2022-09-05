import React, { useState } from "react";
import TodoList from './components/TodoList';
import useArray from './hooks/useArray';
import './App.css';

function App() {
  const [ task, setTask ] = useState('');
  const [todos, addTodos] = useArray([]);

  const addNewTask = () => {
    addTodos(task);
    setTask('');
  }

  return (
    <>
    <h1>Criar nova tarefa: </h1>
      <form method="get">
        <input 
          type="text"
          name="task"
          id="task"
          value={ task }
          onChange={ ({ target: { value } }) => setTask([value]) }
          autoFocus={ true }
        />
      <button type="button" onClick={ () => addNewTask() }>Adicionar</button>
      </form>
      <TodoList 
        tasks={ todos }
      />
    </>
  );
}

export default App;
