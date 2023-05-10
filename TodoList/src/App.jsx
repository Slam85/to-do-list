import { useState } from 'react'
import './App.css'
import Task from './assets/Task'

function App() {

  const [newtask, setNewtask] = useState("");
  const [histask, setHistask] = useState([]);
  const addTask = () => {
    setHistask([...histask, newtask]);
    console.log(histask);
  }

  const renderMytask = () => {
    return histask.map((item,) => {
      return (
        <div>
          <li>{item} <button > faire</button> </li>
        </div>
      );
    }

    );
  }

  function handleInput(e) {
    setNewtask(e.target.value);
    console.log("new", newtask);

  }

  return (
    <>
      <h1>Liste de course</h1>
      <input type="text" placeholder="content" onChange={handleInput} />
      <button type='submit' onClick={addTask}  >Valider</button>
      <h4>Votre panier :</h4>
      <h5> {renderMytask()} </h5>
    </>
  )
}

export default App
