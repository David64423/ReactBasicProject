import { people as data } from "../data/data";
import { createContext, useState, useEffect } from "react";

export const contextPeople= createContext();
export function ContextPeopleProvider(props){

    let [dataUpdate, setDataUpdate]= useState({
        idUpdate:0,
        isPermit: false,
        
    });
    
    function deletePerson(id){
        let newArray=people.filter((person)=>id !== person.id);
        setPeople(newArray)
    }
    

    function updatePerson(newPersonData){
        people[newPersonData.index].id=newPersonData.id;
        people[newPersonData.index].name=newPersonData.name;
        people[newPersonData.index].lastName=newPersonData.lastName;
        people[newPersonData.index].age=newPersonData.age;
        setDataUpdate({
        idUpdate:0,
        isPermit: false,
        })

    }


    function addPerson(person){
        setPeople([...people,person])
    }


    let [people,setPeople]= useState([]);
    useEffect(()=>{
        setPeople(data);
    },[]);
    return <contextPeople.Provider value={{people, addPerson, deletePerson, setDataUpdate, dataUpdate, updatePerson}}>
        {props.children}
    </contextPeople.Provider>
}