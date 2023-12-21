import './App.css';
import Header from './Header';
import Main from './Main'
import { useEffect, useReducer } from 'react';



const initialState = {
  questions: [],
  status: "loading"
}

function reducer(state, action) {

  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready"
      }

    case "dataFailed":
      return {
        ...state,
        status: "error"
      }

    default:
      throw new Error("Action unknown")

  }
}


function App() {


  const [state, dispatch] = useReducer(reducer, initialState);


  useEffect(function () {

    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatchEvent({ type: "dataReceived", payload: data }))
      .catch((err) => dispatchEvent({ type: "dataFailed" }));


  }, [])








  return (
    <div className="App">
      <Header />

      <Main>

        <p>1/15</p>
        <p>Question?</p>

      </Main>
    </div>
  );
}

export default App;
