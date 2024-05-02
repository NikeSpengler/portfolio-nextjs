import React from 'react'
import Image from 'next/image'

const SingleProjectPage = () => {
  return (
    <div className='container flex gap-24'>
        <div id='img-container' className='flex-1 relative w-[300px]'>
            <Image src={""} fill/>
        </div>
        <div id='text-container' className='flex-2 flex-col gap-12'>
            <h1 className='text-6'>Title</h1>
            <div id='tech' className='text-4 flex flex-col gap-3'>Tech</div>
            <div id='detail-text'>
                <span>Demo</span>
                <span>Code</span>
            </div>
        </div>
      <div id='content'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, earum sed repellat quod saepe necessitatibus laudantium, fuga quas hic nihil alias tempore expedita accusamus quasi inventore corrupti impedit libero odit.
      </div>
    </div>
  )
}

export default SingleProjectPage
