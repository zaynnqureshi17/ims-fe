"use client";

import Sidebar from "@/components/sidebar";

type ProtectedLayoutProps = {
  children: React.ReactNode;
};

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* fixed full-height sidebar */}
      <aside className="w-60 bg-gray-800 text-white h-full sticky top-0">
        <Sidebar role="admin" />
      </aside>

      {/* main content scrolls only */}
      <main className="flex-1 overflow-y-auto h-full">
        {children}
      </main>
    </div>
  );
};

export default ProtectedLayout;
