import React from "react";

const ProtectedLayoutWrapper = ({
  children,
  topBar,
}: {
  children: React.ReactNode;
  topBar: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      {topBar}
      <main className="flex flex-col gap-6 p-6 bg-gray-100 min-h-[calc(100vh-4rem)]">
        {children}
      </main>
    </div>
  );
};

export default ProtectedLayoutWrapper;
