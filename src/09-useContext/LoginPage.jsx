import { useContext } from "react"
import { UserContext } from "./context/UserContext";

 

export const LoginPage = () => {
// para tomar informacion del context y hacemos referencia al archivo 1
const { user, setUser } = useContext( UserContext );

return(
        <>
        <h1>LoginPage</h1>
    <hr />
    <pre>
        {JSON.stringify(user, null,3)}
    </pre>
    
    <button
    onClick={ () => setUser({ id:123, name:"Shue", email:"correo@corre.com" }) }
                className="btn btn-outline-primary mt-1">
                Establecer Usuario
            </button>
        </>
    )
   
}
