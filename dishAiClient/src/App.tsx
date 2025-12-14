import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import About from "./pages/about";
import Services from "./pages/services";
import Waitlist from "./pages/waitlist";
import Home from "./pages/home";

const App =() => {
 
 return(
  <div>
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />}/>
      <Route path="/services" element={<Services /> }/>
      <Route path="/waitlist" element={<Waitlist />}/>
    </Routes>
  </div>
 )
}

export default App;