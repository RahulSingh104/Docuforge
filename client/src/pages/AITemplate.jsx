import { useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

function AITemplate(){

const [prompt,setPrompt] = useState("");
const [loading,setLoading] = useState(false);
const [message,setMessage] = useState("");

const generateTemplate = async()=>{

try{

setLoading(true);

const res = await API.post("/ai/create-template",{
prompt
});

setMessage(res.data.message);

}catch(err){

console.log(err);
alert("Template generation failed");

}

setLoading(false);

};

return(

<div>

<Navbar/>

<div className="max-w-2xl mx-auto p-10">

<h1 className="text-3xl font-bold mb-6">
AI Template Generator
</h1>

<textarea
className="border p-4 w-full rounded mb-4"
rows="4"
placeholder="Example: Internship certificate"
value={prompt}
onChange={(e)=>setPrompt(e.target.value)}
/>

<button
onClick={generateTemplate}
className="bg-purple-600 text-white px-6 py-3 rounded"
>

{loading ? "Generating..." : "Generate Template"}

</button>

{message && (

<p className="mt-4 text-green-600">
{message}
</p>

)}

</div>

</div>

);

}

export default AITemplate;