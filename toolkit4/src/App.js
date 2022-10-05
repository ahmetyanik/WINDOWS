import "./App.css";
import { useState } from "react";
import { useIsimler } from "./redux";


function App() {
  // const { value } = useSelector((state) => state.isimler);

  // console.log(value);

  // const [curValue, setCurValue] = useState("");
  // const dispatch = useDispatch();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(isimEkle(curValue));
  // };

  const [curValue, setCurValue] = useState("");
  const { value, isimEkle, isimSil } = useIsimler();

  const handleSubmit = (e) => {
    e.preventDefault();
    isimEkle(curValue);
    setCurValue("");
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
              <button onClick={() => isimSil(item)}>Sil</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
