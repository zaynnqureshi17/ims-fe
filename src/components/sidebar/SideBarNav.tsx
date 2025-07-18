"use client";

import { startsWith } from "lodash";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SideBarNavProps {
  item: {
    path: string;
    title: string;
    icon: string;
    activeRoute: string;
  };
}

const SideBarNav = ({ item }: SideBarNavProps) => {
  const path = usePathname();
  const route = path.split("/").slice(2).join("/");

  const isActive = startsWith(route, item?.activeRoute);

  return (
    <div>
      <Link
        href={item.path}
        className={`flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-700
              ${isActive ? "bg-gray-700" : ""}`}
      >
        <span className="text-sm font-medium">{item.title}</span>
      </Link>
    </div>
  );
};

export default SideBarNav;
