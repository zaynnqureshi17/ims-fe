import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <div className="flex items-center space-x-2">
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-1">
          {item.href && !item.active ? (
            <Link href={item.href} className="cursor-pointer" prefetch={true}>
              {item.label}
            </Link>
          ) : (
            <span
              className={`text-xl cursor-default ${
                item.active
                  ? "text-accent-orange font-medium"
                  : "text-black font-light"
              }`}
            >
              {item.label}
            </span>
          )}
          {index < items.length - 1 && (
            <span className="text-accent-orange text-2xl">/</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumbs;
