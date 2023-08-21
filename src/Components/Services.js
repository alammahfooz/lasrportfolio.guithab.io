import React from 'react'
import { AiFillIeCircle , AiFillWindows , AiFillAndroid } from 'react-icons/ai'
import { animations, motion } from 'framer-motion' 

const Services = () => {

const animations = {whileInView: {x:0, y:0, opacity:1,}, 

one: { opacity: 1, x: '-100%'},
twoAndThree: {opacity: 1, y: '-100%'},
four: {opacity : 1 , x: '100%'},

}


  return (
    <div id='services'>
      <h2>Services</h2> 

      <section>
        <motion.div className='serviceBox1'  whileInView={animations.whileInView} initial={animations.one} >
          <h3>+5</h3>
          <p>Years Experience</p>

        </motion.div>

        <motion.div className='serviceBox2'  whileInView={animations.whileInView} initial={animations.twoAndThree} transition={{delay:0.2}}>
        <AiFillIeCircle/>
          <span>Web Development</span>

        </motion.div>

        <motion.div className='serviceBox3'  whileInView={animations.whileInView} initial={animations.twoAndThree}>
        <AiFillAndroid/>
          <span>App Development</span>
        </motion.div>

        <motion.div className='serviceBox4'  whileInView={animations.whileInView} initial={animations.four}>
        <AiFillWindows/>
          <span>Desktop Development</span>
        </motion.div>




      </section>

    </div>
  )
}

export default Services
