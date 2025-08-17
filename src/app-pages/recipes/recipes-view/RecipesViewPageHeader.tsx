import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { memo } from "react";

const RecipesViewPageHeader = () => {
  return (
    <GridWrapper className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
      <PageHeader heading="Recipes Detail" description="Manage Suppliers" />

      <div className="flex justify-end items-center gap-2">
        <Button variant="outline" className="w-auto">
          Edit
        </Button>
        <Button className="w-auto bg-green-600 hover:bg-green-700 text-white">
          Export
        </Button>
        <Button className="w-auto bg-red-600 hover:bg-red-700 text-white">
          Delete
        </Button>
      </div>
    </GridWrapper>
  );
};

export default memo(RecipesViewPageHeader);
