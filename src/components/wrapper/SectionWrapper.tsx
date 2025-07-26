import { ReactNode } from "react";

interface SectionWrapperProps {
  title: string;
  children: ReactNode;
  lineDrawn?: boolean;
  className?: string;
}

const SectionWrapper = ({
  title,
  children,
  className = "",
}: SectionWrapperProps) => {
  return (
    <div className={`bg-white rounded-md shadow-sm px-6 py-4 ${className}`}>
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800 capitalize">
          {title}
        </h2>
      </div>
      <div className=" flex flex-col gap-4">{children}</div>
    </div>
  );
};

export default SectionWrapper;
