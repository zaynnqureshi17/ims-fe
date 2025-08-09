"use client";
import AppLoader from "@/components/common/AppLoader";
import { SideBar, UserRole } from "@/components/nav-side-bar/SideBar";
import { SidebarProvider } from "@/components/ui/sidebar";
import Cookies from "js-cookie";

type ProtectedLayoutProps = {
  children: React.ReactNode;
};

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  const role: UserRole = (Cookies.get("role") as UserRole) || "admin";
  return (
    <SidebarProvider>
      <SideBar role={role} />
      <main className="flex-1 overflow-y-auto min-h-screeen">
        <AppLoader />
        {children}
      </main>
    </SidebarProvider>
  );
};

export default ProtectedLayout;
