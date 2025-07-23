// components/sidebar.tsx
"use client";

import Image from "next/image";
import { ProtectedRoutes } from "@/utils/routes/routes";
import SideBarNav from "./SideBarNav";

type UserRole =
  | "admin"
  | "brandManager"
  | "outletManager"
  | "finance"
  | "staff";

interface SidebarProps {
  role: UserRole;
}

const Sidebar = ({ role }: SidebarProps) => {
  const roleRoutes = ProtectedRoutes[role] ?? {};

  return (
    <aside className="w-60 bg-[#302253] text-gray-100 h-screen p-4 flex flex-col">
      {/* Logo from public/svg-logo/rhombus-logo.svg */}
      <div className="mb-6 ">
        <Image
          src="/svg-logo/rhombus-logo-sidebar.svg"
          alt="Rhombus Logo"
          width={1000}
          height={1000}
          className="block"
        />
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto selectscroll">
        {Object.entries(roleRoutes).map(([key, route]) => (
          <SideBarNav key={key} item={route} />
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
