import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar(){

const [isLoggedIn] = useState(() => {
  return !!localStorage.getItem("token");
});



const logout = ()=>{
localStorage.removeItem("token");
window.location.href="/";
};

return(

<nav className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center">

<div className="text-xl font-bold">
DocuForge
</div>

<div className="flex gap-6 items-center">

{/* Public Links */}

<Link to="/" className="hover:text-gray-300">
Home
</Link>

<Link to="/features" className="hover:text-gray-300">
Features
</Link>

{/* If user logged in */}

{isLoggedIn && (

<>
<Link to="/dashboard" className="hover:text-gray-300">
Dashboard
</Link>

<Link to="/templates" className="hover:text-gray-300">
Templates
</Link>

<Link to="/documents" className="hover:text-gray-300">
My Documents
</Link>

<button
onClick={logout}
className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
>
Logout
</button>
</>

)}

{/* If user NOT logged in */}

{!isLoggedIn && (

<>
<Link
to="/login"
className="bg-blue-500 px-3 py-1 rounded hover:bg-blue-600"
>
Login
</Link>

<Link
to="/register"
className="bg-green-500 px-3 py-1 rounded hover:bg-green-600"
>
Register
</Link>
</>

)}

</div>

</nav>

);

}

export default Navbar;