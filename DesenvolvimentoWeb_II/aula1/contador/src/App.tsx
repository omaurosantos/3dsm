import { useState } from "react";

function App() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador (contador + 1);
  }

  const decrementar = () => {
    setContador (contador - 1);
  }

  const zerar = () => {
    setContador (0);
  }
  return (
    <div>
      <input type="number" name="contador" id="contador" value={contador} /> <br /><br />
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decremento</button>
      <button onClick={zerar}>Zerar</button>

    </div>
  );
}

export default App;
