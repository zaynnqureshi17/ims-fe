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
          recipes.map((item) => {
            const latestVersion = item.versions?.[0]; // hamesha pehla version dikhana
            return (
              <TableRow key={item.recipe_id} className="hover:bg-white">
                {/* Recipe Name */}
                <TableCell className="min-w-[220px] font-medium text-gray-900">
                  {item.recipe_name}
                </TableCell>

                {/* Category / Subcategories */}
                <TableCell className="whitespace-nowrap">
                  <CategoryBadge category={item.recipe_category} />
                  <div className="text-xs text-gray-500">
                    {item.recipe_subcategory_1}
                    {item.recipe_subcategory_2
                      ? ` / ${item.recipe_subcategory_2}`
                      : ""}
                  </div>
                </TableCell>

                {/* Ingredients Count */}
                <TableCell className="text-gray-600">
                  {item.ingredients?.length || 0}
                </TableCell>

                {/* Cost (from latest version) */}
                <TableCell className="text-gray-900">
                  {latestVersion?.cost ? `$${latestVersion.cost}` : "-"}
                </TableCell>

                {/* Version ID */}
                <TableCell className="text-gray-600">
                  v{latestVersion?.recipe_version_id || "-"}
                </TableCell>

                {/* Production Flag */}
                <TableCell>
                  <StatusBadge status={item.is_production ? "Yes" : "No"} />
                </TableCell>

                {/* Actions */}
                <TableCell className="!py-4">
                  <div className="flex items-center gap-x-3">
                    <ActionButtons
                      itemId={item.recipe_id}
                      onEdit={onEdit}
                      onDelete={onDelete}
                      onView={onView}
                    />
                  </div>
                </TableCell>
              </TableRow>
            );
          })
        )}
      </TableBody>
    </Table>
  );
};

export default RecipesListTable;
