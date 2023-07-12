import { useContext } from "react";
import { contextPeople } from "../context/ContextPeople";
import {PeopleCard} from "../components/PeopleCard"
export function ShowPeople(){
    let {people}= useContext(contextPeople)
    console.log(people)


    return <div className="flex justify-center items-center flex-col sm:min-w-[600px]">
        {people.map((person)=><PeopleCard key={person.id} person={person}/>)}
    </div>
}