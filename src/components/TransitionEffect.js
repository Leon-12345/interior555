import React from 'react'
import { motion } from 'framer-motion'

const TransitionEffect = () => {
    return (
        <>
            <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-primary blur'
                initial={{ x: '100%', width: '100%', opacity: '100%' }}
                animate={{ x: '0%', width: '0%', opacity: '65%' }}
                exit={{ x: ['0%', '100%'], width: ['0%', '100%'], opacity: ['65%', '100%'] }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
            />
            <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-light blur'
                initial={{ x: '100%', width: '100%' }}
                animate={{ x: '0%', width: '0%' }}
                transition={{ delay: 0.2, duration: 0.8, ease: 'easeInOut' }}
            />
            <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-dark blur'
                initial={{ x: '100%', width: '100%', opacity: '100%' }}
                animate={{ x: '0%', width: '0%', opacity: ['100%', '65%'] }}
                transition={{ delay: 0.4, duration: 0.8, ease: 'easeInOut' }}
            />
        </>
    )
}

export default TransitionEffect