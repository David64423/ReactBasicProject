import { Link } from "react-router-dom"
import { contextPeople } from "../context/ContextPeople"
import { useContext } from "react"
export function PeopleCard({person}){
    const {deletePerson, setDataUpdate} = useContext(contextPeople)
    return <div className="border border-black flex flex-row justify-center items-center w-2/5 mt-5 bg-rose-300 min-w-[500px]">
        <div className="font-mono text-red-700 text-2xl">
            <h3>{person.name} {person.lastName}</h3>
            <h3>Edad: {person.age} años</h3>
            <h3>Numero: {person.id}</h3>
        </div>

        <img className="w-44" src={"https://robohash.org/"+person.id+".com"} alt="" />

        <div className=" flex flex-col ">
            <Link  to={'/update'} onClick={()=>{setDataUpdate({
                idUpdate:person.id,
                isPermit: true,
            })}} className=" bg-red-500 border border-red rounded border-black mt-5 mb-5 ">Actualizar</Link>
            <button onClick={()=>{deletePerson(person.id)}}  className=" bg-red-500 border rounded border-black mt-5 mb-5 " >Eliminar</button>
  </div>
    </div>
}