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