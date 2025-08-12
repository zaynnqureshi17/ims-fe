"use client";

import SectionWrapper from "@/components/wrapper/SectionWrapper";
import { IUserWithID } from "@/utils/types/user.type";
import { BadgeCheck } from "lucide-react";

const UserViewMain = ({ userData }: { userData: IUserWithID }) => {
  const {
    email,
    name,
    user_id,
    role_name,
    brand_name,
    outlet_name,
    department_name,
    created_at,
    permissions,
  } = userData;
  const userInfo = [
    { label: "Employee ID", value: user_id || "N/A" },
    { label: "Full Name", value: name || "N/A" },
    { label: "Email Address", value: email || "N/A" },
    { label: "Password", value: "**********" },
    { label: "User Role", value: role_name || "N/A" },
    { label: "Brand", value: brand_name || "N/A" },
    { label: "Outlet", value: outlet_name || "N/A" },
    { label: "Department", value: department_name || "N/A" },
    { label: "Created Date", value: created_at || "N/A" },
  ];
  const userPermission = permissions || [
    "Dashboard",
    "Orders",
    "Inventory",
    "Reports",
  ];

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
        <div className="flex flex-wrap gap-4">
          {userPermission.map((permission, index) => (
            <div className="inline-flex w-fit border items-center gap-1 px-2 py-0.5 bg-green-100 text-green-800 rounded-full text-xs font-medium mt-1">
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
