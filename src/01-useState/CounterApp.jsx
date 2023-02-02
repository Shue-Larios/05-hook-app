import { useState } from "react"

export const CounterApp = () => {
    
const [state, setCounter] = useState({
    Counter1: 10,
    Counter2: 20,
    Counter3: 30,
});

// le decimos q el state va hacer esto desestructurado para asi usar lo desestructurado y lo normal q es state
const {Counter1,Counter2,Counter3} = state;
  
  return (
    <>
    <h1>Counter: { Counter1 } </h1>
    <h1>Counter: { Counter2 } </h1>
    <h1>Counter: { Counter3 } </h1>


    {/* para hacer una linea  */}
    <hr/>

    <button className="btn btn-success" onClick={ () => setCounter({
// forma sencilla de mantener todo el estado sin importar cuantas tenga
...state,
        // aca cambiamos solo lo que nos interesa entrando al state la parte desestructurada
Counter1: Counter1 + 1,
    }) }>+1</button>
    
    </>
  )
}

