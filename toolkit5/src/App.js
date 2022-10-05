import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { isimEkle, sayiEkle } from "./redux/reducers/isimlerReducer";

function App() {
  const { isimler } = useSelector((state) => state.isimler);
  const { sayilar } = useSelector((state) => state.sayilar);

  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(isimEkle(value));
  };

  console.log(isimler);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setValue(e.target.value)} />
        <button type="submit">Kisi Ekle</button>
      </form>
    </div>
  );
}

export default App;
