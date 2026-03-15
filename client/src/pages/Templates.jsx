// import Navbar from "../components/Navbar";
// import { useNavigate } from "react-router-dom";

// function Templates(){

// const navigate = useNavigate();

// const templates = [

// {
// id:"certificate",
// name:"Certificate"
// },

// {
// id:"invoice",
// name:"Invoice"
// },

// {
// id:"offer",
// name:"Offer Letter"
// },

// {
// id:"biodata",
// name:"Bio Data",
// icon:"📋"
// }

// ];

// return(

// <div>

// <Navbar/>

// {/* <div className="p-10 grid grid-cols-3 gap-6">

// {templates.map((t)=>(

// <div
// key={t.id}
// className="border p-6 rounded shadow cursor-pointer hover:bg-gray-100"
// onClick={()=>navigate(`/builder/${t.id}`)}
// >

// <h2 className="text-xl">{t.name}</h2>

// </div>

// ))}

// </div> */}

// <div className="grid grid-cols-3 gap-6">

// {templates.map((template)=>(
// <div
// key={template.id}
// className="bg-white shadow p-6 rounded cursor-pointer hover:shadow-lg"
// onClick={()=>navigate(`/builder/${template.id}`)}
// >

// <h3 className="text-xl font-semibold">
// {template.icon} {template.name}
// </h3>

// </div>
// ))}

// </div>

// </div>

// );

// }

// export default Templates;


import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
import API from "../services/api";

function Templates(){

const navigate = useNavigate();

const [templates,setTemplates] = useState([]);

useEffect(()=>{

const fetchTemplates = async()=>{

try{

const token = localStorage.getItem("token");

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

const deleteTemplate = async(id)=>{

try{

const token = localStorage.getItem("token");

await API.delete(`/templates/${id}`,{
headers:{Authorization:`Bearer ${token}`}
});

setTemplates(templates.filter(t=>t._id !== id));

}catch(err){

console.log("Delete error",err);

}

};

return(

<div>

<Navbar/>

<div className="p-10 grid grid-cols-3 gap-6">

{templates.map((template)=>(

<div
key={template._id}
className="bg-white shadow p-6 rounded hover:shadow-lg"
>

<h3
className="text-xl font-semibold cursor-pointer"
onClick={()=>navigate(`/builder/${template.name}`)}
>

{template.name === "certificate" && "🏆"}
{template.name === "invoice" && "🧾"}
{template.name === "offer" && "📄"}
{template.name === "biodata" && "👤"}

{" "}{template.name}

</h3>

{template.createdBy && (

<button
onClick={()=>deleteTemplate(template._id)}
className="text-red-500 mt-3 text-sm"
>

Delete

</button>

)}

</div>

))}

</div>

</div>

);

}

export default Templates;