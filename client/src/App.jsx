import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Templates from "./pages/Templates";
import Builder from "./pages/Builder";
import Documents from "./pages/Documents";
import BulkGenerator from "./pages/BulkGenerator";
import VerifyOTP from "./pages/VerifyOTP";
import AITemplate from "./pages/AITemplate";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Homepage */}
        <Route path="/" element={<Dashboard />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* App Pages */}
        <Route path="/templates" element={<Templates />} />

        <Route path="/builder/:templateId" element={<Builder />} />

        <Route path="/documents" element={<Documents />} />

        <Route path="/bulk-generate" element={<BulkGenerator />} />
        
        <Route path="/verify-otp" element={<VerifyOTP />} />

        <Route path="/ai-template" element={<AITemplate />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;