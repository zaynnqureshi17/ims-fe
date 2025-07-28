import Image from "next/image";
import Link from "next/link";
import { useSidebar } from "../ui/sidebar";

const SideBarLogo = () => {
  const { state } = useSidebar();

  return (
    <>
      {state === "collapsed" ? (
        <Link
          href="/"
          className="flex items-center justify-center cursor-pointer"
        >
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
        </Link>
      ) : (
        <Link
          href="/"
          className="flex items-center justify-center cursor-pointer"
        >
          <Image
            src="/svg-logo/rhombus-logo-sidebar.svg"
            alt="Rhombus Logo"
            width={1000}
            height={1000}
            className="block"
          />
        </Link>
      )}
    </>
  );
};

export default SideBarLogo;
