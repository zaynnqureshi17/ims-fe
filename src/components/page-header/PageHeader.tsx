import { TypographyP } from "../ui/text";

interface PageHeaderProps {
  heading: string;
  description?: string;
}

const PageHeader = ({ heading, description }: PageHeaderProps) => {
  return (
    <div>
      <h1 className="text-2xl font-medium text-gray-900">{heading}</h1>
      {description && <TypographyP className="text-gray" text={description} />}
    </div>
  );
};

export default PageHeader;
