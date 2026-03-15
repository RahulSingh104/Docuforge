exports.generateTemplate = (prompt) => {

prompt = prompt.toLowerCase();

if(prompt.includes("certificate")){

return {
name:"internship-certificate",

fields:["name","company","duration","date"],

html:`
<html>
<style>
body{
font-family:Georgia;
border:10px solid #2563eb;
padding:80px;
text-align:center;
}
h1{font-size:48px}
h2{color:#2563eb}
</style>

<body>

<h1>Internship Certificate</h1>

<p>This certificate is awarded to</p>

<h2>{{name}}</h2>

<p>for successfully completing internship at</p>

<h3>{{company}}</h3>

<p>Duration: {{duration}}</p>

<p>Date: {{date}}</p>

</body>
</html>
`
}

}

if(prompt.includes("invoice")){

return {

name:"invoice-template",

fields:["name","service","amount","date"],

html:`
<html>
<body style="font-family:Arial;padding:40px">

<h1>Invoice</h1>

<p>Client: {{name}}</p>

<p>Service: {{service}}</p>

<p>Amount: ₹{{amount}}</p>

<p>Date: {{date}}</p>

</body>
</html>
`
}

}

if(prompt.includes("offer")){

return {

name:"offer-letter",

fields:["name","position","company","date"],

html:`
<html>
<body style="font-family:Georgia;padding:60px">

<h1>Offer Letter</h1>

<p>Dear {{name}},</p>

<p>We are pleased to offer you the position of {{position}} at {{company}}.</p>

<p>Joining Date: {{date}}</p>

</body>
</html>
`
}

}

return {

name:"custom-template",

fields:["name","date"],

html:`
<html>
<body>

<h1>${prompt}</h1>

<p>Name: {{name}}</p>

<p>Date: {{date}}</p>

</body>
</html>
`
}

}