
import { useState } from 'react';
import './App.css';
import TodoInput from './TodoInput';
import TodoList from './TodoList';


export default function App() {

  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState("")

  const HandleAddTodo = (e) => {

    e.preventDefault();

    if (todo !== "") {
      setTodos([...todos, todo])
      setTodo("");
    }

  }


  const HandleDeleteTodo = (text) => {

    const newTodos = todos.filter((todo) => {

      return todo !== text
    })
    setTodos(newTodos)
  }

  return (


    <div className='App'>
      <h1>React Todo APP</h1>

      <TodoInput
        todo={todo}
        HandleAddTodo={HandleAddTodo}
        setTodo={setTodo}
      />

      <TodoList
        todos={todos}
        HandleDeleteTodo={HandleDeleteTodo}
      />

    </div >
  );
}




