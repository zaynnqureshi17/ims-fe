// components/PageHeader.tsx

import { TypographyP } from "../ui/text";

interface PageHeaderProps {
  heading: string;
  description?: string;
}

const PageHeader = ({ heading, description }: PageHeaderProps) => {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-medium text-gray-900">{heading}</h1>
      {description && <TypographyP text={description} />}
    </div>
  );
};

export default PageHeader;
