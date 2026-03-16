// import { useState } from "react";
// import Navbar from "../components/Navbar";

// function Dashboard(){

// const [guestUses,setGuestUses] = useState(() => {
//   let uses = parseInt(localStorage.getItem("guestUses") || "1");
//   localStorage.setItem("guestUses", uses);
//   return uses;
// });


// const increaseUsage = ()=>{

// let uses = guestUses + 1;

// localStorage.setItem("guestUses",uses);

// setGuestUses(uses);

// if(uses > 3){
// window.location.href="/login";
// }

// };

// return(

// <div>

// <Navbar/>

// <div className="p-10">

// <h1 className="text-3xl font-bold">
// DocuForge Dashboard
// </h1>

// <p className="mt-4">
// Create and manage your documents.
// </p>

// {/* Guest message */}

// {guestUses <=3 && (

// <p className="text-yellow-600 mt-4">

// Guest Mode: {3-guestUses} free uses remaining before login is required.

// </p>

// )}

// {/* Example usage button */}

// <button
// onClick={increaseUsage}
// className="bg-blue-500 text-white px-4 py-2 mt-6"
// >
// Use App
// </button>

// </div>

// </div>

// );

// }

// export default Dashboard;


// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";

// function Dashboard(){

// const navigate = useNavigate();

// const [guestUses,setGuestUses] = useState(() => {
//   let uses = parseInt(localStorage.getItem("guestUses") || "0");
//   localStorage.setItem("guestUses", uses);
//   return uses;
// });

// const increaseUsage = (route) => {

// const token = localStorage.getItem("token");

// // If user logged in → navigate directly
// if(token){
// navigate(route);
// return;
// }

// let uses = parseInt(localStorage.getItem("guestUses") || "0");

// // Check guest limit
// if (uses >= 3) {
// navigate("/login");
// return;
// }

// // Increase usage
// uses = uses + 1;
// localStorage.setItem("guestUses", uses);

// // Navigate
// navigate(route);

// };

// return(

// <div>

// <Navbar/>

// <div className="p-10 space-y-8">

// <h1 className="text-3xl font-bold">
// Welcome to DocuForge 🚀
// </h1>

// <p className="text-gray-600">
// Generate documents instantly using smart templates.
// </p>

// {/* Guest Mode Message */}

// {guestUses <=3 && (

// <p className="text-yellow-600">
// Guest Mode: {3 - parseInt(localStorage.getItem("guestUses") || "0")} free uses remaining.
// </p>

// )}

// {/* Dashboard Stats */}

// <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

// <div className="bg-white shadow p-6 rounded">
// <h3 className="font-semibold">Templates</h3>
// <p className="text-2xl font-bold">10+</p>
// </div>

// <div className="bg-white shadow p-6 rounded">
// <h3 className="font-semibold">Documents Created</h3>
// <p className="text-2xl font-bold">0</p>
// </div>

// <div className="bg-white shadow p-6 rounded">
// <h3 className="font-semibold">Bulk Generated</h3>
// <p className="text-2xl font-bold">0</p>
// </div>

// </div>


// {/* Action Buttons */}

// <div className="flex gap-4">

// {/* <button
// onClick={()=>increaseUsage("/templates")}
// className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
// >
// Create Document
// </button> */}

// <button
// onClick={()=>increaseUsage("/templates")}
// className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
// >
// Create Document
// </button>

// </div>

// </div>

// </div>

// );

// }

// export default Dashboard;





// import { useState,useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import API from "../services/api";

// function Dashboard(){

// const navigate = useNavigate();

// const [guestUses,setGuestUses] = useState(() => {
//   let uses = parseInt(localStorage.getItem("guestUses") || "0");
//   localStorage.setItem("guestUses", uses);
//   return uses;
// });
// const [stats,setStats] = useState({
// templates:0,
// documents:0,
// bulk:0
// });

// const [templates,setTemplates] = useState([]);

// const increaseUsage = (route) => {

// const token = localStorage.getItem("token");

// // Logged in user → no guest limit
// if(token){
// navigate(route);
// return;
// }

// let uses = parseInt(localStorage.getItem("guestUses") || "0");

// if (uses >= 3) {
// navigate("/login");
// return;
// }

// uses = uses + 1;
// localStorage.setItem("guestUses", uses);

// navigate(route);

// };

// useEffect(()=>{

// const fetchStats = async()=>{

// try{

// const token = localStorage.getItem("token");

// if(!token) return;

// const res = await API.get("/dashboard/stats",{
// headers:{
// Authorization:`Bearer ${token}`
// }
// });

// setStats(res.data);

// }catch(err){

// console.log("Stats fetch error",err);

// }

// };

// fetchStats();

// },[]);

// useEffect(()=>{

// const fetchTemplates = async()=>{

// try{

// const res = await API.get("/templates/all");

// setTemplates(res.data);

// }catch(err){

// console.log("Template fetch error",err);

// }

// };

// fetchTemplates();

// },[]);

// return(

// <div className="min-h-screen flex flex-col bg-gray-50">

// <Navbar/>

// {/* Main Container */}
// <div className="flex-grow">

// <div className="max-w-7xl mx-auto px-6 py-10 space-y-10">

// {/* Hero Section */}

// <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl shadow">

// <h1 className="text-4xl font-bold">
// Welcome to DocuForge 🚀
// </h1>

// <p className="mt-3 text-lg opacity-90">
// Generate certificates, invoices, resumes and more in seconds.
// </p>

// <div className="mt-6 flex gap-4">

// <button
// onClick={()=>increaseUsage("/templates")}
// className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100"
// >
// Create Document
// </button>

// <button
// onClick={()=>increaseUsage("/bulk-generate")}
// className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
// >
// Bulk Generator
// </button>

// </div>

// </div>


// {/* Guest Banner */}

// {!localStorage.getItem("token") && guestUses < 3 && (

// <div className="bg-yellow-100 border border-yellow-300 text-yellow-800 p-4 rounded">

// Guest Mode: {3 - parseInt(localStorage.getItem("guestUses") || "0")} free uses remaining before login is required.

// </div>

// )}


// {/* Stats Section */}

// <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

// <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">

// <h3 className="text-gray-500 text-sm">
// Templates Available
// </h3>

// <p className="text-3xl font-bold mt-2">
// {stats.templates}
// </p>

// </div>

// <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">

// <h3 className="text-gray-500 text-sm">
// Documents Created
// </h3>

// <p className="text-3xl font-bold mt-2">
// {stats.documents}
// </p>

// </div>

// <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">

// <h3 className="text-gray-500 text-sm">
// Bulk Jobs
// </h3>

// <p className="text-3xl font-bold mt-2">
// {stats.bulk}
// </p>

// </div>

// </div>


// {/* Quick Templates */}

// <div>

// <h2 className="text-2xl font-semibold mb-4">
// Quick Start Templates
// </h2>

// <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

// {templates.map((template)=>(
    
// <button
// key={template._id}
// onClick={()=>increaseUsage(`/builder/${template.name}`)}
// className="bg-white shadow p-6 rounded-xl hover:shadow-lg transition"
// >

// {template.name === "certificate" && "🏆"}
// {template.name === "invoice" && "🧾"}
// {template.name === "offer" && "📄"}
// {template.name === "biodata" && "👤"}

// {" "}{template.name}

// </button>



// ))}

// </div>

// </div>


// {/* Features Section */}

// <div>

// <h2 className="text-2xl font-semibold mb-4">
// Why Use DocuForge
// </h2>

// <div className="grid md:grid-cols-3 gap-6">

// <div className="bg-white p-6 rounded-xl shadow">

// <h3 className="font-semibold">
// ⚡ Instant Generation
// </h3>

// <p className="text-gray-600 mt-2">
// Generate professional documents instantly with ready templates.
// </p>

// </div>

// <div className="bg-white p-6 rounded-xl shadow">

// <h3 className="font-semibold">
// 📄 Multiple Templates
// </h3>

// <p className="text-gray-600 mt-2">
// Certificates, invoices, resumes and many more templates.
// </p>

// </div>

// <div className="bg-white p-6 rounded-xl shadow">

// <h3 className="font-semibold">
// 🚀 Bulk Generation
// </h3>

// <p className="text-gray-600 mt-2">
// Generate hundreds of documents using CSV upload.
// </p>

// </div>

// </div>

// </div>

// </div>

// </div>


// {/* Footer */}

// <footer className="bg-gray-900 text-white py-6 text-center">

// <p className="text-sm opacity-80">
// © {new Date().getFullYear()} DocuForge — AI Powered Document Generator
// </p>

// </footer>

// </div>

// );

// }

// export default Dashboard;


import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import API from "../services/api";

function Dashboard(){

const navigate = useNavigate();

const [guestUses] = useState(() => {
  let uses = parseInt(localStorage.getItem("guestUses") || "0");
  localStorage.setItem("guestUses", uses);
  return uses;
});

const [stats,setStats] = useState({
templates:0,
documents:0,
bulk:0
});

const [templates,setTemplates] = useState([]);

const increaseUsage = (route) => {

const token = localStorage.getItem("token");

// Logged in user → no guest limit
if(token){
navigate(route);
return;
}

let uses = parseInt(localStorage.getItem("guestUses") || "0");

if (uses >= 3) {
navigate("/login");
return;
}

uses = uses + 1;
localStorage.setItem("guestUses", uses);

navigate(route);

};

useEffect(()=>{

const fetchStats = async()=>{

try{

const token = localStorage.getItem("token");

if(!token) return;

const res = await API.get("/dashboard/stats",{
headers:{
Authorization:`Bearer ${token}`
}
});

setStats(res.data);

}catch(err){

console.log("Stats fetch error",err);

}

};

fetchStats();

},[]);

useEffect(()=>{

const fetchTemplates = async()=>{

try{

const token = localStorage.getItem("token");

if(!token){
  return;
}

const res = await API.get("/templates/all",{
 headers:{Authorization:`Bearer ${token}`}
});

setTemplates(res.data);

}catch(err){
 console.log("Template fetch error",err);
}

};

fetchTemplates();

},[]);

return(

<div className="min-h-screen flex flex-col bg-gray-50">

<Navbar/>

<div className="flex-grow">

<div className="max-w-7xl mx-auto px-6 py-10 space-y-10">


{/* HERO SECTION */}

<div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl shadow">

<h1 className="text-4xl font-bold">
Welcome to DocuForge 🚀
</h1>

<p className="mt-3 text-lg opacity-90">
Generate certificates, invoices, resumes and more in seconds.
</p>

<div className="mt-6 flex flex-wrap gap-4">

<button
onClick={()=>increaseUsage("/templates")}
className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100"
>
Create Document
</button>

<button
onClick={()=>increaseUsage("/bulk-generate")}
className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
>
Bulk Generator
</button>

{/* AI TEMPLATE BUTTON */}

<button
onClick={()=>navigate("/ai-template")}
className="bg-purple-700 text-white px-6 py-3 rounded-lg hover:bg-purple-800"
>
🤖 AI Template Generator
</button>

</div>

</div>


{/* GUEST MODE BANNER */}

{!localStorage.getItem("token") && guestUses < 3 && (

<div className="bg-yellow-100 border border-yellow-300 text-yellow-800 p-4 rounded">

Guest Mode: {3 - parseInt(localStorage.getItem("guestUses") || "0")} free uses remaining before login is required.

</div>

)}


{/* STATS */}

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">

<h3 className="text-gray-500 text-sm">
Templates Available
</h3>

<p className="text-3xl font-bold mt-2">
{stats.templates}
</p>

</div>

<div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">

<h3 className="text-gray-500 text-sm">
Documents Created
</h3>

<p className="text-3xl font-bold mt-2">
{stats.documents}
</p>

</div>

<div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">

<h3 className="text-gray-500 text-sm">
Bulk Jobs
</h3>

<p className="text-3xl font-bold mt-2">
{stats.bulk}
</p>

</div>

</div>


{/* QUICK TEMPLATES */}

<div>

<h2 className="text-2xl font-semibold mb-4">
Quick Start Templates
</h2>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6">

{templates.map((template)=>(

<button
key={template._id}
onClick={()=>increaseUsage(`/builder/${template.name}`)}
className="bg-white shadow p-6 rounded-xl hover:shadow-lg transition"
>

{template.name === "certificate" && "🏆"}
{template.name === "invoice" && "🧾"}
{template.name === "offer" && "📄"}
{template.name === "biodata" && "👤"}

{" "}{template.name}

</button>

))}

</div>

</div>


{/* FEATURES */}

<div>

<h2 className="text-2xl font-semibold mb-4">
Why Use DocuForge
</h2>

<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-xl shadow">

<h3 className="font-semibold">
⚡ Instant Generation
</h3>

<p className="text-gray-600 mt-2">
Generate professional documents instantly with ready templates.
</p>

</div>

<div className="bg-white p-6 rounded-xl shadow">

<h3 className="font-semibold">
📄 Multiple Templates
</h3>

<p className="text-gray-600 mt-2">
Certificates, invoices, resumes and many more templates.
</p>

</div>

<div className="bg-white p-6 rounded-xl shadow">

<h3 className="font-semibold">
🚀 Bulk Generation
</h3>

<p className="text-gray-600 mt-2">
Generate hundreds of documents using CSV upload.
</p>

</div>

</div>

</div>

</div>

</div>


{/* FOOTER */}

<footer className="bg-gray-900 text-white py-6 text-center">

<p className="text-sm opacity-80">
© {new Date().getFullYear()} DocuForge — AI Powered Document Generator
</p>

</footer>

</div>

);

}

export default Dashboard;