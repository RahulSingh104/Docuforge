import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function VerifyOTP(){

const navigate = useNavigate();

const [email,setEmail] = useState("");
const [otp,setOtp] = useState("");

const verify = async()=>{

try{

await API.post("/auth/verify-otp",{email,otp});

alert("Account verified");

navigate("/login");

}catch(err){
    console.log(err);

alert("Invalid OTP");

}

};

return(

<div className="flex justify-center items-center h-screen">

<div className="bg-white p-6 shadow rounded">

<h2 className="text-xl mb-4">Verify Email</h2>

<input
placeholder="Email"
className="border p-2 mb-3 w-full"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
placeholder="OTP"
className="border p-2 mb-3 w-full"
onChange={(e)=>setOtp(e.target.value)}
/>

<button
onClick={verify}
className="bg-blue-500 text-white px-4 py-2 w-full"
>
Verify
</button>

</div>

</div>

);

}

export default VerifyOTP;