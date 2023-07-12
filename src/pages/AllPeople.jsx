import { ShowPeople } from "../components/showPeople"
import { ErrorMessage } from "../components/ErrorMessage"
import { useContext } from "react"
import { contextPeople } from "../context/ContextPeople"

export function AllPeople(){
    const {people}= useContext(contextPeople);
    if(people.length==0){
    
    
    return <div className="flex flex-col items-center">
        
        <ErrorMessage message={"No hay personas para mostrar"}/>
        </div>
     }

    else{
        return <div className="flex flex-col items-center">
        <ShowPeople/>
        </div>
    }
}