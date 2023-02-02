import React from "react";

// aca stamos recordando todo lo que esta adentro del memo
export const ShowIncrement = React.memo (( {increment} ) => {
    console.log("Me Volvi a generar");
  return (
    <button
    className="btn btn-primary"
    onClick={ () =>{
        // este es el valor que le estamos mandando al padre (callbackHook)
        increment(5);
    } }
    >Incrementar</button>
  )
})
