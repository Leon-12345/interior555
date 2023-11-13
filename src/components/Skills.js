import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({ name, x, y, type }) => {
    return (
        <motion.div className={`flex items-center justify-center rounded-full cursor-pointer absolute
        font-semibold py-3 px-6 shadow-dark ${type === 'frontend' ?
                'bg-dark text-light dark:bg-light dark:text-dark xs:text-dark xs:dark:text-light' : 'bg-primaryDark  text-light xs:text-primaryDark xs:dark:text-light'}
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:font-bold`} whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
        >
            {name}

        </motion.div>
    )
}

const Skills = () => {
    const IsSmall = () => useMediaQuery('(max-width:479px)');
    return (
        <>
            <h2 className='font-bold text-7xl mt-64 w-full text-center md:text-5xl md:mt-32'>Skillsets of Software Development</h2>
            <div className='w-full h-screen relative flex items-center justify-center 
            rounded-full bg-circularLight dark:bg-circularDark xs:h-[50vh] sm:h-[60vh] lg:h-[80vh] 
            sm:!bg-circularLightSm sm:dark:!bg-circularDarkSm md:bg-circularLightMd md:dark:bg-circularDarkMd
            lg:bg-circularLightLg lg:dark:bg-circularDarkLg '>
                <motion.div className='flex items-center justify-center rounded-full 
                    font-semibold bg-dark text-light p-8 shadow-dark dark:text-dark dark:bg-light
                    cursor-pointer lg:p-6 md:p-4 xs:text-xs xs:p-2'
                    whileHover={{ scale: 1.05 }}>
                    Skills
                </motion.div>
                <Skill name={'HTML'} x='-10vw' y='-5vw' type='frontend' />
                <Skill name={'CSS'} x='-5vw' y='-15vw' type='frontend' />
                <Skill name={'Javascript'} x='20vw' y='6vw' type='frontend' />
                <Skill name={'ReactJS'} x='18vw' y='-22vw' type='frontend' />
                <Skill name={'NextJs'} x='-20vw' y='-15vw' type='frontend' />
                <Skill name={'Nodejs'} x='15vw' y='-12vw' type='frontend' />
                <Skill name={'Web Design'} x='32vw' y='-5vw' type='frontend' />
                <Skill name={'Tailwind Css'} x='-18vw' y='18vw' type='frontend' />
                <Skill name={'Scss'} x='18vw' y='18vw' type='frontend' />
                <Skill name={'GrahQL'} x='-10vw' y='5vw' type='backend' />
                <Skill name={'C# OOP'} x='-22vw' y='-25vw' type='backend' />
                <Skill name={'C# ASP.NET'} x='-27vw' y='5vw' type='backend' />
                <Skill name={'C# MVC'} x='-28vw' y='-5vw' type='backend' />
                <Skill name={'SQL'} x='0vw' y={`${!IsSmall ? '-35vw' : '-25vw'}`} type='backend' />
                <Skill name={'IBM Universe'} x='0vw' y='15vw' type='backend' />
            </div>
        </>
    )

}

export default Skills