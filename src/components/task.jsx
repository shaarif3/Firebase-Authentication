import React, { useState } from "react";
import {addDoc,collection,db,doc,getDoc,setDoc} from "../configs/firebase";


const Task = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  function premium() {
      let dbRef = doc(db,"Resturant",id);
      setDoc(dbRef,{
          name
      })
      .then((data)=>{
          console.log(data)
      })
      .catch((e)=>{
          console.log(e)
      })

  }
  function free(){
      let dbRef = collection(db,"Resturant")
      addDoc(dbRef,{
          name,
      })
      .then((data)=>{
          console.log(data)
      })
      .catch((e)=>{
          console.log(e)
      })
    

  }
  return (
    <div>
      <input
        type="text"
        placeholder="User Name"
        id="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="User Id"
        id="userId"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <button onClick={premium}>Premium User</button>
      <button onClick={free}>Free User</button>
    </div>
  );
};

export default Task;
