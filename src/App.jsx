import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import ContactUs from "./pages/ContactUs/ContactUs";
import Blog from "./pages/Blog/Blog";
import EngineerSignUp from "./pages/EngineerSignUp/EngineerSignUp";
import BusinessSignUp from "./pages/BusinessSignUp/BusinessSignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/engineer-signup" element={<EngineerSignUp />} />
        <Route path="/business-signup" element={<BusinessSignUp />} />
        <Route path="*" element={<Navigate to="/contact" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
