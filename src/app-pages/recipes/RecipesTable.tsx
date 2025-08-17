"use client";
import RecipesListTable from "@/components/table/recips/RecipesListTable";
import { TableWrapper } from "@/components/wrapper/TableWrapper";
import { IRecips } from "@/utils/types/recipe.type";
import { useState } from "react";

interface RecipesTableProps {
  recipes: IRecips[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onView: (id: number) => void;
}

const RecipesTable = ({
  recipes,
  onEdit,
  onDelete,
  onView,
}: RecipesTableProps) => {
  const [page, setPage] = useState(1);
  return (
    <TableWrapper
      totalItems={recipes.length}
      currentPage={page}
      itemsPerPage={10}
      onPageChange={(page) => setPage(page)}
    >
      <RecipesListTable
        headtable={headtable}
        recipes={recipes}
        onEdit={onEdit}
        onDelete={onDelete}
        onView={onView}
      />
    </TableWrapper>
  );
};

export default RecipesTable;

const headtable = [
  "Recipe",
  "Category",
  "Ingredients Count",
  "Cost",
  "Version",
  "Actions",
];
