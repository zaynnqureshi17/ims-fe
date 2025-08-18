import Image from "next/image";

interface WasteStatWithIconCardProps {
  title: string;
  value: string | number;
  icon: string;
}

const WasteStatWithIconCard = ({
  title,
  value,
  icon,
}: WasteStatWithIconCardProps) => {
  return (
    <div className="bg-white border flex justify-between rounded-lg shadow-sm p-4 w-full">
      <div className="flex flex-col items-start justify-between mt-1">
        <h3 className="text-sm font-semibold text-gray-700">{title}</h3>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>
      <Image src={icon} alt={title} width={24} height={24} />
    </div>
  );
};

export default WasteStatWithIconCard;
