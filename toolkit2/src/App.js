import "./App.css";
import {  useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useToDo } from "./redux";

function App() {
 
  const [inputValue, setInputValue] = useState("");

  const {value,posts, addToDo,deleteToDo,getPosts} = useToDo();

  useEffect(()=>{
    getPosts();
  },[])

  console.log(posts);

  const handleSubmit = (e) => {
    e.preventDefault();
    addToDo(inputValue);
  };

  console.log(inputValue);

  return (
    <div className="App">
      
      <form onSubmit={handleSubmit}>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Ekle</button>
      </form>
      {value?.map((todo, index) => {
        return (
          <div key={todo + index}>
            {todo}{" "}
            <button
              onClick={() => {
              deleteToDo(todo);
              }}
            >
              Sil
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
