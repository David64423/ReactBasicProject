import { useEffect, useState } from "react";
import { useContext } from "react";
import { contextPeople } from "../context/ContextPeople";
import { useNavigate } from "react-router-dom";
export function FormPerson({dataPerson, fnc, bottomSubmitText}){
  const navigate= useNavigate();
    const {updatePerson}= useContext(contextPeople)

  let [id, setId] = useState(0);
  let [name, setName] = useState("");
  let [lastName, setLastName] = useState("");
  let [age, setAge] = useState(0);

  const formSubmitFunction = (e) => {
    e.preventDefault();
    let newPerson = {
      id: id,
      name: name,
      lastName: lastName,
      age: age,
      index:dataPerson.index,
    };

    fnc(newPerson);

    setId(0);
    setName("");
    setLastName("");
    setAge(0);

    navigate('/');
  };


  useEffect(()=>{
    
   
     setId(dataPerson.id);
     setName(dataPerson.name);
     setLastName(dataPerson.lastName);
     setAge(dataPerson.age);
     

     
  },[])

  return  <form 
      onSubmit={formSubmitFunction}
      className="flex flex-col  w-2/6 text-black"
      
    >
      <p className="text-white" >ID:</p><input
        onChange={(e) => {
          setId(e.target.value);
          console.log(id);
        }}
        value={id}
        type="number"
        placeholder="ID"
        required
      />
      <p className="text-white" >Name:</p><input
        onChange={(e) => {
          setName(e.target.value);
          console.log(name);
        }}
        value={name}
        type="text"
        placeholder="Name"
        required
      />
      <p className="text-white" >Last Name:</p><input
        onChange={(e) => {
          setLastName(e.target.value);
          console.log(lastName);
        }}
        value={lastName}
        type="text"
        placeholder="Last Name"
        required
      />
      <p className="text-white" >Age:</p><input
        onChange={(e) => {
          setAge(e.target.value);
          console.log(age);
        }}
        value={age}
        type="number"
        placeholder="Edad"
        required
      />
      <input
        className="border border-white w-36 text-white bg-red-600 rounded-es-2xl items-center"
        type="submit"
        value={bottomSubmitText}
      />
    </form>
}