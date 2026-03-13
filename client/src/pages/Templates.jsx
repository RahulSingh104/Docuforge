import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Templates(){

const navigate = useNavigate();

const templates = [

{
id:"certificate",
name:"Certificate"
},

{
id:"invoice",
name:"Invoice"
},

{
id:"offer",
name:"Offer Letter"
},

{
id:"biodata",
name:"Bio Data",
icon:"📋"
}

];

return(

<div>

<Navbar/>

{/* <div className="p-10 grid grid-cols-3 gap-6">

{templates.map((t)=>(

<div
key={t.id}
className="border p-6 rounded shadow cursor-pointer hover:bg-gray-100"
onClick={()=>navigate(`/builder/${t.id}`)}
>

<h2 className="text-xl">{t.name}</h2>

</div>

))}

</div> */}

<div className="grid grid-cols-3 gap-6">

{templates.map((template)=>(
<div
key={template.id}
className="bg-white shadow p-6 rounded cursor-pointer hover:shadow-lg"
onClick={()=>navigate(`/builder/${template.id}`)}
>

<h3 className="text-xl font-semibold">
{template.icon} {template.name}
</h3>

</div>
))}

</div>

</div>

);

}

export default Templates;