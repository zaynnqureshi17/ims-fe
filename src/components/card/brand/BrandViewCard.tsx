import IconBg from "@/components/common/IconBg";
import FormattedDate from "@/components/format-date/FormattedDate";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { brandsActions, brandsIconPath } from "@/utils/PublicImageBaseUrl";
import { IBrandResponse } from "@/utils/types/brand.type";
import Image from "next/image";

export type BrandViewCardProps = {
  brandViewData: IBrandResponse;
  onEdit?: () => void;
  onDelete?: () => void;
};

const BrandViewCard: React.FC<BrandViewCardProps> = ({
  brandViewData,
  onEdit,
  onDelete,
}) => {
  return (
    <Card className="w-full gap-2">
      <CardHeader className="flex justify-between items-start">
        <Image
          src={brandViewData.logo}
          alt="Brand Logo"
          width={24}
          height={24}
          className="!p-0 cursor-pointer"
          onClick={onEdit}
        />

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
          {brandViewData.brand_name}
        </CardTitle>
        <p className="text-sm text-gray-500">{brandViewData.description}</p>
      </CardContent>
      <CardFooter>
        <div className=" w-full flex justify-start gap-4 items-center">
          <div className="text-sm font-medium text-accent-orange bg-accent-orange-light rounded-full px-2 py-0.5 flex justify-center items-center gap-x-2">
            <Image
              src={`${brandsIconPath}/outlet.svg`}
              alt="Outlet Icon"
              width={16}
              height={16}
            />
            <p>{brandViewData.outlets.length} Outlets</p>
          </div>
          <div
            className={`px-3 py-1 font-semibold rounded-full text-sm flex justify-center items-center gap-x-2 ${
              brandViewData.status === "active"
                ? "text-accent-green bg-accent-green-light rounded-full px-2 py-0.5"
                : "text-accent-orange bg-accent-orange-light rounded-full px-2 py-0.5"
            }`}
          >
            <Image
              src={`${brandsIconPath}/active.svg`}
              alt="active"
              width={16}
              height={16}
            />
            <span>{brandViewData.status}</span>
          </div>
          <div className="text-sm font-semibold text-blue-700 bg-accent-green-light rounded-full px-2 py-0.5 flex justify-center items-center gap-x-2">
            <Image
              src={`${brandsIconPath}/user.svg`}
              alt="brand Manager User"
              width={12}
              height={12}
            />
            <span>{brandViewData?.user?.name || "N/A"}</span>
          </div>
          <div className="px-3 py-1 rounded-full text-sm text-gray bg-pagination-gray font-semibold flex justify-center items-center gap-x-2">
            <Image
              src={`${brandsIconPath}/calendar.svg`}
              alt="Calendar"
              width={16}
              height={16}
            />
            <FormattedDate date={brandViewData.created_at} />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BrandViewCard;
