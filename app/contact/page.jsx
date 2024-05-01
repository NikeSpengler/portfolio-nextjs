import React from 'react'
import Link from 'next/link';

const Contact = () => {
  return (
    <section className='py-12 xl:py-24 h-lvh xl:pt-28 ng-hero bg-no-repeat
    bg-bottom bg-cover dark:bg-green'>
        <div className='container mx-auto'>
            <div className='flex justify-between gap-x-8'>
                <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0
                text-center m:text-left xl:text-left'>
                    <h1 className='h1'>Contact me!</h1>
                    <p className='subtitle max-w-[490px] pt-4 mx-auto xl:mx-0'>
                        Check out some of my coding projects on Github or contact me on Linkedin. 
                    </p>
                </div>
                {/* Image */}
                <div className='hidden xl:flex relative'>
                    Img
                </div>
            </div>
            {/* Button */}
            <div className='flex flex-col gap-y-3 '>
              <div className='flex justify-center xl:justify-start hover:bg-opacity-50'>
                  <Link href={'/contact'}>
                      <button className='hover:bg-opacity-50 hover:bg-stone-300 px-6 py-2 border-solid border-2 border-black  dark:border-white'>GitHub</button>
                  </Link>
              </div>
              <div className='flex justify-center xl:justify-start'>
                  <Link href={'/contact'}>
                      <button className='hover:bg-opacity-50 hover:bg-stone-300 px-5 py-2 border-solid border-2 border-black dark:border-white'>Linkedin</button>
                  </Link>
              </div>
            </div>
            
        </div>
    </section>
  )
}

export default Contact
