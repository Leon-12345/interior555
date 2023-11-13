import React from "react";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl
                            border border-solid border-dark bg-light shadow-2xl p-12 dark:border-light dark:bg-dark
                            lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute  top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light
            xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
      />
      <Link
        href={link}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.35 }}
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="w-full my-2 text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center justify-between w-full">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg text-light bg-dark p-2 px-6 text-lg 
                        font-semibold dark:text-dark dark:bg-light sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl 
                            border border-solid border-dark bg-light p-6 relative
                            dark:border-light dark:bg-dark xs:p-4"
    >
      <div
        className="absolute  top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light
            md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
      />
      <Link
        href={link}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.35 }}
          src={img}
          alt={title}
          className="w-full h-auto"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="w-full my-2 text-left text-3xl font-bold dark:text-light lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="underline text-lg font-semibold dark:text-light md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Leon | Project Pages</title>
        <meta content="leon's projects" name="leon's project" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Work in Progress.... Just a showcase for my future projects."
            className="mb-16 lg:text-5xl sm:!mb-8 sm:!text-4xl xs:!text-3xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 lg:!gap-x-8 xl:gap-x-16 sm:!gap-x-0 md:gap-y-24">
            <div className="col-span-12">
              <FeaturedProject
                title="Crypto Screener Application"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                                local currency"
                link="/"
                github="/"
                type="Feature project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Crypto Screener Application"
                img={project1}
                link="/"
                github="/"
                type=" project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Crypto Screener Application"
                img={project1}
                link="/"
                github="/"
                type=" project"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Crypto Screener Application"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                                local currency"
                link="/"
                github="/"
                type="Feature project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Crypto Screener Application"
                img={project1}
                link="/"
                github="/"
                type=" project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Crypto Screener Application"
                img={project1}
                link="/"
                github="/"
                type=" project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
