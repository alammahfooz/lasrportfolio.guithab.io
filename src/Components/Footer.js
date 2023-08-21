import React from 'react'
import me from '../Assets/new.jpg'
import { AiFillYoutube, AiFillInstagram, AiFillGithub , AiOutlineArrowUp } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
     <div>
     <img src={me} alt="mahfooz"/>
      <h2>Mahfooz Alam</h2>
      <p>Motivatinal is temprorary. But discipline is Last Forever.</p>
     </div>

     <aside>
        <h2>Social Media</h2>

        <article>
            <a href="https://youtube.com"  target={'blank'} ><AiFillYoutube/></a>
            <a href="https://instagram.com"  target={'blank'} ><AiFillInstagram/></a>
            <a href="https://github.com/alammahfooz"  target={'blank'} ><AiFillGithub/></a>

        </article>
     </aside>

     <a href="#home" className='uparrow'> <AiOutlineArrowUp/> </a>

    </footer>
  )
}

export default Footer
