import { Outlet, Link } from "react-router-dom"
export function Navbar(){
    return <div>
        <ul>
            <li>
                <Link className="hover:text-red-600 active:text-violet-800" to={'/'}>Mostrar Personas</Link>
            </li>
            <li>
                <Link className="hover:text-red-600 active:text-violet-800" to={'/add'}>Agregar Personas</Link>
            </li>
        </ul>
    </div>
}