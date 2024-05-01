import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet'
import {AlignJustify} from 'lucide-react';
import {motion} from 'framer-motion';

// Links (next.js)
import Link from "next/link";

// Next hooks
import { usePathname } from 'next/navigation';

const links = [
    {path: '/', name: 'about'},
    {path: '/work', name: 'work'},
    {path: '/contact', name: 'contact'},
];

const Sidebar = ({containerStyles, linkStyles, underlineStyles }) => {
    const path = usePathname();
  return (
    <Sheet className={`${containerStyles}`}>
        <SheetTrigger>
            <AlignJustify className=''/>
        </SheetTrigger>
        <div>
            <SheetContent className='flex flex-col items-center gap-y-6 pt-[200px] text-2xl'>
            
                    {links.map((link, index) => {
                        return (
                        <Link 
                            href={link.path} 
                            key={index}
                            className={`capitalize ${linkStyles}`}
                            >
                            {link.path === path && (
                                <motion.span 
                                    initial={{y: '-100%'}} 
                                    animate={{y:0}}
                                    transition={{type: 'tween'}}
                                    layoutId='underline'
                                    className={`${underlineStyles}`}/>
                            )}
                            {link.name}
                        </Link>
                        );
                    })}
            
            </SheetContent>
        </div>
    </Sheet>
  )
}

export default Sidebar
