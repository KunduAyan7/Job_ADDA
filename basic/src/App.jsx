import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from"./components/Navbar";
import Home from "./components/Home";
import Jobs from"./components/Jobs";
import About from"./components/About";
import Contact from"./components/Contact";
import Footer from "./components/Footer"
function App(){

  return <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/home"element={<Home/>}></Route>
        <Route path="/jobs"element={<Jobs/>}></Route>
        <Route path="/about"element={<About/>}></Route>
        <Route path="/contact"element={<Contact/>}></Route>
        
      </Routes>
      <Footer/>
    
    </BrowserRouter>
  </> 
}
export default App;