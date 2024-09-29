import './App.css';
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";
import NoPage from "./pages/NoPage";



function App() {
  return (
    <div className="App">
            <NavBar/>
            <Routes>
              <Route index element={<Home/>}/>
              <Route path="/home" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="contact" element={<Contact/>} />
              <Route path="*" element={<NoPage/>} />
            </Routes>

    </div>
  );
}

export default App;
