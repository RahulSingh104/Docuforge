// import { useState } from "react";
// import { useParams } from "react-router-dom";
// import API from "../services/api";
// import Navbar from "../components/Navbar";

// function Builder(){

// const {templateId} = useParams();

// const [name,setName] = useState("");
// const [course,setCourse] = useState("");
// const [date,setDate] = useState("");

// const generate = async () => {

// try{

// const token = localStorage.getItem("token");

// const res = await API.post(
// "/document/generate",
// {
// templateId,
// data:{name,course,date}
// },
// {
// headers:{
// Authorization:token
// }
// }
// );

// /* PDF DATA */
// const pdf = res.data.document;

// /* SAVE TO LOCAL STORAGE */

// let docs = JSON.parse(localStorage.getItem("guestDocs") || "[]");

// docs.push(pdf);

// localStorage.setItem("guestDocs",JSON.stringify(docs));

// alert("PDF Generated and saved locally");

// console.log(res.data);

// }catch(error){

// console.error("PDF generation error:", error);

// alert("Error generating PDF");

// }

// };

// return(

// <div>

// <Navbar/>

// <div className="p-10 max-w-lg">

// <h2 className="text-2xl mb-4">Fill Document Data</h2>

// <input
// className="border p-2 w-full mb-3"
// placeholder="Name"
// onChange={(e)=>setName(e.target.value)}
// />

// <input
// className="border p-2 w-full mb-3"
// placeholder="Course"
// onChange={(e)=>setCourse(e.target.value)}
// />

// <input
// className="border p-2 w-full mb-3"
// placeholder="Date"
// onChange={(e)=>setDate(e.target.value)}
// />

// <button
// onClick={generate}
// className="bg-blue-600 text-white px-4 py-2"
// >

// Generate PDF

// </button>

// </div>

// </div>

// );

// }

// export default Builder;


// import { useState } from "react";
// import { useParams } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import API from "../services/api";

// function Builder(){

// const { templateId } = useParams();

// const [name,setName] = useState("");
// const [course,setCourse] = useState("");
// const [date,setDate] = useState("");
// const [downloadUrl,setDownloadUrl] = useState(null);

// const generatePDF = async ()=>{

// try{

// const token = localStorage.getItem("token");

// const res = await API.post(
// "/document/generate",
// {
// templateId,
// data:{name,course,date}
// },
// {
// headers:{
// Authorization: `Bearer ${token}`
// }
// }
// );

// console.log("Generated document:", res.data);

// alert("PDF Generated Successfully");


// setDownloadUrl(`${import.meta.env.VITE_API_URL.replace("/api","")}/${res.data.document.pdfUrl}`);

// }catch(error){

// console.error("PDF generation error:", error);

// alert("Error generating PDF");

// }

// };

// return(

// <div>

// <Navbar/>

// <div className="grid grid-cols-2 gap-10 p-10">

// {/* FORM SECTION */}

// <div>

// <h2 className="text-2xl font-bold mb-6">
// Fill Document Data
// </h2>

// <input
// className="border p-2 w-full mb-3"
// placeholder="Name"
// value={name}
// onChange={(e)=>setName(e.target.value)}
// />

// <input
// className="border p-2 w-full mb-3"
// placeholder="Course"
// value={course}
// onChange={(e)=>setCourse(e.target.value)}
// />

// <input
// className="border p-2 w-full mb-3"
// placeholder="Date"
// value={date}
// onChange={(e)=>setDate(e.target.value)}
// />

// <button
// onClick={generatePDF}
// className="bg-blue-600 text-white px-4 py-2 rounded"
// >

// Generate PDF

// </button>

// </div>


// {/* PREVIEW SECTION */}

// <div className="bg-white shadow-lg p-10 border aspect-[210/297]">

// <h1 className="text-3xl text-center font-bold mb-6">
// Certificate of Completion
// </h1>

// <p className="text-center">
// This certificate is awarded to
// </p>

// <h2 className="text-center text-2xl font-bold mt-3">
// {name || "Your Name"}
// </h2>

// <p className="text-center mt-3">
// For completing the course
// </p>

// <h3 className="text-center text-xl mt-2">
// {course || "Course Name"}
// </h3>

// <p className="text-center mt-6">
// Date: {date || "Date"}
// </p>

// </div>

// </div>

// </div>

// );

// }

// export default Builder;



// import { useState } from "react";
// import { useParams } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import API from "../services/api";

// function Builder(){

// const { templateId } = useParams();

// const [name,setName] = useState("");
// const [course,setCourse] = useState("");
// const [date,setDate] = useState("");
// const [downloadUrl,setDownloadUrl] = useState(null);

// const generatePDF = async ()=>{

// try{

// const token = localStorage.getItem("token");

// const res = await API.post(
// "/document/generate",
// {
// templateId,
// data:{name,course,date}
// },
// {
// headers:{
// Authorization:`Bearer ${token}`
// }
// }
// );

// console.log("Generated document:", res.data);

// alert("PDF Generated Successfully");

// // SET DOWNLOAD URL
// setDownloadUrl(`${import.meta.env.VITE_API_URL.replace("/api","")}/${res.data.document.pdfUrl}`);

// }catch(error){

// console.error("PDF generation error:", error);

// alert("Error generating PDF");

// }

// };

// return(

// <div>

// <Navbar/>

// <div className="grid grid-cols-2 gap-10 p-10">

// {/* FORM SECTION */}

// <div>

// <h2 className="text-2xl font-bold mb-6">
// Fill Document Data
// </h2>

// <input
// className="border p-2 w-full mb-3"
// placeholder="Name"
// value={name}
// onChange={(e)=>setName(e.target.value)}
// />

// <input
// className="border p-2 w-full mb-3"
// placeholder="Course"
// value={course}
// onChange={(e)=>setCourse(e.target.value)}
// />

// <input
// className="border p-2 w-full mb-3"
// placeholder="Date"
// value={date}
// onChange={(e)=>setDate(e.target.value)}
// />

// <button
// onClick={generatePDF}
// className="bg-blue-600 text-white px-4 py-2 rounded"
// >
// Generate PDF
// </button>

// {/* DOWNLOAD BUTTON */}

// {downloadUrl && (

// <a
// href={downloadUrl}
// target="_blank"
// className="bg-green-600 text-white px-4 py-2 rounded block mt-4 text-center"
// >
// Download PDF
// </a>

// )}

// </div>


// {/* PREVIEW SECTION */}

// <div className="bg-white shadow-lg p-10 border aspect-[210/297]">

// <h1 className="text-3xl text-center font-bold mb-6">
// Certificate of Completion
// </h1>

// <p className="text-center">
// This certificate is awarded to
// </p>

// <h2 className="text-center text-2xl font-bold mt-3">
// {name || "Your Name"}
// </h2>

// <p className="text-center mt-3">
// For completing the course
// </p>

// <h3 className="text-center text-xl mt-2">
// {course || "Course Name"}
// </h3>

// <p className="text-center mt-6">
// Date: {date || "Date"}
// </p>

// </div>

// </div>

// </div>

// );

// }

// export default Builder;






import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import API from "../services/api";

function Builder() {

const { templateId } = useParams();

const [template, setTemplate] = useState(null);
const [formData, setFormData] = useState({});
const [previewHtml, setPreviewHtml] = useState("");
const [downloadUrl, setDownloadUrl] = useState(null);


// ---------------- FETCH TEMPLATE ----------------

const fetchTemplate = async () => {

try {

const res = await API.get(`/public/template/${templateId}`);

setTemplate(res.data);

const initialData = {};

res.data.fields.forEach(field => {
initialData[field] = "";
});

setFormData(initialData);

} catch (err) {

console.log("Template fetch error:", err);

}

};


// ---------------- LOAD TEMPLATE ----------------

useEffect(() => {

fetchTemplate();

}, [templateId]);


// ---------------- UPDATE PREVIEW ----------------

useEffect(() => {

if (!template) return;

let html = template.html;

Object.keys(formData).forEach(key => {

html = html.replaceAll(`{{${key}}}`, formData[key] || key);

});

setPreviewHtml(html);

}, [formData, template]);


// ---------------- HANDLE INPUT ----------------

const handleChange = (field, value) => {

setFormData({
...formData,
[field]: value
});

};


// ---------------- GENERATE PDF ----------------

const generatePDF = async () => {

try {

const token = localStorage.getItem("token");

const res = await API.post(
"/document/generate",
{
templateId,
data: formData
},
{
headers: {
Authorization: `Bearer ${token}`
}
}
);

alert("PDF Generated Successfully");

// download url
setDownloadUrl(
`${import.meta.env.VITE_API_URL.replace("/api","")}/${res.data.document.pdfUrl}`
);

} catch (err) {

console.log("PDF generation error:", err);

alert("Error generating PDF");

}

};


// ---------------- LOADING ----------------

if (!template) {

return (
<div>
<Navbar />
<div className="p-10">Loading template...</div>
</div>
);

}


// ---------------- UI ----------------

return (

<div>

<Navbar/>

<div className="grid lg:grid-cols-2 gap-10 p-10 bg-gray-50 min-h-screen">

{/* -------- FORM -------- */}

<div>

<h2 className="text-2xl font-bold mb-6">
Fill Document Data
</h2>

{template.fields.map(field => (

<input
key={field}
className="border rounded-lg p-3 w-full mb-4 focus:ring-2 focus:ring-blue-500"
placeholder={field}
value={formData[field] || ""}
onChange={(e) => handleChange(field, e.target.value)}
/>

))}

<button
onClick={generatePDF}
className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
>
Generate PDF
</button>


{/* DOWNLOAD BUTTON */}

{downloadUrl && (

<a
href={downloadUrl}
target="_blank"
className="bg-green-600 text-white px-6 py-2 rounded-lg block mt-4 text-center hover:bg-green-700"
>
Download PDF
</a>

)}

</div>


{/* -------- PREVIEW -------- */}

<div
className="bg-white shadow-lg p-10 border aspect-[210/297]"
dangerouslySetInnerHTML={{ __html: previewHtml }}
/>

</div>

</div>

);

}

export default Builder;