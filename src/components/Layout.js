import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-light p-32 dark:bg-dark xl:p-16 lg:p-8 md:p-8 sm:p-8 xs:p-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
