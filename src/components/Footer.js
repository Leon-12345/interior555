import React from "react";
import Layout from "./Layout";
import Link from "next/link";
import HireMe from "./HireMe";
import { GithubIcon, LinkedInIcon, TwitterIcon } from "./Icons";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:border-light dark:text-light sm:text-base">
      <Layout className="py-8 flex items-center justify-between md:flex-col lg:py-6">
        <span>{new Date().getFullYear} &copy; All Rights Reserved.</span>

        <div className="flex items-center lg:py-2">
          Build by&nbsp;<Link href="/">Leon</Link>
        </div>

        <nav className="flex flex-wrap items-center justify-center">
          <motion.a
            href="https://twitter.com/leonwei9999"
            target="_blank"
            className="w-6 mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="https://github.com/Leon-12345"
            target="_blank"
            className="w-6 mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/leonway555/"
            target="_blank"
            className="w-6 mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <LinkedInIcon />
          </motion.a>
        </nav>
      </Layout>
      <HireMe />
    </footer>
  );
};

export default Footer;
