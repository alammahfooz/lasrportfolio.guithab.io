import React from 'react'

const Header = () => {
  return (
    <>
    <nav>
    <NavContent/>
    </nav>

   
    </>
  )
}

const NavContent = () =>(
    <>
        <h2>Mahfooz.</h2>
        <div>
        <a href="#home">Home</a>
        <a href="#work">Work</a>
        <a href="#timeline">Experience</a>
        <a href="#services">Services</a>
        <a href="#testimonial">Testimonial</a>
        <a href="#contact">Contact</a>
       
    </div>
    <a href="mailto:alammahfooz53356@gmail.com"><button>Email</button></a>
    
    </>
)

export default Header

