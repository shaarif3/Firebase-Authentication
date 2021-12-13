
import React , {useState} from 'react';
import {addDoc,collection,db,doc,getDoc,setDoc} from "../configs/firebase";

const DataSaving = () => {
    const [name, setName] = useState("");
    const [pass, setPass] = useState("");
    const [email, setEmail] = useState("");


    function submit(){
        let dbRef = collection(db,"users")  //create collection
        addDoc(dbRef,{name:name , email:email, password:pass})  //add fields to collection
        .then((data)=>{
            console.log(data)
        })
        .catch((e)=>{
            console.log(e)
        })
    }
    function submitDesired(){
        let dbRef = doc(db,"users","desiredID");
        setDoc(dbRef,{
            name,
            email,
            password:pass
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
        <input type="text" placeholder='User Name' id='name' value={name} onChange={(e)=>{setName(e.target.value)}} />
        <input type="email" placeholder='User Email' id='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        <input type="password" placeholder='User Password' id='password' value={pass} onChange={(e)=>{setPass(e.target.value)}} />
        <button onClick={submit}>
            AutoID Saving
        </button>
        <button onClick={submitDesired}>
            DesiredID Saving
        </button>
            
        </div>
    )
}

export default DataSaving;
