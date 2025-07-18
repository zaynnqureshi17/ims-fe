import React from "react";

type GridColumns = {
  base?: number; // default (mobile)
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
};

interface ChartGridWrapperProps {
  children: React.ReactNode;
  className?: string;
  cols?: GridColumns;
}

const ChartGridWrapper = ({
  children,
  className = "",
  cols = { base: 1, sm: 2, md: 3, lg: 4 },
}: ChartGridWrapperProps) => {
  const {
    base = 1,
    sm = 1,
    md = 1,
    lg = 1,
    xl = 1,
  } = cols;

  const gridClasses = [
    `grid-cols-${base}`,
    sm && `sm:grid-cols-${sm}`,
    md && `md:grid-cols-${md}`,
    lg && `lg:grid-cols-${lg}`,
    xl && `xl:grid-cols-${xl}`,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={`grid ${gridClasses} gap-4  ${className}`}>
      {children}
    </div>
  );
};

export default ChartGridWrapper;
