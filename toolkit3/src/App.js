import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { isimEkle, isimSil } from "./redux/reducers/isimlerReducer";

function App() {
  const { value } = useSelector((state) => state.isimler);

  console.log(value);

  const [curValue, setCurValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(isimEkle(curValue));
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input value={curValue} onChange={(e) => setCurValue(e.target.value)} />
        <button type="submit">Isim Ekle</button>
      </form>

      <ul>
        {value.map((item, i) => {
          return (
            <li key={i} style={{ textDecoration: "none" }}>
              {item}
              <button onClick={() => dispatch(isimSil(item))}>Sil</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
