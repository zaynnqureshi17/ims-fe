import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import GridWrapper from "@/components/wrapper/GridWrapper";

const RecipesAddNew = () => {
  return (
    <GridWrapper className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 ">
      <PageHeader heading="Ingredient" />
      <div className="flex justify-end items-end gap-3">
        <Button variant="secondary" className="w-auto">
          Add New
        </Button>
      </div>
    </GridWrapper>
  );
};

export default RecipesAddNew;
