'use client'
import Image from "next/image";
import {motion} from 'framer-motion'
import Link from "next/link";


const Homepage = () => {
  return (
    <motion.div 
    className="h-full" 
    initial={{y:"-200vh"}} 
    animate={{y:"0%"}} 
    transition={{duration:1}}> 

    <div className="h-full flex flex-col px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 text-xl lg:flex-row">
      
      {/* Image container start */}
      <div className="h-1/2 relative lg:h-full lg:w-1/2">
        <Image alt="" src={'/mypic.jpeg'} fill className="object-contain py-20"/>
      </div>
      {/* Image container End */}

      {/* Text container start */}
      <div className="h-1/2 flex flex-col gap-4 justify-center items-center lg:h-full lg:w-1/2">
        {/* Title */}
        <h1 className="text-4xl font-bold">Welcome to My Website</h1>

        {/* Description */}
        <p className="text-justify"> I am ILLAHI BUX, a Web Developer. 
Here, you can learn to code easily, especially Governor IT Initiative and PIAIC programs, with our best tutorials and projects</p>
<div className="w-full flex gap-4">
  <button className="p-2 rounded ring-1 ring-black bg-black text-white">View My Work</button>
  <button><Link href="/contact">Contact Me</Link></button>
</div>
      </div>
      {/* Text container End */}

    </div>
    </motion.div>
  )
};

export default Homepage;
