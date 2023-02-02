// useRef es un hook que nos sirve para manejar un valor de alguna variable que podemos cambiar pero no dispara renderizaciones cuando hacemos un cambio 

import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef( );

const onClick = () =>{
    // console.log(inputRef);
    // current para hacer referencia al valor actual
    // .select() esto es como poner el focus solo q selecciona lo escrito
    inputRef.current.select()


}




  return (
    <>
    <h1>Focus Screen</h1>
    <hr />

<input 
// el ref va a mandar el html element y se lo va a establecer al inputRef
ref={ inputRef }
type="text" 
placeholder="Ingrese su nombre"
className="form-control"
/>

    <button className="btn btn-primary mt-2" onClick={ onClick }>Focus</button>
    </>
  )
}
