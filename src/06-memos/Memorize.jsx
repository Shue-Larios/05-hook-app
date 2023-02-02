import { useState } from "react";
import { useCounter } from "../hook"
import { Small } from "./Small";


export const Memorize = () => {

    const { Counter, increment } = useCounter(10);

const [Show, setShow] = useState(true)    

  return (
    <>
    
    <h1>Memorize:  {/* <small> hace el tamaño del texto una talla más pequeña */}
   <Small value={Counter} />    </h1>
   <hr />

<button className="btn btn-primary" 
onClick={ () => increment () }>
    
    +1
</button>

<button
className="btn btn-primary"
// va hacer el valor opuesto a show
onClick={ () => setShow(!Show)}> 
    Show / Hide {JSON.stringify(Show)}
    </button>


    </>
  )
}
