import IconBg from "@/components/common/IconBg";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { brandsActions, brandsIconPath } from "@/utils/PublicImageBaseUrl";
import Image from "next/image";

export interface OutletViewCardProps {
  title: string;
  brand: string;
  outletCode: string;
  status: "Active" | "Inactive";
  onEdit?: () => void;
  onDelete?: () => void;
}

const OutletViewCard: React.FC<OutletViewCardProps> = ({
  title,
  outletCode,
  status,
  brand,
  onEdit,
  onDelete,
}) => {
  return (
    <Card className="w-full gap-4">
      <CardHeader className="flex justify-between items-start">
        <div className="flex items-center gap-4">
          <CardTitle className="text-3xl font-semibold">{title}</CardTitle>
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
        </div>

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
      <CardFooter>
        <div className=" w-full flex justify-start gap-4 items-center text-sm font-medium">
          <div className=" text-accent-orange bg-accent-orange-light rounded-full px-2 py-0.5 ">
            <p>Code {outletCode}</p>
          </div>

          <div className=" text-blue-700 bg-accent-green-light rounded-full px-2 py-0.5 capitalize">
            <span>Brand: {brand}</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default OutletViewCard;
