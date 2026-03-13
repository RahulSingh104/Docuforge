import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

function Documents(){

const [docs,setDocs] = useState([]);

useEffect(()=>{

const fetchDocs = async ()=>{

try{

const token = localStorage.getItem("token");

const res = await API.get("/document/my-documents",{
headers:{Authorization:token}
});

setDocs(res.data);

}catch(err){

console.log(err);

}

};

fetchDocs();

},[]);

return(

<div>

<Navbar/>

<div className="p-10">

<h1 className="text-3xl font-bold mb-6">
My Documents
</h1>

<div className="grid grid-cols-3 gap-6">

{docs.map((doc)=>(
<div
key={doc._id}
className="border p-4 rounded shadow"
>

<h3 className="font-semibold">
Document
</h3>

<p className="text-sm text-gray-500">
{new Date(doc.createdAt).toLocaleDateString()}
</p>

<a
// href={`${import.meta.env.VITE_API_URL.replace("/api","")}/${doc.pdfUrl}`}
href={`http://localhost:5000/${doc.pdfUrl}`}
target="_blank"
className="text-blue-500 block mt-3"
>

Download PDF

</a>

</div>
))}

</div>

</div>

</div>

);

}

export default Documents;