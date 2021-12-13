import React, { useState } from "react";
import {addDoc,collection,db,doc,getDoc,setDoc, getDocs, deleteDoc} from "../configs/firebase";


const Task = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [allData , setAllData] = useState([]);

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
  function getSingleData(){
    let fireStoreRef = doc(db, "Resturant", '100');
    getDoc(fireStoreRef)
    .then((data)=>{
      console.log(data.data())
    })
    .catch((e)=>{
      console.log(e)
    })
  }
  function getAllData(){
    let fireStoreRef = collection(db, "Resturant")
    getDocs(fireStoreRef)
    .then((data)=>{
      console.log(data)
      let userClone = []
      data.forEach(function(allData){
        userClone.push(allData.data())

      })
      setAllData(userClone)
    })
    .catch((e)=>{
      console.log(e)
    })
  }
   function deleteData(){
    let fireStoreRef = doc(db, "Resturant", '100');

    deleteDoc( fireStoreRef)
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
      <button onClick={getSingleData}>Get Data From DB</button>
      <button onClick={getAllData}>Get Data From DB</button>
      <button onClick={deleteData}>Delete Data From DB</button>
{allData.map((item)=>{
return <ul>
  <li>{item.name}</li>
</ul>
})}

    </div>
  );
};

export default Task;
