import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src="/svg-logo/rhombus-logo.svg"
      alt="Rhombus Logo"
      width={800}
      height={800}
      className="block"
    />
  );
};

export default Logo;
