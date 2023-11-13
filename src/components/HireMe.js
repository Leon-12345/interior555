import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

const HireMe = () => {
    return (
        <div className='fixed left-4 bottom-4 flex item-center
    justify-center overflow-hidden md:left-auto md:top-0 md:bottom-auto md:absolute md:right-0'>
            <div className="w-48 h-auto flex items-center justify-center relative md:w-24">
                <CircularText className={" animate-spin-slow dark:invert "} />
                <Link href={"mailto:leonweiwei5@gmail.com"}
                    className="flex flex-col items-center justify-center absolute left-1/2 top-1/2 
                -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md 
                border border-solid boder-dark w-20 h-20 rounded-full font-semibold
                hover:text-dark hover:bg-light dark:bg-light dark:text-dark 
                hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:text-[10px] md:w-12 md:h-12"><span className='text-center md:h-3 h-5 '>Contact</span><span className='text-center'>Me</span></Link>
            </div>
        </div>
    )
}

export default HireMe