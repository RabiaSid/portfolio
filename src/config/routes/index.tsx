import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppHome from "../../pages/AppHome";
import AppWork from "../../pages/work";
import AppLayout from "../../layout";
import AppTool from "../../pages/tools";
import AppContact from "../../pages/contact";
import AppAbout from "../../pages/about";

export default function AppRouter() {
  return (
    <>
      <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<AppHome/>} /> 
          <Route path="work" element={<AppWork/>} /> 
          <Route path="tool" element={<AppTool/>} /> 
          <Route path="contact" element={<AppContact/>} /> 
          <Route path="about" element={<AppAbout/>} /> 
        </Routes>
        </AppLayout>
      </Router>
    </>
  );
}
