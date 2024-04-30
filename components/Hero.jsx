import Link from 'next/link';
import  {Button} from './ui/button';

const Hero = () => {
  return (
    <section className='py-12 xl:py-24 h-[84vh] xl:pt-28 ng-hero bg-no-repeat 
    bg-bottom bg-cover dark:bg-none'>
        <div className='container mx-auto'>
            <div className='flex justify-between gap-x-8'>
                <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0
                text-center m:text-left xl:text-left'>
                    <div className='text-sm mb-4 tracking-[1px]'>FULLSTACK DEVELOPER</div>
                    <h1 className='h1'>Nike Spengler</h1>
                    <p className='subtitle max-w-[490px] pt-4 mx-auto xl:mx-0'>
                        I am a fullstack developer with a keen intrest in and focus on Frontend Development. 
                    </p>
                </div>
               
                {/* Image */}
                <div className='hidden xl:flex relative'>
                    Img
                </div>
            </div>
             {/* Button */}
             <div>
                    <Link href={'/contact'}>
                        <button>Read more</button>
                    </Link>
                </div>
        </div>
    </section>
    
  )
}

export default Hero
