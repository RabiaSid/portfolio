import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppHome from "../../pages/AppHome";

export default function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AppHome/>} /> 
        </Routes>
      </Router>
    </>
  );
}
