import React from 'react'
import Image from "next/image";
import Link from "next/link";
import './projectCard.css'

const ProjectCard = ({post}) => {
  return (
    <div id="container-img" className='container flex flex-col gap-5 mb-5'>
      <div id='top' className=''>
        <div id='img-container' className='w-[100%] md:h-[500px] h-[150px] relative'>
          <Image src="/ExamKYH.png" alt="" fill className="object-cover"/>
        </div>
      </div>
      <div id='bottom' className=''>
        <h1>{post.title}</h1>
        <p>{post.desc}</p>
        <Link href={`/blog/${post.id}`}>Read more</Link>
      </div>
    </div>
  )
}

export default ProjectCard
