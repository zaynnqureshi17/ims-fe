import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src="/svg-logo/rhombus-logo.svg"
      alt="Rhombus Logo"
      width={1000}
      height={1000}
      className="block"
    />
  );
};

export default Logo;
