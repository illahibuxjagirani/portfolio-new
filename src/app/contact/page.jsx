'use client'
import React from 'react'
import {motion} from "framer-motion"


function ContactPage() {
  return (
    <motion.div 
    className="h-full" 
    initial={{y:"-200vh"}} 
    animate={{y:"0%"}} 
    transition={{duration:1}}>
      <div className='flex flex-col items-center justify-center py-10'>
        <div>

        <p className='font-bold text-3xl pb-4'>Email: <span>illahibux@gmail.com</span></p>
        <p className='font-bold text-3xl'>Address: <span>Karachi</span></p>
        </div>
      </div>
    </motion.div>
  )
}

export default ContactPage