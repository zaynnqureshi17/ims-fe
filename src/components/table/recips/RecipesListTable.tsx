"use client";
import ActionButtons from "@/components/common/ActionButtons";
import CategoryBadge from "@/components/common/CategoryBadge";
import Loader from "@/components/common/loader";
import StatusBadge from "@/components/common/StatusBadge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IRecips } from "@/utils/types/recipe.type";

interface RecipesListTableProps {
  recipes: IRecips[];
  headtable?: string[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onView: (id: number) => void;
}

const RecipesListTable = ({
  recipes,
  headtable,
  onEdit,
  onDelete,
  onView,
}: RecipesListTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {headtable?.map((head, index) => (
            <TableHead key={index}>{head}</TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody>
        {recipes.length === 0 ? (
          <TableRow>
            <TableCell colSpan={headtable?.length || 1}>
              <div className="w-full flex flex-col justify-center items-center gap-4">
                <Loader />
                <p>No data available</p>
              </div>
            </TableCell>
          </TableRow>
        ) : (
          recipes.map((item, index) => (
            <TableRow key={index} className="hover:bg-white">
              {/* Recipe Name */}
              <TableCell className="min-w-[220px]">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-md bg-orange-50 flex items-center justify-center">
                    <span className="text-lg">🍽️</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium text-gray-900">
                      {item.recipe_name}
                    </span>
                    {/* subtitle omitted: not in IRecips */}
                    <span className="text-xs text-muted-foreground">
                      {/* With lemon herb sauce */}
                    </span>
                  </div>
                </div>
              </TableCell>

              {/* Category pill */}
              <TableCell className="whitespace-nowrap">
                <CategoryBadge category={item.category} />
              </TableCell>

              {/* Ingredients Count */}
              <TableCell className="text-gray-600">
                {item.ingrediants_count}
              </TableCell>

              {/* Cost */}
              <TableCell className="text-gray-900">
                {item.cost.startsWith("$") ? item.cost : `$${item.cost}`}
              </TableCell>

              {/* Version */}
              <TableCell className="text-gray-600">{item.version}</TableCell>

              {/* Actions */}
              <TableCell className="!py-4">
                <div className="flex items-center gap-x-3">
                  <ActionButtons
                    itemId={index} // IRecips has no id; using row index
                    onEdit={onEdit}
                    onDelete={onDelete}
                    onView={onView}
                  />
                </div>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
};

export default RecipesListTable;
