'use client';
 import { Button } from "./ui/button";
//  import { CircleIcon, Half2Icon } from "@radix-ui/react-icons";
 import { useTheme } from "next-themes";


const ThemeToggler = () => {
    const {theme, setTheme} = useTheme();
  return (
    <div className="pt-2">
      <Button  className="h-[1.2rem] w-[1.2rem] rounded-full" onClick={()=> setTheme (theme === 'dark' ? 'light' : 'dark')}>
        {/* <CircleIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all 
        dark:-rotate-90 dark:scale-0"/>
        <Half2Icon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all
        dark:rotate-0 dark:scale-100"/> */}
      </Button>
    </div>
  )
}

export default ThemeToggler

