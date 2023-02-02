import { Link, NavLink } from "react-router-dom";

// para crear un tipo de link que este conciente de cual pagina es la q se encuentra para aplicar la clase de css
// esto es mediante el Navlink es un link q esta encargado d la navegacion

export const Navbar = () => {
  return (

//     {/* para usar enlaces a otras partes de mi proyecto usar <Link></Link> de lo contrario hacerlo con <a href=""></a> */}
// {/* <Link to="/"> Home</Link>
// <Link to="/about"> About</Link>
// <Link to="/login"> Login</Link> */}
   
<nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3" >
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">useContext</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        {/* <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li> */}
        
<NavLink
className={ ( {isActive} ) => `nav-link ${ isActive ? 'active' : ''  }`  }
to="/">
Home
</NavLink>

<NavLink
className={ ( {isActive} ) => `nav-link ${ isActive ? 'active' : ''  }`  }
to="/about">
About
</NavLink>

<NavLink
className={ ( {isActive} ) => `nav-link ${ isActive ? 'active' : ''  }`  }
to="/login">
Login
</NavLink>



        {/* <li className="nav-item">
          <Link className="nav-link" >About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li> */}

      </ul>
    </div>
  </div>
</nav>



  )
}
