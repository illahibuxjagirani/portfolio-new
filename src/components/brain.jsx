import React from 'react'
import Image from 'next/image'

function image() {
  return (
   <Image alt="" src={'/mypic.jpeg'} fill className=" object-contain"/>
  )
}

export default image