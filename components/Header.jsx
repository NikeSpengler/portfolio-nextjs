'use client';
import React, {useState, useEffect} from 'react';
// components
import ThemeToggler from "./ThemeToggler"
import Sidebar from './Sidebar';
import {usePathname} from 'next/navigation'

const Header = () => {
    const [header, setHeader] = useState(false)
    const pathname = usePathname();

    useEffect(() => {
        const scrollYPos = window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setHeader(true) : setHeader(false);
        });

        // remove event
        return () => window.removeEventListener('scroll', scrollYPos);
    });

    console.log(pathname);
  return (
    <header className={`${header ? 'bg-white dark:bg-black' : 'bg-transparent'} 
    sticky top-0 z-30 transition-all`}>
        <div className='container pt-4'>
            <div className='flex justify-between items-center'>
                <ThemeToggler />
                <div className='flex items-center'>
                    <Sidebar 
                        containerStyles="gap-x-8 items-center" 
                        linkStyles='relative hover:text-primary transition-all'
                        underlineStyles='absolute left-0 topp-full h-[2px]'/>
                </div>
            </div>
        </div>
        
    </header>
  );
};

export default Header;
