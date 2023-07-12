import { Outlet, Link } from "react-router-dom"
export function Navbar(){
    return <div>
        <ul>
            <li>
                <Link to={'/'}>Mostrar Personas</Link>
            </li>
            <li>
                <Link to={'/add'}>Agregar Personas</Link>
            </li>
        </ul>
    </div>
}