import ProjectCard from '@/components/projects/ProjectCard';
import { getProjects } from '@/lib/data';
import React from 'react'

// Fetch data with an API
const getData = async () => {
  // const res = await fetch("http://localhost:3000/api/project", {next: {revalidate:3600}});
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {next: {revalidate:3600}});

  if (!res.ok) {
    throw new Error ("Something went wrong");
  }
  return res.json();
};

const Work = async () => {

  // Fetch data with an API
  const posts = await getData();

  //Fetch data without an API
  // const projects = await getProjects();


  return (
    <div className='container flex flex-wrap gap-5'>
      {posts.map((post) => (
        <div className='w-[100%]' key={post.id}>
          <ProjectCard post={post}/>
        </div>
      ))}
      
    </div>
  )
}

export default Work
