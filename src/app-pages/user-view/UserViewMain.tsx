"use client";

import SectionWrapper from "@/components/wrapper/SectionWrapper";
import { BadgeCheck } from "lucide-react";

const userInfo = [
  { label: "Employee ID", value: "EMP-1023" },
  { label: "Full Name", value: "Ahsan Raza" },
  { label: "Email Address", value: "ahsan.raza@rcxgroup.com" },
  { label: "Password", value: "************** 🔒" },
  { label: "User Role", value: "Outlet Manager" },
  { label: "Brand", value: "RCX Downtown" },
  { label: "Outlet", value: "RCX Downtown Branch" },
  { label: "Department", value: "Kitchen" },
  { label: "Created Date", value: "July 5, 2025 – 14:42" },
];

const userPermission = ["Dashboard", "Orders", "Inventory", "Reports"];

const UserViewMain = () => {
  return (
    <div className="col-span-2 space-y-4">
      <SectionWrapper title="Basic Information">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 text-sm">
          {userInfo.map((item, index) => (
            <div key={index}>
              <p className="text-gray-500">{item.label}</p>
              <p className="font-semibold text-black">{item.value}</p>
            </div>
          ))}

          <div>
            <p className="text-gray-500">Status</p>
            <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-100 text-green-800 rounded-full text-xs font-medium mt-1">
              <BadgeCheck className="w-4 h-4" />
              Active
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper title="Permissions">
        <div className="flex gap-4">
          {userPermission.map((permission, index) => (
            <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-100 text-green-800 rounded-full text-xs font-medium mt-1">
              <BadgeCheck className="w-4 h-4" />
              <span key={index} className="mr-2">
                {permission}
              </span>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default UserViewMain;
