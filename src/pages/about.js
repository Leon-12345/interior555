import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import Image from "next/image";
import ProfilePic from "@/../public/images/profile/developer-pic-2.jpg"
import { motion, useMotionValue, useSpring, useInView } from 'framer-motion';
import Skills from '@/components/Skills';
import Experiences from '@/components/Experiences';
import TransitionEffect from '@/components/TransitionEffect';

const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0)
            }
        })
    }, [springValue, value]);

    return <span ref={ref}></span>
};


const about = () => {
    const animatedTextClass = "inline-block text-5xl font-bold self-start md:text-4xl sm:text-3xl xs:text-2xl";
    const animatedH2TextClass = 'text-xl font-medium capitalize text-dark/75 dark:text-light/75 self-start md:text-lg sm:text-base xs:text-sm';
    return (
        <div>
            <Head>
                <title>
                    About Leon Wei
                </title>
                <meta name='About Leon Wei' content='Job History of Leon' />
            </Head>
            <TransitionEffect />
            <main className='flex w-full flex-col items-center justify-center dark:text-light'>

                <Layout className='pt-16' >
                    <AnimatedText text={"Leon's career path"} className="lg:!text-7xl mb-16 sm:!text-6xl xs:!text-4xl" />
                    <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                        <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:!col-span-8'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>
                                Biography
                            </h2>
                            <p className='font-medium'>
                                Hi , I am Lee En Wei, Leon as my alias.
                                I have been working for almost seven years, during which time I have developed both soft skills and technical skills.
                                In terms of soft skills, I have the abilities to have email communication, leading meetings, direct client communication, team collaboration, as well as some management skills such as people management, budgeting, and project timeline management.
                                In terms of technical skills, I have the abilities to work independently, experienced in both Frontend and backend. Expertised in C#, Blazor view , MVC Model, ASP.net, OOP programming, SQL , SQL partition, SQL query performance tuning , GraphQL , HTML, CSS , React , Javascript and IBMUniverse.
                            </p>
                        </div>

                        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 
                                    dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:!col-span-8'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light dark:border-light' />
                            <Image src={ProfilePic} alt="Leon Wei" className="w-full h-auto rounded-2xl"
                                priority
                                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                            />

                        </div>

                        <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                            <div className='flex flex-col items-end justify-between xl:items-center'>
                                <span className={animatedTextClass}> <AnimatedNumbers value={4} /> years+</span>
                                <h2 className={animatedH2TextClass}>of Frontend development experience</h2>

                            </div>
                            <div className='flex flex-col items-end justify-between xl:items-center'>
                                <span className={animatedTextClass}> <AnimatedNumbers value={6} /> years+</span>
                                <h2 className={animatedH2TextClass}>of Backend development experience</h2>

                            </div>
                            <div className='flex flex-col items-end justify-between xl:items-center'>
                                <span className={animatedTextClass}> <AnimatedNumbers value={3} /> years+</span>
                                <h2 className={animatedH2TextClass}>of Project Management experience</h2>

                            </div>

                        </div>
                    </div>
                    <Skills />
                    <Experiences />
                </Layout>
            </main>
        </div>
    )
}

export default about