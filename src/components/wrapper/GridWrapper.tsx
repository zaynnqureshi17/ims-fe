import React from "react";

interface GridWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const GridWrapper = ({ children, className = "" }: GridWrapperProps) => {
  return <div className={`grid gap-6  ${className}`}>{children}</div>;
};

export default GridWrapper;
