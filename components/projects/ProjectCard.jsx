import React from 'react'
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({post}) => {
  return (
    <div className='container flex flex-col gap-5 mb-5'>
      <div id='top' className='flex '>
        <div id='img-container' className='w-[90%] h-[400px] relative'>
          <Image src="" alt="" fill className="cover"/>
        </div>
      </div>
      <div id='bottom' className=''>
        <h1>{post.title}</h1>
        <p>{post.desc}</p>
        <Link href="">Read more</Link>
      </div>
    </div>
  )
}

export default ProjectCard
