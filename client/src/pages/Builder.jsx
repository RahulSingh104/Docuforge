import { useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";
import Navbar from "../components/Navbar";

function Builder(){

const {templateId} = useParams();

const [name,setName] = useState("");
const [course,setCourse] = useState("");
const [date,setDate] = useState("");

const generate = async()=>{

try{

const token = localStorage.getItem("token");

const res = await API.post(
"/document/generate",
{
templateId,
data:{name,course,date}
},
{
headers:{
Authorization:token
}
}
);

alert("PDF Generated");

console.log(res.data);

}catch(error){
    console.error("PDF generation error:", error);


alert("Error generating PDF");

}

};

return(

<div>

<Navbar/>

<div className="p-10 max-w-lg">

<h2 className="text-2xl mb-4">Fill Document Data</h2>

<input
className="border p-2 w-full mb-3"
placeholder="Name"
onChange={(e)=>setName(e.target.value)}
/>

<input
className="border p-2 w-full mb-3"
placeholder="Course"
onChange={(e)=>setCourse(e.target.value)}
/>

<input
className="border p-2 w-full mb-3"
placeholder="Date"
onChange={(e)=>setDate(e.target.value)}
/>

<button
onClick={generate}
className="bg-blue-600 text-white px-4 py-2"
>

Generate PDF

</button>

</div>

</div>

);

}

export default Builder;