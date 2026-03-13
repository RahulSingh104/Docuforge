import { useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

function BulkGenerator(){

const [file,setFile] = useState(null);
const [templateId,setTemplateId] = useState("certificate");

const uploadCSV = async ()=>{

if(!file){
alert("Please select CSV file");
return;
}

try{

const token = localStorage.getItem("token");

const formData = new FormData();

formData.append("file",file);
formData.append("templateId",templateId);

const res = await API.post(
"/bulk/generate",
formData,
{
headers:{
Authorization:token,
"Content-Type":"multipart/form-data"
}
}
);

alert("Bulk PDFs generated");

console.log(res.data);

}catch(err){
    console.log(err);

alert("Error generating PDFs");

}

};

return(

<div>

<Navbar/>

<div className="p-10 max-w-lg">

<h1 className="text-3xl font-bold mb-6">
Bulk PDF Generator
</h1>

<input
type="file"
accept=".csv"
onChange={(e)=>setFile(e.target.files[0])}
className="mb-4"
/>

<select
className="border p-2 w-full mb-4"
value={templateId}
onChange={(e)=>setTemplateId(e.target.value)}
>

<option value="certificate">Certificate</option>
<option value="invoice">Invoice</option>
<option value="offer">Offer Letter</option>

</select>

<button
onClick={uploadCSV}
className="bg-blue-600 text-white px-4 py-2 rounded"
>

Generate PDFs

</button>

</div>

</div>

);

}

export default BulkGenerator;