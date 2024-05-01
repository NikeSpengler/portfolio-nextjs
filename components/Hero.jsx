import Link from 'next/link';
import  {Button} from './ui/button';

const Hero = () => {
  return (
    <section className='py-12 xl:py-24 h-[84vh] xl:pt-28 ng-hero bg-no-repeat bg-bottom bg-cover dark:bg-black'>
        <div className='container mx-auto'>
            <div className='flex xl:flex-row sm:flex-col justify-between gap-x-8'>
                <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0
                text-center m:text-left xl:text-left'>
                    <div className='text-sm mb-4 tracking-[1px] text-color-brown'>FULLSTACK DEVELOPER</div>
                    <h1 className='h1'>Nike Spengler</h1>
                    <p className='subtitle max-w-[490px] pt-4 mx-auto xl:mx-0'>
                        I am a fullstack developer with with a focus on and keen interest in Frontend Development. 
                    </p>
                    {/* Button */}
                    <Link href={'/contact'}>
                        <button className='hover:bg-opacity-50 hover:bg-stone-300 px-6 py-2 border-solid border-2 border-black rounded-3xl dark:border-white'>
                            Contact
                        </button>
                    </Link>
                </div>
                {/* Image */}
                <div className='flex relative sm:justify-center sm:pt-8 sm:pb-8 '>
                    <div className='bg-hero_shape w-[300px] h-[300px] bg-no-repeat -top-1 -right-2 animate-spin'>
                        
                    </div>
                </div>
                <div className='flex sm:justify-center xl:absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
                    <div className='text-3xl text-primary'>v</div>
                </div>
            </div>
            
        </div>
    </section>
    
  )
}

export default Hero
