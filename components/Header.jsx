'use client';
import React, {useState, useEffect} from 'react';
// component
import ThemeToggler from "./ThemeToggler"
import Sidebar from './Sidebar';

const Header = () => {
  return (
    <header>
        <div className='container mx-auto'>
            <div className='flex justify-between items-center pt-2'>
                <ThemeToggler />
                <div className='flex items-center'>
                    
                    <Sidebar />
                </div>
            </div>
        </div>
        
    </header>
  )
}

export default Header
