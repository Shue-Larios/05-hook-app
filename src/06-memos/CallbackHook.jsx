// import { useCounter } from "../hook"

import { useCallback, useEffect, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallbackHook = () => {
    const [Counter, setCounter] = useState(10);

    // useCallback es muy parecido al use memo solo que sirve para memorizar funciones y lo q regresa es una funcion q yo pueda ejecutar
    // ahora si tenemos una funcion que se va a recordar con useCallback
const incrementFather = useCallback(
    // este value es el valor que estamos recibiendo del hijo (ShowIncrement)
  (value) => {
    // aca tomamos el valor actual y le vamos a sumar uno y asi 
    setCounter( (c) => c + value);
  },
  [],
)


useEffect(() => {
    // incrementFather();

}, [incrementFather])


  return (
    <>
    <h1>useCallback Hook: {Counter} </h1>
    <hr />
    {/* uno es la property y la otra es el valor */}
<ShowIncrement increment={incrementFather} />
    </>

  )
}
