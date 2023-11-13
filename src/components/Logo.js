import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex item-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-90 h-15 bg-transparent text-dark flex items-center 
        justify-center text-2xl font-bold dark:border-light boder-transparent"
        whileHover={{
          backgroundColor: [
            "#B2BEB5",
            "#7393B3",
            "#A9A9A9",
            "#818589",
            "#C0C0C0",
            "#848884",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        555 Interior Design
      </MotionLink>
    </div>
  );
};
export default Logo;
