"use client";
import PageHeader from "@/components/page-header";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { memo } from "react";

const RecipesPageHeader = () => {
  return (
    <GridWrapper className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 ">
      <PageHeader
        heading="Recipes Management"
        description="Manage all your recipes."
      />
    </GridWrapper>
  );
};

export default memo(RecipesPageHeader);
