// components/TopBar.tsx
"use client";

import React from "react";
import Breadcrumbs from "../breadcrumbs";
import { BreadcrumbItem } from "../breadcrumbs/breadcrumbs";
import UserControls from "../userController/UserController";

interface TopBarProps {
  breadcrumbs: BreadcrumbItem[];
}

const TopBar: React.FC<TopBarProps> = ({ breadcrumbs }) => {
  return (
    <div className="flex justify-between items-center px-6 py-3 bg-white border-b w-full">
      <Breadcrumbs items={breadcrumbs} />
      <UserControls />
    </div>
  );
};

export default TopBar;
