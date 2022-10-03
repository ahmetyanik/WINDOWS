import "./App.css";
import { useEffect, useState } from "react";
import { useToDo } from "./redux";

function App() {
  const [curValue, setCurValue] = useState("");
  
  const { value,posts, addToDo, deleteToDo, getPosts } = useToDo();



  const handleSubmit = (e) => {
    e.preventDefault();
    addToDo(curValue);
    setCurValue("");
  };

  useEffect(()=>{
    getPosts()
  },[])

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input value={curValue} onChange={(e) => setCurValue(e.target.value)} />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {value?.map((todo, i) => (
          <li key={`${todo}-{i}`}>
            {todo} <button onClick={() => deleteToDo(todo)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
