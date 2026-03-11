import { useState } from "react";
import API from "../services/api";

function Register(){

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const handleRegister = async(e)=>{
e.preventDefault();

try{

await API.post("/auth/register",{
name,
email,
password
});

alert("User Registered");

}catch(error){

console.error("Registration error:", error);
alert("Error");

}

};

return(

<div className="flex items-center justify-center h-screen bg-gray-100">

<form onSubmit={handleRegister} className="bg-white p-6 rounded shadow w-80">

<h2 className="text-2xl mb-4">Register</h2>

<input
type="text"
placeholder="Name"
className="border p-2 w-full mb-3"
onChange={(e)=>setName(e.target.value)}
/>

<input
type="email"
placeholder="Email"
className="border p-2 w-full mb-3"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
className="border p-2 w-full mb-3"
onChange={(e)=>setPassword(e.target.value)}
/>

<button className="bg-green-500 text-white w-full p-2">
Register
</button>

</form>

</div>

);

}

export default Register;