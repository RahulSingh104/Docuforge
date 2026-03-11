import { useState } from "react";
import API from "../services/api";

function Login(){

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const handleLogin = async(e)=>{
e.preventDefault();

try{

const res = await API.post("/auth/login",{
email,
password
});

localStorage.setItem("token",res.data.token);

window.location.href="/dashboard";

alert("Login successful");

}catch(error){
    console.error("Login error:", error);

    alert("Login failed");

}

};

return(

<div className="flex items-center justify-center h-screen bg-gray-100">

<form onSubmit={handleLogin} className="bg-white p-6 rounded shadow w-80">

<h2 className="text-2xl mb-4">Login</h2>

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

<button className="bg-blue-500 text-white w-full p-2">
Login
</button>

</form>

</div>

);

}

export default Login;