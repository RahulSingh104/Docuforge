// import { useState } from "react";
// import API from "../services/api";

// function Login(){

// const [email,setEmail] = useState("");
// const [password,setPassword] = useState("");

// const handleLogin = async(e)=>{
// e.preventDefault();

// try{

//     const res = await API.post("/auth/login",{
// email,
// password
// });

// localStorage.setItem("token",res.data.token);

// /* MIGRATE GUEST DOCS */

// const guestDocs = JSON.parse(localStorage.getItem("guestDocs") || "[]");

// if(guestDocs.length > 0){

// await API.post("/document/migrate",
// {
// docs:guestDocs
// },
// {
// headers:{
// Authorization:res.data.token
// }
// });

// localStorage.removeItem("guestDocs");

// }

// window.location.href="/dashboard";

// alert("Login successful");




// }catch(error){
//     console.error("Login error:", error);

//     alert("Login failed");

// }

// };

// return(

// <div className="flex items-center justify-center h-screen bg-gray-100">

// <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow w-80">

// <h2 className="text-2xl mb-4">Login</h2>

// <input
// type="email"
// placeholder="Email"
// className="border p-2 w-full mb-3"
// onChange={(e)=>setEmail(e.target.value)}
// />

// <input
// type="password"
// placeholder="Password"
// className="border p-2 w-full mb-3"
// onChange={(e)=>setPassword(e.target.value)}
// />

// <button className="bg-blue-500 text-white w-full p-2">
// Login
// </button>

// </form>

// </div>

// );

// }

// export default Login;


import { useEffect,useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {

const navigate = useNavigate();

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const handleLogin = async (e)=>{
e.preventDefault();

try{

const res = await API.post("/auth/login",{
email,
password
});

localStorage.setItem("token",res.data.token);

navigate("/dashboard");

}catch(err){
    console.log(err);

alert("Invalid credentials");

}

};

useEffect(()=>{
const token = localStorage.getItem("token");

if(token){
navigate("/dashboard");
}

},[]);

return(

<div className="min-h-screen flex">

{/* LEFT SIDE */}

<div className="hidden md:flex w-1/2 bg-gradient-to-br from-blue-600 to-purple-600 text-white items-center justify-center">

<div className="max-w-md text-center">

<h1 className="text-4xl font-bold mb-4">
DocuForge
</h1>

<p className="text-lg">
Generate documents, certificates and PDFs instantly with automation.
</p>

</div>

</div>


{/* RIGHT SIDE */}

<div className="flex w-full md:w-1/2 items-center justify-center bg-gray-100">

<form
onSubmit={handleLogin}
className="bg-white p-8 rounded-xl shadow-lg w-96"
>

<h2 className="text-2xl font-bold mb-6 text-center">
Login to your account
</h2>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="border p-3 w-full mb-4 rounded"
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
className="border p-3 w-full mb-4 rounded"
/>

<button
className="bg-blue-600 text-white w-full py-3 rounded hover:bg-blue-700"
>
Login
</button>

<div className="flex items-center my-4">

<hr className="flex-grow border-gray-300"/>

<span className="px-3 text-gray-500 text-sm">
OR
</span>

<hr className="flex-grow border-gray-300"/>

</div>

{/* Google Login Button */}

<button
type="button"
className="border w-full py-3 rounded flex items-center justify-center gap-2 hover:bg-gray-50"
>

<img
src="https://www.svgrepo.com/show/475656/google-color.svg"
className="w-5"
/>

Continue with Google

</button>


<p className="text-sm text-center mt-6">

Don't have an account?{" "}

<Link
to="/register"
className="text-blue-600 font-semibold"
>
Create account
</Link>

</p>

</form>

</div>

</div>

);

}

export default Login;