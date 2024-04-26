'use client';
import React, {useState, useEffect} from 'react';
// components
import ThemeToggler from "./ThemeToggler"
import Sidebar from './Sidebar';

const Header = () => {
  return (
    <header>
        <div className='container mx-auto'>
            <div className='flex justify-between items-center pt-4 pl-4 pr-4'>
                <ThemeToggler />
                <div className='flex items-center'>
                    <Sidebar containerStyles="gap-x-8 items-center"/>
                </div>
            </div>
        </div>
        
    </header>
  )
}

export default Header
