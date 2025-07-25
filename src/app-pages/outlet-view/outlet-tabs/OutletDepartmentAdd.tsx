"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import OutletDepartments from "./OutletDepartments";

import { usePrefetchNavigate } from "@/hooks/usePrefetchNavigate";
import { ProtectedUrls } from "@/utils/urls/urls";

const handleAddDepartment = () => {
  // Navigate to the add department page
  // TOOD: Implement the actual navigation on Department Add
  const navigate = usePrefetchNavigate();
  navigate(ProtectedUrls.admin.manageOutlets);
};

const OutletDepartmentAdd = () => {
  return (
    <Card className="p-6">
      <div className="flex justify-between items-baseline">
        <CardTitle>Department</CardTitle>
        <Button
          variant="secondary"
          className="w-fit"
          onClick={handleAddDepartment}
        >
          Add Department
        </Button>
      </div>
      <CardContent className="p-0">
        <OutletDepartments />
      </CardContent>
    </Card>
  );
};

export default OutletDepartmentAdd;
