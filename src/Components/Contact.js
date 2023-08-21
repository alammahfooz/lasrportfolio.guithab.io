import React, { useState } from 'react';
import vg from '../Assets/vg.png';
import {motion} from 'framer-motion';
import { toast } from 'react-hot-toast';

import {addDoc,collection} from 'firebase/firestore';
import { db } from "../firebase";
 

const Contact = () => {

const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [message, setMessage] = useState("")
const [disable, setDisableBtn] = useState(false);


const submitHandler = async(e) => {
  e.preventDefault()
  setDisableBtn(true)
  // console.log(name, email, message);  

  try {
  await addDoc(collection(db,'contact'), {name, email, message});
  setName('')
  setEmail('')
  setMessage('')
  setDisableBtn(false)

  toast.success('Message Sent')
    
  } catch (error) {
  toast.error('Error')
  console.log(error);

    
  }

}





  const animations = {

    form: {initial: {x: '-100%', opacity: 0, }, whileInView: {x: 0, opacity: 1},},

    button: {initial: {y: '-100%', opacity: 0, }, whileInView: {y: 0, opacity: 1}, transition: {delay:0.5,} },

  }  
  return (
    <div id='contact'>
      <section>
        <motion.form  onSubmit={submitHandler} {...animations.form}>
            <h2>Contact Me</h2>
            <input type="text"  value={name} onChange={(e)=> setName(e.target.value)}  placeholder='Your Name' required />
            <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)}     placeholder='Your Email' required />
            <input type="text"  value={message} onChange={(e)=> setMessage(e.target.value)}     placeholder='Message' required />

            <motion.button disabled={disable} type='submit' {...animations.button} className={disable ? "disableBtn" : ''} > Send</motion.button>


        </motion.form>
      </section>        
        <aside>
            <img src={vg} alt="graphics" />
        </aside>
    </div>
  )
}

export default Contact
