import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from "./navbar"
import Hero from "./hero"
import Project from "./project"
import About from "./about"
import Blog from "./blog"
import Footer from "./footer"
import Contact from "./contact"
import ProjectAll from "./projectall"
import BlogAll from "./blogall"

const main = () => {
  return (
   <Router>
    <div className="font-syne">
        <Navbar/>
        <Hero/>
        <Project/>
        <About/>
        <Blog/>
        <Contact/>
        <Footer/>


        <Routes>
        <Route path="/projectall" element={ProjectAll} />
        <Route path="/blogall" element={BlogAll} />
        </Routes>
        
   </div>
   </Router>
  )
}

export default main