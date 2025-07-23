import Image from "next/image";
import { useSidebar } from "../ui/sidebar";

const SideBarLogo = () => {
  const { state } = useSidebar();

  return (
    <>
      {state === "collapsed" ? (
        <div className="flex items-center justify-center ">
          <Image
            src="/svg-logo/right-logo.svg"
            alt="Rhombus Logo"
            width={10}
            height={10}
            className="block"
          />
          <Image
            src="/svg-logo/left-logo.svg"
            alt="Rhombus Logo"
            width={10}
            height={10}
            className="block"
          />
        </div>
      ) : (
        <Image
          src="/svg-logo/rhombus-logo-sidebar.svg"
          alt="Rhombus Logo"
          width={1000}
          height={1000}
          className="block"
        />
      )}
    </>
  );
};

export default SideBarLogo;
