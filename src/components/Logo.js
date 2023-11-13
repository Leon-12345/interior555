import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex item-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-90 h-15 text-dark dark:text-light flex items-center 
        justify-center text-2xl font-bold"
      >
        555 Interior Design
      </MotionLink>
    </div>
  );
};
export default Logo;
