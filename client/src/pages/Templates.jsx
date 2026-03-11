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
}

];

return(

<div>

<Navbar/>

<div className="p-10 grid grid-cols-3 gap-6">

{templates.map((t)=>(

<div
key={t.id}
className="border p-6 rounded shadow cursor-pointer hover:bg-gray-100"
onClick={()=>navigate(`/builder/${t.id}`)}
>

<h2 className="text-xl">{t.name}</h2>

</div>

))}

</div>

</div>

);

}

export default Templates;