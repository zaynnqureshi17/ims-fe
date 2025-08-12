import IconBg from "@/components/common/IconBg";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { brandsActions } from "@/utils/PublicImageBaseUrl";
import { IBrand } from "@/utils/types/brand.type";

type BrandCardTableProps = {
  brand: IBrand;
  onEdit?: () => void;
  onDelete?: () => void;
};

const BrandCardTable: React.FC<BrandCardTableProps> = ({
  brand,
  onEdit,
  onDelete,
}) => {
  return (
    <Card className="w-full gap-2">
      <CardHeader className="flex justify-between items-start">
        {brand.logo}
        <div className="text-center flex justify-start gap-x-3">
          <IconBg
            icon={`${brandsActions}edit.svg`}
            title="Edit"
            width={16}
            height={16}
            className="!p-0 cursor-pointer"
            onClick={onEdit}
          />
          <IconBg
            icon={`${brandsActions}delete.svg`}
            title="Delete"
            width={16}
            height={16}
            className="!p-0 cursor-pointer"
            onClick={onDelete}
          />
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-lg font-semibold">
          {brand.brand_name}
        </CardTitle>
        <p className="text-sm text-gray-500">{brand.description}</p>
      </CardContent>
      <CardFooter>
        <div className=" w-full flex justify-between items-center">
          <p className="text-sm font-medium text-accent-orange bg-accent-orange-light rounded-full px-2 py-0.5">
            {1} Outlets
          </p>
          <span
            className={`px-3 py-1 rounded-full text-sm ${
              status === "Active"
                ? "text-accent-green bg-accent-green-light rounded-full px-2 py-0.5"
                : "text-accent-orange bg-accent-orange-light rounded-full px-2 py-0.5"
            }`}
          >
            {brand.status}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BrandCardTable;
