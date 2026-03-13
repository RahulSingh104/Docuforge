// import { useState } from "react";
// import API from "../services/api";
// import { Link } from "react-router-dom";
// import { FcGoogle } from "react-icons/fc";

// function Register(){

// const [name,setName] = useState("");
// const [email,setEmail] = useState("");
// const [password,setPassword] = useState("");

// const handleRegister = async(e)=>{
// e.preventDefault();

// try{

// await API.post("/auth/register",{
// name,
// email,
// password
// });

// alert("User Registered");

// }catch(error){

// console.error("Registration error:", error);
// alert("Error");

// }

// };

// return(

// <div className="flex items-center justify-center h-screen bg-gray-100">

// <form onSubmit={handleRegister} className="bg-white p-6 rounded shadow w-80">

// <h2 className="text-2xl mb-4">Register</h2>

// <input
// type="text"
// placeholder="Name"
// className="border p-2 w-full mb-3"
// onChange={(e)=>setName(e.target.value)}
// />

// <input
// type="email"
// placeholder="Email"
// className="border p-2 w-full mb-3"
// onChange={(e)=>setEmail(e.target.value)}
// />

// <input
// type="password"
// placeholder="Password"
// className="border p-2 w-full mb-3"
// onChange={(e)=>setPassword(e.target.value)}
// />

// <button className="bg-green-500 text-white w-full p-2">
// Register
// </button>
// <button
// type="button"
// className="flex items-center justify-center gap-2 border w-full p-2 mt-3"
// >

// <FcGoogle size={22} />

// Continue with Google

// </button>

// <p className="text-sm text-center mt-6">

// Already have an account?{" "}

// <Link
// to="/login"
// className="text-blue-600 font-semibold"
// >
// Login here
// </Link>

// </p>

// </form>

// </div>

// );

// }

// export default Register;


import { useState, useEffect } from "react";
import API from "../services/api";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

function Register(){

const navigate = useNavigate();

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const [otp,setOtp] = useState(["","","","","",""]);

const [otpSent,setOtpSent] = useState(false);
const [loading,setLoading] = useState(false);

const [timer,setTimer] = useState(60);



// OTP COUNTDOWN TIMER

useEffect(()=>{

if(timer > 0 && otpSent){

const interval = setInterval(()=>{
setTimer((prev)=>prev-1);
},1000);

return ()=>clearInterval(interval);

}

},[timer,otpSent]);




// STEP 1 SEND OTP

const handleRegister = async(e)=>{
e.preventDefault();

setLoading(true);

try{

await API.post("/auth/send-otp",{
name,
email,
password
});

setOtpSent(true);
setTimer(60);

}catch(error){

console.error(error);
alert("Failed to send OTP");

}

setLoading(false);

};




// STEP 2 VERIFY OTP

const verifyOtp = async()=>{

setLoading(true);

try{

const otpCode = otp.join("");

await API.post("/auth/verify-otp",{
email,
otp:otpCode
});

alert("Account verified successfully");

navigate("/login");

}catch(err){
    console.error(err);

alert("Invalid OTP");

}

setLoading(false);

};




// OTP INPUT HANDLER

const handleOtpChange = (value,index)=>{

if(isNaN(value)) return;

const newOtp = [...otp];

newOtp[index] = value;

setOtp(newOtp);

};




// RESEND OTP

const resendOtp = async()=>{

try{

await API.post("/auth/send-otp",{
name,
email,
password
});

setTimer(60);

alert("OTP resent");

}catch(err){
    console.error(err);

alert("Failed to resend OTP");

}

};

return(

<div className="flex items-center justify-center h-screen bg-gray-100">

<div className="bg-white p-6 rounded shadow w-80">

<h2 className="text-2xl mb-4 text-center">
Register
</h2>


{/* REGISTER FORM */}

{!otpSent && (

<form onSubmit={handleRegister}>

<input
type="text"
placeholder="Name"
className="border p-2 w-full mb-3"
onChange={(e)=>setName(e.target.value)}
required
/>

<input
type="email"
placeholder="Email"
className="border p-2 w-full mb-3"
onChange={(e)=>setEmail(e.target.value)}
required
/>

<input
type="password"
placeholder="Password"
className="border p-2 w-full mb-3"
onChange={(e)=>setPassword(e.target.value)}
required
/>

<button
disabled={loading}
className="bg-green-500 text-white w-full p-2"
>

{loading ? "Sending..." : "Send OTP"}

</button>

</form>

)}



{/* OTP VERIFICATION */}

{otpSent && (

<div>

<div className="flex justify-between mb-4">

{otp.map((data,index)=>(

<input
key={index}
type="text"
maxLength="1"
className="border w-10 h-10 text-center text-lg"
value={otp[index]}
onChange={(e)=>handleOtpChange(e.target.value,index)}
/>

))}

</div>


<button
onClick={verifyOtp}
disabled={loading}
className="bg-blue-500 text-white w-full p-2"
>

{loading ? "Verifying..." : "Verify OTP"}

</button>



{/* TIMER */}

<p className="text-sm text-center mt-3">

{timer > 0 ? (

`Resend OTP in ${timer}s`

) : (

<button
onClick={resendOtp}
className="text-blue-600 font-semibold"
>
Resend OTP
</button>

)}

</p>

</div>

)}



{/* GOOGLE LOGIN */}

<button
type="button"
className="flex items-center justify-center gap-2 border w-full p-2 mt-4"
>

<FcGoogle size={22} />

Continue with Google

</button>


<p className="text-sm text-center mt-6">

Already have an account?{" "}

<Link
to="/login"
className="text-blue-600 font-semibold"
>
Login here
</Link>

</p>

</div>

</div>

);

}

export default Register;