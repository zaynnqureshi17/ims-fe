import React from "react";

interface GridWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const GridWrapper = ({ children, className = "" }: GridWrapperProps) => {
  return <div className={`my-4 ${className}`}>{children}</div>;
};

export default GridWrapper;
