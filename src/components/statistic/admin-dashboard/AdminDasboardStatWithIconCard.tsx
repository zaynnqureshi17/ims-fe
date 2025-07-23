import { TypographyP } from "@/components/ui/text";
import Image from "next/image";

interface AdminDasboardStatWithIconCardProps {
  title: string;
  value: string | number;
  icon: string;
  shortDetails: string;
  shortTextColor?: string;
}

const AdminDasboardStatWithIconCard = ({
  title,
  value,
  icon,
  shortDetails,
  shortTextColor = "text-gray-500",
}: AdminDasboardStatWithIconCardProps) => {
  return (
    <div className="bg-white border rounded-lg shadow-sm p-4 w-full">
      <h3 className="text-sm font-semibold text-gray-700">{title}</h3>

      <div className="flex items-center justify-between mt-1">
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        <Image src={icon} alt={title} width={48} height={48} />
      </div>

      <TypographyP className={shortTextColor} text={shortDetails} />
    </div>
  );
};

export default AdminDasboardStatWithIconCard;
