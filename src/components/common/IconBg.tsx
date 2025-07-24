import Image from "next/image";
export interface IconBgProps {
  icon: string;
  title: string;
  width?: number;
  height?: number;
  className?: string;
  onClick?: () => void;
}
const IconBg = ({
  icon,
  title,
  className,
  width = 24,
  height = 24,
  onClick,
}: IconBgProps) => {
  return (
    <div
      className={`flex items-center justify-between p-4 rounded-lg ${className}`}
      onClick={onClick}
    >
      <Image src={icon} alt={title} width={width} height={height} />
    </div>
  );
};

export default IconBg;
