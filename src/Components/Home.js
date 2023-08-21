import React, { useRef } from 'react';
import {animate, motion} from 'framer-motion';
import  Typewriter from 'typewriter-effect';
import {BsArrowUpRight, BsChevronDown} from 'react-icons/bs'
import me from '../Assets/logos.png'

const Home = () => {

  const clientCount = useRef(null);
  const clientProject = useRef(null);

  const  animationClientsCount = () =>{
    animate(0,10, {
      duration:5,
      onUpdate:(v)=>(clientCount.current.textContent = v.toFixed())
    })
  }

  const  animationProjectsCount = () =>{
    animate(0,50, {
      duration:5,
      onUpdate:(v)=>(clientProject.current.textContent = v.toFixed())
    })
  }

const animation = {  h1:{ initial:{ x: '-100%', opacity: 0,},  whileInView: {x: 0, opacity: 1,}, },
};

  return (
    <div  id='home'>
        <section>
            <div >
              <motion.h1 {...animation.h1} >
                    Hi, I Am <br/> Mahfooz Alam 
                </motion.h1>  


                <Typewriter class='typewriterpara' options={{
                  strings: ['A Developer', 'A Designer' , 'A Creator'],
                  autoStart: true, loop: true,cursor: "", wrapperClassName: 'typewriterpara'
                }} />


                <div>
                <a href="mailto:alammahfooz53356@gmail.com">Hire Me </a>
                <a href="#work">Projects   <BsArrowUpRight/> </a>
                </div>


                <article>
                  <p>+<motion.span whileInView={animationClientsCount} ref={clientCount}></motion.span></p>
                  <span>Clients Worldwide</span>
                </article>

                <aside>
                <article>
                  <p>+<motion.span whileInView={animationProjectsCount} ref={clientProject}></motion.span></p>
                  <span>Projects Dome</span>
                </article>

                <article data-spacial>
                  <p>Contact</p>
                  <span>alammahfooz53356@gmail.com</span> <br />
                </article>


                </aside>
            </div>
        </section>


        <section>
          <img src={me} alt="mahfooz" />
        </section>
        <BsChevronDown/>
      
    </div>
  )
}

export default Home
