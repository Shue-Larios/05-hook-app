import { useEffect, useState } from "react";

// creamos un componente que pueda montar y desmontar
export const Message = () => {

  const [coords, setCoords] = useState({ x: 0, y: 0 })


  // este cuenta con 3 partes
  // 1. el cuerpo
  useEffect(() => {

    // esta es la funcion para poder hacer referencia y poder removerla
    const onMouseMove = ({ x, y }) => {
      // sacamos las cordenadaas de x, y del movimiento del mouse
      // const coords = { x, y };
      setCoords({ x, y })

    }


    // nos creamos un listener para eso  window.addEventListener y voy a escuchar cda ves que se mueva el 
    // y apenas se dispare va a ejecutar un funcion
    window.addEventListener('mousemove', onMouseMove);


    // console.log("Componenten montado");
    // 2. funcion del cleanup o limpieza
    return () => {
      // para removerlo tenemos q hacer referencia a la funcion
      window.removeEventListener('mousemove', onMouseMove);


    }
    // 3. arreglo de dependencias
  }, [])


  return (
    <>

      <h3>Usuario ya existe</h3>
{
  // stringify() convierte un objeto o valor de JavaScript en una cadena de texto JSON
  JSON.stringify(coords)
}

    </>

  )
}
