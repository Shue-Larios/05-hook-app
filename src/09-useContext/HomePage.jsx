import { useContext } from "react"
import { UserContext } from "./context/UserContext";


export const HomePage = () => {
    // para tomar informacion del context y hacemos referencia al archivo 1
    const { user } = useContext(UserContext);

    return (

        <>
        {/* user?.name dice si el name existe imprimelo sino no hagas nada */}
            <h1>HomePage <small> {user?.name} </small> </h1>
            <hr />
            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>


        </>
    )



}






