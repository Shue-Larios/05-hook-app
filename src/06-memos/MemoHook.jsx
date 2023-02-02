import { useMemo, useState } from "react";
import { useCounter } from "../hook"

// las funciones que se hacen aca solo se ejecutan una solo ves 
const heavyStuff = ( iterationNumber ) =>{
for (let i = 0; i < iterationNumber; i++) {
console.log("Ahi Vamos");
}
return `${iterationNumber} iteraciones realizadas`
}



export const MemoHook = () => {
  const { Counter, increment } = useCounter(400);
  const [Show, setShow] = useState(true);

// exportamos el useMemo
const memorizedValue = useMemo(() => heavyStuff(Counter), [Counter])

  return (
    <>
      <h1>MemoHook:  {/* <small> hace el tamaño del texto una talla más pequeña */}
        <small> {Counter} </small>    </h1>
      <hr />
      {/* aca renderizamos la funcion heavyStuff */}      
      <h4> {memorizedValue} </h4>
      <button className="btn btn-primary"
        onClick={() => increment()}>
        +1
      </button>
      <button
        className="btn btn-primary"
        // va hacer el valor opuesto a show
        onClick={() => setShow(!Show)}>
        Show / Hide {JSON.stringify(Show)}
      </button>
    </>
  )
}
