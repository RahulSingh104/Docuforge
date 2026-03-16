const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const otpGenerator = require("otp-generator");
const sendEmail = require("../services/emailService");
const otpStore = require("../utils/otpStore");



exports.loginUser = async (req, res) => {

const { email, password } = req.body;

const user = await User.findOne({ email });

if(!user){
return res.status(400).json({ message: "User not found" });
}

if(!user.isVerified){
return res.status(400).json({
message:"Please verify your email first"
});
}

const isMatch = await bcrypt.compare(password, user.password);

if (!isMatch) {
return res.status(400).json({ message: "Invalid password" });
}

const token = jwt.sign(
  { id: user._id },
  process.env.JWT_SECRET,
  { expiresIn: "7d" }
);


res.json({ token });

};

exports.verifyOtp = async (req,res)=>{

const {email,otp} = req.body;

const data = otpStore.get(email);

if(!data){
return res.status(400).json({message:"OTP expired"});
}

if(data.otp !== otp){
return res.status(400).json({message:"Invalid OTP"});
}

if(data.expires < Date.now()){
return res.status(400).json({message:"OTP expired"});
}

const hashedPassword = await bcrypt.hash(data.password,10);

const user = await User.create({
name: data.name,
email: data.email,
password: hashedPassword,
isVerified: true
});

otpStore.delete(email);

res.json({
message:"Registration successful"
});

};

exports.sendOtp = async (req,res)=>{

try{

const {name,email,password} = req.body;

const existingUser = await User.findOne({ email });

if(existingUser){
return res.status(400).json({message:"User already exists"});
}

const otp = otpGenerator.generate(6,{
upperCaseAlphabets:false,
lowerCaseAlphabets:false,
specialChars:false
});

otpStore.set(email,{
name,
email,
password,
otp,
expires:Date.now()+5*60*1000
});

let otpSent = false;

try{

await sendEmail(
email,
"DocuForge OTP Verification",
`Your OTP is ${otp}`
);

otpSent = true;

}catch(err){

console.log("Email sending failed, using fallback OTP");
console.log("OTP:", otp);

}

res.json({
message:"OTP generated",
otpFallback: otpSent ? null : otp
});

}catch(err){
console.error("SEND OTP ERROR:", err);
res.status(500).json({message:"Server error"});
}

};