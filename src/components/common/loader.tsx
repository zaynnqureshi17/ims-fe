import Image from "next/image";

const Loader = () => {
  return (
    <div className="relative flex justify-center items-center w-[110px] h-[110px]">
      {/* Outer spinning border */}
      <div
        className="absolute inset-0 rounded-full border-4 animate-spin"
        style={{
          borderTopColor: "var(--accent-orange)",
          borderRightColor: "var(--accent-orange-light)",
          borderBottomColor: "var(--accent-orange)",
          borderLeftColor: "var(--accent-orange-light)",
        }}
      ></div>

      {/* Inner circle with logos */}
      <div className="flex justify-center items-center bg-[#302253] w-[90px] h-[90px] rounded-full gap-4">
        {/* Right */}
        <Image
          src="/svg-logo/right-logo.svg"
          alt="Rhombus Logo"
          width={20}
          height={20}
        />
        {/* Left */}
        <Image
          src="/svg-logo/left-logo.svg"
          alt="Rhombus Logo"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};

export default Loader;
