import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import GridWrapper from "@/components/wrapper/GridWrapper";
import RecipesAddNew from "../recipes-add/RecipesAddNew";

const TransfersAddNew = () => {
  return (
    <GridWrapper className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 ">
      <PageHeader heading="Transfer Items" />
      <div className="flex justify-end items-end gap-3">
        <Button className="w-auto cursor-pointer">Add New</Button>
      </div>
    </GridWrapper>
  );
};

export default TransfersAddNew;
