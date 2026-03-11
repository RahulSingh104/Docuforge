import { useEffect } from "react";
import Navbar from "../components/Navbar";

function Dashboard(){

useEffect(()=>{

const token = localStorage.getItem("token");

if(!token){
window.location.href="/";
}

},[]);

return(

<div>

<Navbar/>

<div className="p-10">

<h1 className="text-3xl font-bold">
Dashboard
</h1>

<p className="mt-4">
Create and manage your documents.
</p>

</div>

</div>

);

}

export default Dashboard;