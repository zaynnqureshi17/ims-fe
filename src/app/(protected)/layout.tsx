"use client";
import AppLoader from "@/components/common/AppLoader";
import { SideBar } from "@/components/nav-side-bar/SideBar";
import { SidebarProvider } from "@/components/ui/sidebar";

type ProtectedLayoutProps = {
  children: React.ReactNode;
};

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <SidebarProvider>
      <SideBar role="admin" />
      <main className="flex-1 overflow-y-auto min-h-screeen">
        <AppLoader />
        {children}
      </main>
    </SidebarProvider>
  );
};

export default ProtectedLayout;
