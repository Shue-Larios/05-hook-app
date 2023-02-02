// importamos de react la funcion de memo
// la funcion de memo le dice a react memoriza este componente
// solo cuando los propertis cambian se va a volver a ejecutar675
import { memo } from "react";
// import React from "react"; para q funcione React.memo asi lo importariamos
// esto funciona de la misma forma si tengo React.memo pero vite no acepta esa sintaxtis
export const Small = memo( ({value}) => {
console.log("me volvi a dibuar");

  return (
    <small> { value } </small> 
  )
})
