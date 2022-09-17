import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addToDo, deleteToDo, artir } from "./redux/reducers/todoReducer";

function App() {
  const { value } = useSelector((state) => state.todo);
  const { counter } = useSelector((state) => state.todo);
  const [curValue, setCurValue] = useState("");
  const dispatch = useDispatch();

  console.log(value);

  console.log(counter);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addToDo(curValue));
    setCurValue("");
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input value={curValue} onChange={(e) => setCurValue(e.target.value)} />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {value?.map((todo, i) => (
          <li key={`${todo}-{i}`}>
            {todo}{" "}
            <button onClick={() => dispatch(deleteToDo(todo))}>Delete</button>
            <button onClick={() => dispatch(artir(todo))}>Artir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
