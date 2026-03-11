import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Templates from "./pages/Templates";
import Builder from "./pages/Builder";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/" element={<Dashboard />} />

        <Route path="/templates" element={<Templates />} />

        <Route path="/builder/:templateId" element={<Builder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
