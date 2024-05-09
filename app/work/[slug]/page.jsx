import React from 'react'
import Image from 'next/image'
import {getProject} from '@/lib/data';


// Fetch data with an API
const getData = async (slug) => {
    // const res = await fetch(`http://localhost:3000/api/project/${slug}`);
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/${slug}");
  
    if (!res.ok) {
      throw new Error ("Something went wrong");
    }
    return res.json();
  };

const SingleProjectPage = async ({ params }) => {
    const { slug } = params;

    // Fetch data with an API
    const project =  await getData(slug);

     // Fetch data without an API
    // const project = await getProject(slug);

    console.log(project);

  return (
    <div className='container flex gap-24'>
        <div id='img-container' className='flex-1 relative w-[300px]'>
            <Image src="" fill />
        </div>
        <div id='text-container' className='flex-2 flex-col gap-12'>
            <h1 className='text-6'>{project?.title}</h1>
            <div id='tech' className='text-4 flex flex-col gap-3'>Tech</div>
            <div id='detail-text'>
                <span>Demo</span>
                <span>Code</span>
            </div>
        </div>
      <div id='content'>
        {project?.body}
      </div>
    </div>
  )
}

export default SingleProjectPage
