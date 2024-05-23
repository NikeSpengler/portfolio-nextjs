import Link from 'next/link';
import  {Button} from './ui/button';

const Hero = () => {
  return (
    <section className='py-12 xl:py-24 h-[100vh] xl:pt-0 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-black'>
        <div className='container mx-auto'>
            <div className=''>
                <div className='text-left mx-auto md:mx-0 md:text-left leading-tight'>
                    <p className=' xl:text-[120px] md:text-[80px] text-[60px]'>Nike Spengler</p>
                  
                </div>
            </div>
            <div>
                <div className='flex md:flex justify-center mx-auto md:mx-0 pl-24'>
                    <p className='xl:subtitle md:subtitle text-sm pt-10 md:pt-20 md:text-left text-left max-w-[250px]'>
                        I am a fullstack developer with with a focus on and keen interest in frontend development. 
                    </p>
                </div>
                
            </div>
            <div className=''>
                <div className='text-left mx-auto md:mx-0 md:text-left pt-40'>
                    <p className=' xl:text-[30px] md:text-[24px] text-[20px]'>Personal & Agency Contributions </p>
                  
                </div>
            </div>
            <div>
                <div className='flex md:flex justify-center mx-auto md:mx-0 pl-24'>
                    <p className='xl:subtitle md:subtitle text-sm pt-10 md:pt-20 md:text-left text-left max-w-[230px]'>
                        I am a fullstack developer with with a focus on and keen interest in frontend development. 
                    </p>
                   
                </div>
            </div>
            <div>
                
                 {/* Button */}
                 {/* <Link href={'/contact'}>
                        <button className='hover:bg-opacity-50 hover:bg-stone-300 px-6 py-2 
                        border-solid border-2 border-black rounded-3xl dark:border-white'>
                            Contact
                        </button>
                    </Link> */}
            </div>
            <div>
                {/* Image */}
                <div className='flex justify-center py-10 '>
                    <div className='bg-hero_shape w-[250px] h-[250px] bg-no-repeat -top-1 -right-2 animate-spin'>
                        
                    </div>
                </div>
                {/* <div className='flex justify-center md:absolute left-2/4 bottom-44 md:bottom-12 animate-bounce'>
                    <div className='text-3xl text-primary font-light'>v</div>
                </div> */}
            </div>
        </div>
    </section>
    
  )
}

export default Hero
