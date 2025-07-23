"use client";

import { NavMain } from "@/components/nav-side-bar/NavMain";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ProtectedRoutes } from "@/utils/routes/routes";
import SideBarLogo from "../common/SideBarLogo";
type UserRole =
  | "admin"
  | "brandManager"
  | "outletManager"
  | "finance"
  | "staff";

interface SidebarProps {
  role: UserRole;
}
export function SideBar({ role, ...props }: SidebarProps) {
  const roleRoutes = ProtectedRoutes[role] ?? {};
  return (
    <Sidebar
      collapsible="icon"
      {...props}
      className=" p-1 bg-[#302253] m-0 selectscroll "
    >
      <SidebarHeader>
        <SideBarLogo />
        <div className="absolute top-4 -right-6 z-50 ">
          <SidebarTrigger className="bg-[#302253] hover:bg-[#302253] hover:text-white text-white p-2 rounded-full cursor-pointer" />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain roleRoutes={roleRoutes} />
      </SidebarContent>
    </Sidebar>
  );
}
