import { useContext, useState, useEffect } from "react";
import { contextPeople } from "../context/ContextPeople";
import { ErrorMessage } from "../components/ErrorMessage";
import {FormPerson} from "../components/FormPerson";
export function UpdatePerson() {
  let { dataUpdate, people, updatePerson } = useContext(contextPeople);

  let dataPersonUpdate={
    id:0,
    name:"insertar nombre",
    lastName:"insertar apellido",
    age:12,
    index:0,
  }


 
  if (dataUpdate.isPermit == false) {
    return <ErrorMessage message={"No hay usuario para actualizar"} />;
  } else {
      people.forEach((element,index) => {
        if(element.id==dataUpdate.idUpdate){
          dataPersonUpdate.id=element.id
          dataPersonUpdate.name= element.name
          dataPersonUpdate.lastName= element.lastName
          dataPersonUpdate.age= element.age
          dataPersonUpdate.index= index
        }
      });
      
       
    


    return <FormPerson dataPerson={dataPersonUpdate} bottomSubmitText={"Update people"} fnc={(newData)=>{updatePerson(newData)}} />;
    
  }
}
