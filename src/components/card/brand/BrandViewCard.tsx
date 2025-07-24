import IconBg from "@/components/common/IconBg";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { brandsActions, brandsIconPath } from "@/utils/PublicImageBaseUrl";
import Image from "next/image";

export interface BrandViewCardProps {
  id: number;
  title: string;
  description: string;
  name: string;
  date: string;
  outletsCount: number;
  status: "Active" | "Inactive";
  logo: React.ReactNode;
  onEdit?: () => void;
  onDelete?: () => void;
}

const BrandViewCard: React.FC<BrandViewCardProps> = ({
  id,
  title,
  description,
  outletsCount,
  status,
  logo,
  name,
  date,
  onEdit,
  onDelete,
}) => {
  return (
    <Card className="w-full gap-2">
      <CardHeader className="flex justify-between items-start">
        {logo}
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
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        <p className="text-sm text-gray-500">{description}</p>
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
            <p>{outletsCount} Outlets</p>
          </div>
          <div
            className={`px-3 py-1 font-semibold rounded-full text-sm flex justify-center items-center gap-x-2 ${
              status === "Active"
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
            <span>{status}</span>
          </div>
          <div className="text-sm font-semibold text-blue-700 bg-accent-green-light rounded-full px-2 py-0.5 flex justify-center items-center gap-x-2">
            <Image
              src={`${brandsIconPath}/user.svg`}
              alt="brand Manager User"
              width={12}
              height={12}
            />
            <span>{name}</span>
          </div>
          <div className="px-3 py-1 rounded-full text-sm text-gray bg-pagination-gray font-semibold flex justify-center items-center gap-x-2">
            <Image
              src={`${brandsIconPath}/calendar.svg`}
              alt="Calendar"
              width={16}
              height={16}
            />
            <span>{date}</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BrandViewCard;
