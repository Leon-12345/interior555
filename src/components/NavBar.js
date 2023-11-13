import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { MoonIcon, PinterestIcon, SunIcon } from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  var router = useRouter("");
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={` dark:bg-light h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? "w-full" : "w-0"}
      `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  var router = useRouter("");
  const handleClick = () => {
    toggle();
    router.push(href);
  };
  return (
    <Link
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={` dark:bg-dark h-[1px] inline-block bg-light absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? "w-full" : "w-0"}
      `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();

  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-15 lg:px-16 md:px-12 sm:px-8 xs:px-4">
      <button
        className="lg:flex flex-col justify-center items-center hidden"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${
            isOpen ? "-rotate-45 -translate-y-0.75" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink
              href="/"
              title={"Home"}
              className=""
              toggle={handleClick}
            ></CustomMobileLink>
            <CustomMobileLink
              href="/about"
              title={"About"}
              className=""
              toggle={handleClick}
            ></CustomMobileLink>
            <CustomMobileLink
              href="/projects"
              title={"Projects"}
              className=""
              toggle={handleClick}
            ></CustomMobileLink>
            <CustomMobileLink
              href="/article"
              title={"Articles"}
              className=""
              toggle={handleClick}
            ></CustomMobileLink>
          </nav>
        </motion.div>
      ) : null}

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title={"Home"} className="mr-4"></CustomLink>
          <CustomLink
            href="/about"
            title={"About"}
            className="mx-4"
          ></CustomLink>
          <CustomLink
            href="/projects"
            title={"Projects"}
            className="mx-4"
          ></CustomLink>
          <CustomLink
            href="/article"
            title={"Articles"}
            className="ml-4"
          ></CustomLink>
        </nav>
      </div>

      <div className="absolute left-[1%] top-2 translate-x-[20%]">
        <Logo />
      </div>

      <button
        onClick={() => setMode(mode === "light" ? "dark" : "light")}
        className={`absolute rounded-full right-[20%] top-2 translate-x-[50%]
          ${mode === "light" ? "bg-dark text-light" : "text-dark bg-light"}`}
      >
        {mode === "dark" ? (
          <SunIcon className={"fill-dark"} />
        ) : (
          <MoonIcon className={"fill-dark"} />
        )}
      </button>
    </header>
  );
};

export default NavBar;
