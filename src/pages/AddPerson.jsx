import { FormPerson } from "../components/FormPerson"
import { useContext } from "react"
import { contextPeople } from "../context/ContextPeople"
export function AddPerson(){
    const {addPerson} = useContext(contextPeople)


    let dataPersonUpdate={
        id:0,
        name:"",
        lastName:"",
        age:0,
        index:0,
      }

    return <div className="flex justify-center items-center">

        

    <FormPerson  dataPerson={dataPersonUpdate} bottomSubmitText={"Add person"} fnc={(newPerson)=>{addPerson(newPerson)}}/>
    </div>
}