"use client";
import IconButton from "@/components/button";
import SectionWrapper from "@/components/wrapper/SectionWrapper";
import { Plus } from "lucide-react";

const AdminDashboardRoleManagment = () => {
  return (
    <SectionWrapper title="Role Management">
      <IconButton
        text="Manage User Role"
        icon={<Plus className="h-4 w-4" />}
        onClick={() => console.log("clicked")}
        className="text-white hover:bg-gray-800/90 bg-gray-800"
      />
      <IconButton
        text="Permissions Settings"
        icon={<Plus className="h-4 w-4" />}
        onClick={() => console.log("clicked")}
        className="bg-accent text-black hover:bg-accent/90"
      />
      <IconButton
        text="Create New User"
        icon={<Plus className="h-4 w-4" />}
        onClick={() => console.log("clicked")}
        className="bg-accent text-black hover:bg-accent/90"
      />
    </SectionWrapper>
  );
};

export default AdminDashboardRoleManagment;
