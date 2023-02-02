// import { useEffect } from "react"
import { useFrom } from "../hook/useFrom";


export const FormWithCustomHook = () => {
// esto es algo que viene del useFrom()
    const { FromState, onInputChange,onResetForm } = useFrom({
            // esto es el estado inicial
            username: '',
            email: '',
            password: "",
            
        })

        const { username, email, password } = FromState;



    return (
        <>
            <h1>Formulario Con  Custom Hook</h1>
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

{/* input del passsword */}
<input
                type="password"
                // mt-2 es una clase de boostrap para hacer una separacion
                className="form-control mt-2"
                placeholder="Tu contraseña"
                name="password"
                 value={password}
                onChange={onInputChange}

            />

<button onClick={ onResetForm } className="btn btn-primary mt-2">Borrar</button>

        </>

    )
}
