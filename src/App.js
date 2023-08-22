import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Countries from "./components/Countries";
import Home from "./components/Home";
import Contact from "./components/Contact";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="countries" element={<Countries />}/>
      <Route path="contact" element={<Contact/>}/>
    </Routes>
    </>
  );
}

export default App;
