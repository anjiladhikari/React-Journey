
import { useState } from 'react';
import './App.css';

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

    <div className="App">

      <h1>React Todo APP</h1>

      <form className='input-wrapper'>
        <input
          type='text'
          name='todo'
          value={todo}
          placeholder='Create a new todo'
          onChange={(e) => { setTodo(e.target.value) }}
        />
        <button className='add-button' onClick={HandleAddTodo}>Add</button>

      </form>



      {todos?.length > 0 ? (

        <ul className='todo-list'>
          {todos.map((todo, index) => (

            <div className='todo'>
              <li key={index} > {todo}  </li>
              <button
                className='delete-button'
                onClick={() => HandleDeleteTodo(todo)}
              >
                Delete
              </button>
            </div>

          ))}
        </ul>
      ) : (
        <div className="empty">
          <p>No task found</p>
        </div>
        
      )}









    </div >
  );
}




