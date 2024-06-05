import Navbar from "./navbar"
import Hero from "./hero"
import Project from "./project"
import About from "./about"
import Blog from "./blog"
import Footer from "./footer"
import Contact from "./contact"

const main = () => {
  return (
   <div className="font-syne">
        <Navbar/>
        <Hero/>
        <Project/>
        <About/>
        <Blog/>
        <Contact/>
        <Footer/>
        
   </div>
  )
}

export default main