"use client";
import IconButton from "@/components/button";
import SectionWrapper from "@/components/wrapper/SectionWrapper";
import { Plus } from "lucide-react";

const AdminDashboardGlobalSetting = () => {
  return (
    <SectionWrapper title="Global Settings">
      <IconButton
        text="System Configuration"
        icon={<Plus className="h-4 w-4" />}
        onClick={() => console.log("clicked")}
        className="text-white hover:bg-orange-400/90 bg-orange-400"
      />
      <IconButton
        text="Export Data"
        icon={<Plus className="h-4 w-4" />}
        onClick={() => console.log("clicked")}
        className="bg-accent text-black hover:bg-accent/90"
      />
      <IconButton
        text="View Audit Logs"
        icon={<Plus className="h-4 w-4" />}
        onClick={() => console.log("clicked")}
        className="bg-accent text-black hover:bg-accent/90"
      />
    </SectionWrapper>
  );
};

export default AdminDashboardGlobalSetting;
