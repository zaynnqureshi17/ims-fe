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
  lineDrawn = true,
  className = "",
}: SectionWrapperProps) => {
  return (
    <div className={`bg-white rounded-md shadow-sm ${className}`}>
      <div className="px-4 py-4">
        <h2 className="text-xl font-semibold text-gray-800 capitalize">
          {title}
        </h2>
      </div>
      {lineDrawn && <div className="h-[1.5px] w-full bg-gray-300 mt-2" />}
      <div className="px-4 py-4 flex flex-col gap-4">{children}</div>
    </div>
  );
};

export default SectionWrapper;
