"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];
function Navbar() {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor:"rgb(255,255,255)"
    }
  }

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate:-45,
      backgroundColor:"rgb(255,255,255)"
    }
  }

  const centerVariants = {
    closed: {
      opacity:1,
    },
    opened: {
      opacity:0,
    }
  }

  const listVariants = {
    closed: {
      x:"100vw"
    },
    opened:{
      x:0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    },
    
  }

  const listItemVariants = {
    closed: {
      x:-10,
      opacity:0
    },
    opened: {
      x: 0,
      opacity:1
    }
  }

  return (
    <div className="h-full items-center flex justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 text-xl">
      {/* Links Start */}
      <div className="hidden md:flex gap-3 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title}/>
         
        ))}
      </div>
      {/* Links End */}

      {/* my logo starts */}
      <div className="md:hidden lg:flex lg:w-1/3 justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex justify-center items-center"
        >
          <span className="text-white">
            {" "}
            <span className="text-xl">I</span>llahi
            <span className="text-xl">B</span>ux
          </span>
          <span className="w-12 h-8 bg-white text-black ml-1 p-1 items-center flex rounded-sm text-lg">
            .dev
          </span>
        </Link>
      </div>
      {/* my logo ends */}
        {/* Websites Links Starts */}
      <div className="hidden md:flex gap-4 w-1/3 justify-end">
        <Link href={"https://github.com/illahibuxjagirani"} target="_blank">
          <Image src="/github.png" alt="" width={30} height={30} />
        </Link>

        <Link
          href="https://web.facebook.com/photo.php?fbid=682602634086255&set=pb.100070095725766.-2207520000&type=3"
          className="target_blank"
          target="_blank"
          >
          <Image
            src="/facebook.png"
            alt=""
            width={30}
            height={30}
            className="rounded-full"
            />
        </Link>

        <Link
          href="https://www.youtube.com/@illahibuxJ"
          className="target_blank"
          target="_blank"
          >
          <Image
            src="/my.png"
            alt=""
            width={40}
            height={40}
            />
        </Link>

        <Link
          href="https://www.linkedin.com/in/illahibux-jagirani-2b66942a6/"
          className="target_blank"
          target="_blank"
        >
          <Image
            src="/linkedIn.png"
            alt=""
            width={30}
            height={30}
            className="rounded-full"
            />
        </Link>
      </div>

        {/* Websites Links Ends */}

      <div className="md:hidden">
        {/* Menu Buttons Starts */}

        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen(!open)}
          >
          <motion.div 
          variants={topVariants}
          animate={open ? "opened" : "closed"} 
          className="w-10 h-1 bg-black rounded origin-left"></motion.div>
          <motion.div 
          variants={centerVariants}
          animate={open ? "opened" : "closed"} 
          className="w-10 h-1 bg-black rounded"></motion.div>
          <motion.div 
          variants={bottomVariants}
          animate={open ? "opened" : "closed"} 
          className="w-10 h-1 bg-black rounded origin-left"></motion.div>
        </button>

        {/* Menu Buttons Ends */}

        {/* Menu List starts */}

        {open && (
          <motion.div
          variants={listVariants}
          initial="closed"
          animate="opened"
           className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-10">
            {links.map((link) => (
              <motion.div
              variants={listItemVariants}
              
              className="" key={link.title}>
              <Link href={link.url}>
                {link.title}
              </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
        {/* Menu List Ends */}
      </div>
    </div>
  );
}

export default Navbar;
