import { useLayoutEffect, useRef, useState } from "react"

export const Quote = ({ author, quote }) => {

  const pRef = useRef()

const [BoxSize, setBoxSize] = useState({width:0, height: 0})

  useLayoutEffect(() => {
// para sacar el tamaño de la casa del texto
// getBoundingClientRect() devuelve el tamaño de un elemento y su posición relativa respecto a la ventana de visualización (viewport).
    // console.log(pRef.current.getBoundingClientRect());

    const { width,height  } = pRef.current.getBoundingClientRect();
    setBoxSize( {width,height })



  }, [ ])




  return (
    <>
    <blockquote 
    style={ {display: 'flex'} }
    className="blockquote text-end">
            <p ref={ pRef } className="mb-1 "> {quote} </p>
            <footer className="blockquote-footer mt-2">{author}</footer>
          </blockquote>

<code>{JSON.stringify(BoxSize)}  </code>    


    </>
  )
}
