import { useEffect, useState } from "react"
import { Message } from "./Message";


export const SimpleForm = () => {

    // para mantener el estado hook
    // estado del formulario (formState)
    const [formState, setformState] = useState({
        username: 'Shue',
        email: 'correo@yahoo.com'
    })


    // desestrucutramos el formState
    const { username, email } = formState;

    // funcion que nos permtie hacer el cambio de cualquier input
    const onInputChange = ({target}) => {
        // event.target.value para ver el valor nuevo escrito
        // event.target.name para ver que elemento esta cambiando 

        const { name, value } = target;
        // hacemos el cambio con llaves xk arriba tenemos como objeto
        setformState({
            // desestructuramos el formState para mantener todos los valores dl formulario
            ...formState,
            [ name ]: value
        });

    }

    // se recomienda hacer un useEffect para cada cosa 
    useEffect( () =>{
        // console.log("useEffect se llamo");
        // el segundo argumento del useEffect son las dependencias aca despues de la ,
        // las dependencias son las condiciones por las cuales quiero que el useEffect se vuelva a disparar
        // si pongo [] vacio quiere decir q solo se va a disparar una unica ves
    },[] );

    
    useEffect( () =>{
        // console.log("el formState cambio");
// aca le digo q este pendiente cada ves q formState cambie
    },[formState] );

    useEffect( () =>{
        // console.log("el email cambio");
// aca le digo q este pendiente cada ves q formState cambie
    },[ email ] );
  

    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />

            {/* input del usuario */}
            <input
                type="text"
                className="form-control "
                placeholder="Username"
                name="username"
                value={username}
                // El evento OnChange se produce en las siguientes situaciones: Los datos de una columna de formulario cambian y se pierde el foco
                onChange={onInputChange}
            />
        
            {/* input del email */}
            <input
                type="email"
                // mt-2 es una clase de boostrap para hacer una separacion
                className="form-control mt-2"
                placeholder="correo@correo.com"
                name="email"
                value={email}
                onChange={onInputChange}

            />

{
    // aca dice si el username es igual a entonces muestra el mensaje
    (username === 'Shue1') && <Message/>
}





        </>

    )
}
