//  este es nuestro archivo principal
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import { AboutPage } from './AboutPage';
import { UserProvider } from './context/UserProvider';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { Navbar } from './Navbar';


export const MainApp = () => {
    return (
        <UserProvider>
            {/* <h1>MainApp</h1> */}
<Navbar />
            <hr />


            {/* configuracion de rutas */}


            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="about" element={<AboutPage />} />

{/* esta es por si se ingresa a uno ruta que no existe me manda al login o pagina q yo le diga */}
{/* <Route path="/*" element={<LoginPage />} /> */}
<Route path="/*" element={ <Navigate to="/login" />} />

            </Routes>




        </UserProvider>
    )
}
