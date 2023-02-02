import { useState } from "react"
import { UserContext } from "./UserContext"

// estes es cm el archivo 2


// const user = {
//     id:1,
//     name: 'Shue',
//     email: 'correo@correo.com',
// }   

export const UserProvider = ( {children} ) => {

const [user, setUser] = useState();

  return (
    // proveo toda la informacion q este UserContext va a proporcionarle al arbol de nuestros componentes
    <UserContext.Provider value={ { user,setUser } }>
{children}
    </UserContext.Provider>


  )
}
