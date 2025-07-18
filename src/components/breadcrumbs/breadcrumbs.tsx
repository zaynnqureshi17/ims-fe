type BreadcrumbItem = {
  label: string;
  href?: string;
  active?: boolean;
};

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <div className="flex items-center space-x-2">
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-1">
          <span
            className={`text-xl font-medium ${
              item.active ? "text-orange-500" : "text-black font-semibold"
            }`}
          >
            {item.label}
          </span>
          {index < items.length - 1 && (
            <span className="text-gray-400">&gt;</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumbs;
